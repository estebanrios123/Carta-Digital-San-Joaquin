import re
from pathlib import Path

p = Path('index/script.js')
text = p.read_text(encoding='utf-8')

# parse categories
cat_match = re.search(r'const CATEGORIES = \[(.*?)\];', text, re.S)
if not cat_match:
    raise SystemExit('CATEGORIES not found')
cat_text = cat_match.group(1)
cat_objs = re.findall(r'\{([^\}]*)\}', cat_text, re.S)
categories = []
for obj in cat_objs:
    d = {}
    for m in re.finditer(r'\s*([a-zA-Z0-9_]+):\s*"(.*?)"\s*,?', obj):
        d[m.group(1)] = m.group(2)
    if d:
        categories.append(d)

# parse dishes
start = text.index('const DISHES = [')
brace = text.index('[', start)
level = 1
in_str = False
esc = False
section_chars = []
i = brace + 1
while i < len(text):
    c = text[i]
    if in_str:
        section_chars.append(c)
        if c == '"' and not esc:
            in_str = False
        esc = (c == '\\' and not esc)
    else:
        if c == '"':
            section_chars.append(c)
            in_str = True
            esc = False
        elif c == '[':
            section_chars.append(c)
            level += 1
        elif c == ']':
            if level == 1:
                break
            section_chars.append(c)
            level -= 1
        else:
            section_chars.append(c)
    i += 1
section = ''.join(section_chars)

objs = []
level = 0
in_str = False
esc = False
cur = ''
for c in section:
    if in_str:
        cur += c
        if c == '"' and not esc:
            in_str = False
        esc = (c == '\\' and not esc)
        continue
    if c == '"':
        cur += c
        in_str = True
        esc = False
        continue
    if c == '{':
        level += 1
        cur += c
        continue
    if c == '}':
        cur += c
        level -= 1
        if level == 0:
            objs.append(cur)
            cur = ''
        continue
    if level > 0:
        cur += c


dishes = []
for o in objs:
    d = {}
    for m in re.finditer(r'([a-zA-Z0-9_]+):\s*"(.*?)"\s*,?', o):
        d[m.group(1)] = m.group(2)
    for m in re.finditer(r'([a-zA-Z0-9_]+):\s*([0-9]+)\s*,?', o):
        d[m.group(1)] = int(m.group(2))
    if d.get('id') and d.get('name') and d.get('cat'):
        dishes.append(d)

category_ids = {cat['key']: idx + 1 for idx, cat in enumerate(categories)}

def sql_escape(value):
    return value.replace("'", "''")

