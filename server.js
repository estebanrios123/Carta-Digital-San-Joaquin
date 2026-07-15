const express = require('express');
const cors = require('cors');
const mysql = require('mysql2/promise');
const crypto = require('crypto');

const app = express();
app.use(cors());
app.use(express.json());

const adminSessions = new Map();
const ADMIN_SESSION_TTL_MS = 1000 * 60 * 60; // 1 hora

function generateToken() {
  return crypto.randomBytes(24).toString('hex');
}

function getAdminToken(req) {
  const auth = req.headers.authorization || '';
  const parts = auth.split(' ');
  return parts.length === 2 && parts[0] === 'Bearer' ? parts[1] : null;
}

function verifyAdminToken(req, res, next) {
  const token = getAdminToken(req);
  if (!token || !adminSessions.has(token)) {
    return res.status(401).json({ error: 'Token de administrador inválido o expirado' });
  }
  const session = adminSessions.get(token);
  if (Date.now() > session.expiresAt) {
    adminSessions.delete(token);
    return res.status(401).json({ error: 'Token de administrador inválido o expirado' });
  }
  req.adminSession = session;
  next();
}

const DB_CONFIG = {
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'san_joaquin'
};

async function getConnection() {
  const conn = await mysql.createConnection(DB_CONFIG);
  await conn.query("SET SESSION sql_mode='TRADITIONAL'");
  return conn;
}

app.get('/api/categories', async (req, res) => {
  try {
    const conn = await getConnection();
    const [rows] = await conn.query('SELECT category_id, category_key, name, description, accent_color, icon, sort_order FROM menu_categories ORDER BY sort_order');
    await conn.end();
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al cargar categorías' });
  }
});

app.get('/api/items', async (req, res) => {
  try {
    const conn = await getConnection();
    const [rows] = await conn.query(
      'SELECT mi.item_id, mc.category_key AS cat, mi.item_key, mi.name, mi.description, mi.ingredients, mi.portion, mi.price, mi.model_path, mi.is_available, mi.is_popular, mi.is_chef_recommendation FROM menu_items mi JOIN menu_categories mc ON mi.category_id = mc.category_id ORDER BY mc.sort_order, mi.name'
    );
    await conn.end();
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al cargar platos' });
  }
});

app.get('/api/admin/login', async (req, res) => {
  res.status(400).json({ error: 'Use POST /api/admin/login' });
});

app.post('/api/admin/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: 'Correo y contraseña requeridos' });
    }
    const conn = await getConnection();
    const [rows] = await conn.query('SELECT s.staff_id, s.full_name, s.email, r.role_key FROM staff s JOIN roles r ON s.role_id = r.role_id WHERE s.email = ? AND s.password = ? AND s.status = ? LIMIT 1', [email, password, 'active']);
    await conn.end();
    if (!rows.length) {
      return res.status(401).json({ error: 'Credenciales inválidas' });
    }
    const user = rows[0];
    if (user.role_key !== 'admin') {
      return res.status(403).json({ error: 'Solo el rol admin puede acceder' });
    }
    const token = generateToken();
    adminSessions.set(token, {
      staff_id: user.staff_id,
      name: user.full_name,
      email: user.email,
      role: user.role_key,
      expiresAt: Date.now() + ADMIN_SESSION_TTL_MS
    });
    res.json({ staff_id: user.staff_id, name: user.full_name, email: user.email, role: user.role_key, token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al iniciar sesión admin' });
  }
});

app.get('/api/resources', async (req, res) => {
  try {
    const conn = await getConnection();
    const [promotions] = await conn.query('SELECT promotion_id AS id, title, description, price FROM promotions WHERE is_active = 1 ORDER BY created_at DESC');
    const [combos] = await conn.query('SELECT combo_id AS id, title, description, price FROM combos WHERE is_active = 1 ORDER BY created_at DESC');
    const [comboItems] = await conn.query('SELECT combo_id, item_key FROM combo_items');
    const [customDishes] = await conn.query('SELECT cd.custom_dish_id AS id, mc.category_key, cd.name, cd.ingredients, cd.portion, cd.price, cd.model_path FROM custom_dishes cd JOIN menu_categories mc ON cd.category_id = mc.category_id WHERE cd.is_available = 1 ORDER BY cd.created_at DESC');
    await conn.end();
    const combosMap = combos.map(combo => ({ ...combo, items: comboItems.filter(i => i.combo_id === combo.id).map(i => i.item_key) }));
    res.json({ promotions, combos: combosMap, customDishes });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al cargar recursos públicos' });
  }
});

app.get('/api/admin/promotions', async (req, res) => {
  try {
    const conn = await getConnection();
    const [rows] = await conn.query('SELECT promotion_id AS id, title, description, price, is_active FROM promotions WHERE is_active = 1 ORDER BY created_at DESC');
    await conn.end();
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al cargar promociones' });
  }
});

app.post('/api/admin/promotions', verifyAdminToken, async (req, res) => {
  try {
    const { title, description, price } = req.body;
    if (!title || !description) {
      return res.status(400).json({ error: 'Título y descripción requeridos' });
    }
    const conn = await getConnection();
    const [result] = await conn.query('INSERT INTO promotions (title, description, price, is_active) VALUES (?, ?, ?, 1)', [title, description, price || null]);
    await conn.end();
    res.json({ id: result.insertId, title, description, price: price || null });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al crear promoción' });
  }
});