sql_lines = []
sql_lines.append('DROP DATABASE IF EXISTS `san_joaquin`;')
sql_lines.append('CREATE DATABASE `san_joaquin` CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;')
sql_lines.append('USE `san_joaquin`;')
sql_lines.append('')
sql_lines.append('CREATE TABLE `roles` (')
sql_lines.append('  `role_id` INT AUTO_INCREMENT PRIMARY KEY,')
sql_lines.append('  `role_key` VARCHAR(50) NOT NULL UNIQUE,')
sql_lines.append('  `label` VARCHAR(100) NOT NULL,')
sql_lines.append('  `description` TEXT DEFAULT NULL,')
sql_lines.append('  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,')
sql_lines.append('  `updated_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP')
sql_lines.append(') ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;')
sql_lines.append('')
sql_lines.append('CREATE TABLE `permissions` (')
sql_lines.append('  `permission_id` INT AUTO_INCREMENT PRIMARY KEY,')
sql_lines.append('  `permission_key` VARCHAR(100) NOT NULL UNIQUE,')
sql_lines.append('  `label` VARCHAR(150) NOT NULL,')
sql_lines.append('  `description` TEXT DEFAULT NULL,')
sql_lines.append('  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,')
sql_lines.append('  `updated_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP')
sql_lines.append(') ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;')
sql_lines.append('')
sql_lines.append('CREATE TABLE `role_permissions` (')
sql_lines.append('  `role_permission_id` INT AUTO_INCREMENT PRIMARY KEY,')
sql_lines.append('  `role_id` INT NOT NULL,')
sql_lines.append('  `permission_id` INT NOT NULL,')
sql_lines.append('  FOREIGN KEY (`role_id`) REFERENCES `roles`(`role_id`) ON DELETE CASCADE,')
sql_lines.append('  FOREIGN KEY (`permission_id`) REFERENCES `permissions`(`permission_id`) ON DELETE CASCADE')
sql_lines.append(') ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE utf8mb4_unicode_ci;')
sql_lines.append('')
sql_lines.append('CREATE TABLE `staff` (')
sql_lines.append('  `staff_id` INT AUTO_INCREMENT PRIMARY KEY,')
sql_lines.append('  `username` VARCHAR(100) NOT NULL UNIQUE,')
sql_lines.append('  `password` VARCHAR(255) NOT NULL,')
sql_lines.append('  `full_name` VARCHAR(150) NOT NULL,')
sql_lines.append('  `role_id` INT NOT NULL,')
sql_lines.append('  `email` VARCHAR(150) NOT NULL UNIQUE,')
sql_lines.append('  `phone` VARCHAR(30) DEFAULT NULL,')
sql_lines.append('  `status` ENUM(\'active\', \'inactive\') NOT NULL DEFAULT \'active\',')
sql_lines.append('  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,')
sql_lines.append('  `updated_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,')
sql_lines.append('  `last_login` DATETIME DEFAULT NULL,')
sql_lines.append('  `notes` TEXT DEFAULT NULL,')
sql_lines.append('  FOREIGN KEY (`role_id`) REFERENCES `roles`(`role_id`) ON DELETE RESTRICT')
sql_lines.append(') ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE utf8mb4_unicode_ci;')
sql_lines.append('')
sql_lines.append('CREATE TABLE `customers` (')
sql_lines.append('  `customer_id` INT AUTO_INCREMENT PRIMARY KEY,')
sql_lines.append('  `name` VARCHAR(150) NOT NULL,')
sql_lines.append('  `email` VARCHAR(150) NOT NULL UNIQUE,')
sql_lines.append('  `password` VARCHAR(255) NOT NULL,')
sql_lines.append('  `registered_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,')
sql_lines.append('  `status` ENUM(\'active\', \'inactive\') NOT NULL DEFAULT \'active\'')
sql_lines.append(') ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE utf8mb4_unicode_ci;')
sql_lines.append('')
sql_lines.append('CREATE TABLE `menu_categories` (')
sql_lines.append('  `category_id` INT AUTO_INCREMENT PRIMARY KEY,')
sql_lines.append('  `category_key` VARCHAR(50) NOT NULL UNIQUE,')
sql_lines.append('  `name` VARCHAR(100) NOT NULL,')
sql_lines.append('  `description` TEXT DEFAULT NULL,')
sql_lines.append('  `accent_color` VARCHAR(50) DEFAULT NULL,')
sql_lines.append('  `icon` VARCHAR(50) DEFAULT NULL,')
sql_lines.append('  `sort_order` INT NOT NULL DEFAULT 0,')
sql_lines.append('  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,')
sql_lines.append('  `updated_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP')
sql_lines.append(') ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE utf8mb4_unicode_ci;')
sql_lines.append('')
sql_lines.append('CREATE TABLE `promotions` (')
sql_lines.append('  `promotion_id` INT AUTO_INCREMENT PRIMARY KEY,')
sql_lines.append('  `title` VARCHAR(200) NOT NULL,')
sql_lines.append('  `description` TEXT NOT NULL,')
sql_lines.append('  `price` DECIMAL(10,2) DEFAULT NULL,')
sql_lines.append('  `is_active` TINYINT(1) NOT NULL DEFAULT 1,')
sql_lines.append('  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,')
sql_lines.append('  `updated_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP')
sql_lines.append(') ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE utf8mb4_unicode_ci;')
sql_lines.append('')
sql_lines.append('CREATE TABLE `combos` (')
sql_lines.append('  `combo_id` INT AUTO_INCREMENT PRIMARY KEY,')
sql_lines.append('  `title` VARCHAR(200) NOT NULL,')
sql_lines.append('  `description` TEXT DEFAULT NULL,')
sql_lines.append('  `price` DECIMAL(10,2) DEFAULT NULL,')
sql_lines.append('  `is_active` TINYINT(1) NOT NULL DEFAULT 1,')
sql_lines.append('  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,')
sql_lines.append('  `updated_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP')
sql_lines.append(') ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE utf8mb4_unicode_ci;')
sql_lines.append('')
sql_lines.append('CREATE TABLE `combo_items` (')
sql_lines.append('  `combo_item_id` INT AUTO_INCREMENT PRIMARY KEY,')
sql_lines.append('  `combo_id` INT NOT NULL,')
sql_lines.append('  `item_key` VARCHAR(50) NOT NULL,')
sql_lines.append('  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,')
sql_lines.append('  FOREIGN KEY (`combo_id`) REFERENCES `combos`(`combo_id`) ON DELETE CASCADE')
sql_lines.append(') ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE utf8mb4_unicode_ci;')
sql_lines.append('')
sql_lines.append('CREATE TABLE `custom_dishes` (')
sql_lines.append('  `custom_dish_id` INT AUTO_INCREMENT PRIMARY KEY,')
sql_lines.append('  `category_id` INT NOT NULL,')
sql_lines.append('  `name` VARCHAR(200) NOT NULL,')
sql_lines.append('  `description` TEXT DEFAULT NULL,')
sql_lines.append('  `ingredients` TEXT DEFAULT NULL,')
sql_lines.append('  `portion` VARCHAR(100) DEFAULT NULL,')
sql_lines.append('  `price` DECIMAL(10,2) NOT NULL DEFAULT 0.00,')
sql_lines.append('  `model_path` VARCHAR(255) DEFAULT NULL,')
sql_lines.append('  `is_available` TINYINT(1) NOT NULL DEFAULT 1,')
sql_lines.append('  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,')
sql_lines.append('  `updated_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,')
sql_lines.append('  FOREIGN KEY (`category_id`) REFERENCES `menu_categories`(`category_id`) ON DELETE CASCADE')
sql_lines.append(') ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE utf8mb4_unicode_ci;')
sql_lines.append('')
sql_lines.append('CREATE TABLE `menu_categories` (')
sql_lines.append('  `category_id` INT AUTO_INCREMENT PRIMARY KEY,')
sql_lines.append('  `category_key` VARCHAR(50) NOT NULL UNIQUE,')
sql_lines.append('  `name` VARCHAR(100) NOT NULL,')
sql_lines.append('  `description` TEXT DEFAULT NULL,')
sql_lines.append('  `accent_color` VARCHAR(50) DEFAULT NULL,')
sql_lines.append('  `icon` VARCHAR(50) DEFAULT NULL,')
sql_lines.append('  `sort_order` INT NOT NULL DEFAULT 0,')
sql_lines.append('  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,')
sql_lines.append('  `updated_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP')
sql_lines.append(') ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;')
sql_lines.append('')
sql_lines.append('CREATE TABLE `menu_items` (')
sql_lines.append('  `item_id` INT AUTO_INCREMENT PRIMARY KEY,')
sql_lines.append('  `category_id` INT NOT NULL,')
sql_lines.append('  `item_key` VARCHAR(50) NOT NULL UNIQUE,')
sql_lines.append('  `name` VARCHAR(200) NOT NULL,')
sql_lines.append('  `description` TEXT DEFAULT NULL,')
sql_lines.append('  `ingredients` TEXT DEFAULT NULL,')
sql_lines.append('  `portion` VARCHAR(100) DEFAULT NULL,')
sql_lines.append('  `price` DECIMAL(10,2) NOT NULL DEFAULT 0.00,')
sql_lines.append('  `model_path` VARCHAR(255) DEFAULT NULL,')
sql_lines.append('  `is_available` TINYINT(1) NOT NULL DEFAULT 1,')
sql_lines.append('  `is_popular` TINYINT(1) NOT NULL DEFAULT 0,')
sql_lines.append('  `is_chef_recommendation` TINYINT(1) NOT NULL DEFAULT 0,')
sql_lines.append('  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,')
sql_lines.append('  `updated_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,')
sql_lines.append('  FOREIGN KEY (`category_id`) REFERENCES `menu_categories`(`category_id`) ON DELETE CASCADE')
sql_lines.append(') ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;')
sql_lines.append('')

for idx, cat in enumerate(categories, start=1):
    key = sql_escape(cat['key'])
    name = sql_escape(cat['label'])
    desc = sql_escape(cat.get('tag', ''))
    accent = sql_escape(cat.get('accent', ''))
    icon = sql_escape(cat.get('icon', ''))
    sql_lines.append("INSERT INTO `menu_categories` (`category_id`,`category_key`,`name`,`description`,`accent_color`,`icon`,`sort_order`) VALUES (%d, '%s', '%s', '%s', '%s', '%s', %d);" % (idx, key, name, desc, accent, icon, idx))

sql_lines.append('')

for d in dishes:
    cat_key = d.get('cat', '')
    cat_id = category_ids.get(cat_key, 0)
    item_key = sql_escape(d.get('id', ''))
    name = sql_escape(d.get('name', ''))
    ingredients = sql_escape(d.get('ingredientes', ''))
    portion = sql_escape(d.get('cantidad', ''))
    model_path = sql_escape(d.get('model', ''))
    price = d.get('precio', 0)
    description = ingredients
    portion_sql = "'%s'" % portion if portion else 'NULL'
    sql_lines.append("INSERT INTO `menu_items` (`category_id`,`item_key`,`name`,`description`,`ingredients`,`portion`,`price`,`model_path`,`is_available`,`is_popular`,`is_chef_recommendation`) VALUES (%d, '%s', '%s', '%s', '%s', %s, %.2f, '%s', 1, 0, 0);" % (cat_id, item_key, name, description, ingredients, portion_sql, price, model_path))