app.delete('/api/admin/promotions/:id', verifyAdminToken, async (req, res) => {
  try {
    const promotionId = parseInt(req.params.id, 10);
    if (!promotionId) {
      return res.status(400).json({ error: 'ID de promoción inválido' });
    }
    const conn = await getConnection();
    await conn.query('DELETE FROM promotions WHERE promotion_id = ?', [promotionId]);
    await conn.end();
    res.json({ deleted: promotionId });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al eliminar promoción' });
  }
});

app.get('/api/admin/combos', async (req, res) => {
  try {
    const conn = await getConnection();
    const [combos] = await conn.query('SELECT combo_id AS id, title, description, price, is_active FROM combos WHERE is_active = 1 ORDER BY created_at DESC');
    const [items] = await conn.query('SELECT combo_id, item_key FROM combo_items');
    await conn.end();
    const combosById = combos.map(combo => ({ ...combo, items: items.filter(i => i.combo_id === combo.id).map(i => i.item_key) }));
    res.json(combosById);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al cargar combos' });
  }
});

app.post('/api/admin/combos', verifyAdminToken, async (req, res) => {
  try {
    const { title, description, price, items } = req.body;
    if (!title || !items || !Array.isArray(items) || !items.length) {
      return res.status(400).json({ error: 'Título y lista de items requeridos' });
    }
    const conn = await getConnection();
    const [result] = await conn.query('INSERT INTO combos (title, description, price, is_active) VALUES (?, ?, ?, 1)', [title, description || null, price || null]);
    const comboId = result.insertId;
    const comboItems = items.map(item => [comboId, item]);
    await conn.query('INSERT INTO combo_items (combo_id, item_key) VALUES ?', [comboItems]);
    await conn.end();
    res.json({ id: comboId, title, description, price: price || null, items });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al crear combo' });
  }
});

app.delete('/api/admin/combos/:id', verifyAdminToken, async (req, res) => {
  try {
    const comboId = parseInt(req.params.id, 10);
    if (!comboId) {
      return res.status(400).json({ error: 'ID de combo inválido' });
    }
    const conn = await getConnection();
    await conn.query('DELETE FROM combo_items WHERE combo_id = ?', [comboId]);
    await conn.query('DELETE FROM combos WHERE combo_id = ?', [comboId]);
    await conn.end();
    res.json({ deleted: comboId });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al eliminar combo' });
  }
});

app.post('/api/admin/custom-dishes', verifyAdminToken, async (req, res) => {
  try {
    const { name, price, category_key, ingredientes, cantidad } = req.body;
    if (!name || !category_key || price == null) {
      return res.status(400).json({ error: 'Nombre, categoría y precio requeridos' });
    }
    const conn = await getConnection();
    const [catRows] = await conn.query('SELECT category_id FROM menu_categories WHERE category_key = ? LIMIT 1', [category_key]);
    if (!catRows.length) {
      await conn.end();
      return res.status(400).json({ error: 'Categoría inválida' });
    }
    const categoryId = catRows[0].category_id;
    const [result] = await conn.query('INSERT INTO custom_dishes (category_id, name, description, ingredients, portion, price, model_path, is_available) VALUES (?, ?, ?, ?, ?, ?, ?, 1)', [categoryId, name, null, ingredientes || null, cantidad || null, price, null]);
    await conn.end();
    res.json({ id: result.insertId, category_key, name, description: null, ingredients: ingredientes || null, portion: cantidad || null, price, model_path: null });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al crear plato personalizado' });
  }
});

app.delete('/api/admin/custom-dishes/:id', verifyAdminToken, async (req, res) => {
  try {
    const dishId = parseInt(req.params.id, 10);
    if (!dishId) {
      return res.status(400).json({ error: 'ID de plato inválido' });
    }
    const conn = await getConnection();
    await conn.query('DELETE FROM custom_dishes WHERE custom_dish_id = ?', [dishId]);
    await conn.end();
    res.json({ deleted: dishId });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al eliminar plato personalizado' });
  }
});

app.get('/api/admin/resources', verifyAdminToken, async (req, res) => {
  try {
    const conn = await getConnection();
    const [promotions] = await conn.query('SELECT promotion_id AS id, title, description, price FROM promotions WHERE is_active = 1 ORDER BY created_at DESC');
    const [combos] = await conn.query('SELECT combo_id AS id, title, description, price FROM combos WHERE is_active = 1 ORDER BY created_at DESC');
    const [comboItems] = await conn.query('SELECT combo_id, item_key FROM combo_items');
    const [customDishes] = await conn.query(
      'SELECT cd.custom_dish_id AS id, mc.category_key, cd.name, cd.ingredients, cd.portion, cd.price, cd.model_path FROM custom_dishes cd JOIN menu_categories mc ON cd.category_id = mc.category_id WHERE cd.is_available = 1 ORDER BY cd.created_at DESC'
    );
    await conn.end();
    const combosMap = combos.map(combo => ({ ...combo, items: comboItems.filter(i => i.combo_id === combo.id).map(i => i.item_key) }));
    res.json({ promotions, combos: combosMap, customDishes });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al cargar recursos admin' });
  }
});

app.listen(3000, () => {
  console.log('Backend API corriendo en http://localhost:3000');
});