sql_lines.append('')
sql_lines.append("INSERT INTO `roles` (`role_key`,`label`,`description`) VALUES ('admin','Administrador','Acceso completo al sistema');")
sql_lines.append("INSERT INTO `roles` (`role_key`,`label`,`description`) VALUES ('mesero','Mesero','Acceso a la gestión de mesas y pedidos');")
sql_lines.append("INSERT INTO `roles` (`role_key`,`label`,`description`) VALUES ('cocina','Cocina','Acceso a la gestión de preparaciones');")
sql_lines.append("INSERT INTO `roles` (`role_key`,`label`,`description`) VALUES ('cajero','Cajero','Acceso a cobros y facturación');")
sql_lines.append('')
sql_lines.append("INSERT INTO `permissions` (`permission_key`,`label`,`description`) VALUES ('manage_menu','Gestionar menú','Crear y editar platos y categorías');")
sql_lines.append("INSERT INTO `permissions` (`permission_key`,`label`,`description`) VALUES ('manage_promotions','Gestionar promociones','Crear y editar promociones y combos');")
sql_lines.append("INSERT INTO `permissions` (`permission_key`,`label`,`description`) VALUES ('manage_users','Gestionar usuarios','Administrar cuentas de clientes y personal');")
sql_lines.append("INSERT INTO `permissions` (`permission_key`,`label`,`description`) VALUES ('view_reports','Ver reportes','Acceder a estadísticas de uso');")
sql_lines.append('')
sql_lines.append("INSERT INTO `role_permissions` (`role_id`,`permission_id`) VALUES (1,1);")
sql_lines.append("INSERT INTO `role_permissions` (`role_id`,`permission_id`) VALUES (1,2);")
sql_lines.append("INSERT INTO `role_permissions` (`role_id`,`permission_id`) VALUES (1,3);")
sql_lines.append("INSERT INTO `role_permissions` (`role_id`,`permission_id`) VALUES (1,4);")
sql_lines.append('')
sql_lines.append("INSERT INTO `staff` (`username`,`password`,`full_name`,`role_id`,`email`,`phone`,`status`) VALUES ('griostavera','262025RiosEspinosa','Administrador Principal',1,'griostavera@gmail.com','+57-3000000000','active');")

Path('san_joaquin_schema.sql').write_text('\n'.join(sql_lines), encoding='utf-8')
print(f'Created san_joaquin_schema.sql with {len(categories)} categories and {len(dishes)} menu items.')
