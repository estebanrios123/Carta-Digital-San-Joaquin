/* =========================================================
   SAN JOAQUÍN — CARTA DIGITAL
   Datos tomados de la carta física del restaurante.

   MODELOS 3D
   Cada plato tiene un campo "model" con la ruta a su archivo
   .glb (por ejemplo: "../modelos 3D/paella.glb"). Ya te dejé
   una ruta sugerida con el nombre del plato — solo escanea tu
   modelo en Meshroom, expórtalo como .glb, guárdalo con ese
   mismo nombre en la carpeta "modelos 3D" (o ajusta la ruta),
   y aparecerá automáticamente. Si el archivo no existe todavía,
   la tarjeta simplemente se ve vacía hasta que lo agregues.
   ========================================================= */

const DISHES = [
  /* ---------- ENTRADAS ---------- */
  {
    id: "e1",
    cat: "entradas",
    name: "Ceviche de Chinchulines",
    ingredientes: "Chinchulines crocantes, salsa cítrica de la casa",
    precio: 20000,
    model: "../modelos 3D/ceviche-de-chinchulines.glb"
  },
  {
    id: "e2",
    cat: "entradas",
    name: "Mini Juanvalerio y Guacamole",
    ingredientes: "Patacón mini, carne y pollo desmechado, guacamole",
    precio: 15000,
    model: "../modelos 3D/mini-juanvalerio-y-guacamole.glb"
  },
  {
    id: "e3",
    cat: "entradas",
    name: "Arepa de Chócolo Ropa Vieja - Queso",
    ingredientes: "Arepa de chócolo, ropa vieja, queso fundido",
    precio: 18000,
    model: "../modelos 3D/arepa-de-chocolo-ropa-vieja-queso.glb"
  },
  {
    id: "e4",
    cat: "entradas",
    name: "Patacones con Hogao o Suero Costeño",
    ingredientes: "Patacones crocantes, hogao casero o suero costeño",
    precio: 15000,
    model: "../modelos 3D/patacones-con-hogao-o-suero-costeno.glb"
  },
  {
    id: "e5",
    cat: "entradas",
    name: "Maduro con Queso y Crema de Leche",
    ingredientes: "Maduro asado, queso, crema de leche",
    precio: 17000,
    model: "../modelos 3D/maduro-con-queso-y-crema-de-leche.glb"
  },
  {
    id: "e6",
    cat: "entradas",
    name: "Empanadas de Pipián",
    ingredientes: "8 unidades, relleno de pipián",
    precio: 12000,
    model: "../modelos 3D/empanadas-de-pipian.glb"
  },
  {
    id: "e7",
    cat: "entradas",
    name: "Crocante Chunchullada",
    ingredientes: "Chunchullo crocante",
    precio: 20000,
    model: "../modelos 3D/crocante-chunchullada.glb"
  },
  {
    id: "e8",
    cat: "entradas",
    name: "Crocante de Chicharrones",
    ingredientes: "250 g de chicharrón crocante",
    precio: 22000,
    model: "../modelos 3D/crocante-de-chicharrones.glb"
  },
  {
    id: "e9",
    cat: "entradas",
    name: "Chorizo Santarrosano",
    ingredientes: "2 unidades",
    precio: 17000,
    model: "../modelos 3D/chorizo-santarrosano.glb"
  },
  {
    id: "e10",
    cat: "entradas",
    name: "Mazamorra con Leche y Panela",
    ingredientes: "Mazamorra tradicional, leche, panela",
    precio: 10000,
    model: "../modelos 3D/mazamorra-con-leche-y-panela.glb"
  },
  {
    id: "e11",
    cat: "entradas",
    name: "Sopa del Día",
    ingredientes: "Consulta la preparación con tu mesero",
    precio: 6000,
    model: "../modelos 3D/sopa-del-dia.glb"
  },

  /* ---------- CRIOLLO COLOMBIANO ---------- */
  {
    id: "cr1",
    cat: "criollo",
    name: "Sudado Mixto de Cola y Murillo",
    ingredientes: "Arroz, papa, yuca, mazorca, aguacate",
    precio: 49000,
    model: "../modelos 3D/sudado-mixto-de-cola-y-murillo.glb"
  },
  {
    id: "cr2",
    cat: "criollo",
    name: "Sobrebarriga en sus Jugos a la Parrilla",
    ingredientes: "Papa criolla, maduro, guacamole",
    precio: 48000,
    model: "../modelos 3D/sobrebarriga-en-sus-jugos-a-la-parrilla.glb"
  },
  {
    id: "cr3",
    cat: "criollo",
    name: "Sobrebarriga en Salsa Criolla",
    ingredientes: "Arroz, patacón",
    precio: 48000,
    model: "../modelos 3D/sobrebarriga-en-salsa-criolla.glb"
  },
  {
    id: "cr4",
    cat: "criollo",
    name: "Ubre al Carbón",
    ingredientes: "Papa criolla, maduro, ensalada, ají casero",
    precio: 48000,
    model: "../modelos 3D/ubre-al-carbon.glb"
  },
  {
    id: "cr5",
    cat: "criollo",
    name: "Lengua Criolla",
    ingredientes: "Papa francesa, arroz",
    precio: 48000,
    model: "../modelos 3D/lengua-criolla.glb"
  },
  {
    id: "cr6",
    cat: "criollo",
    name: "Lengua en Champiñones",
    ingredientes: "Papa francesa, arroz",
    precio: 48000,
    model: "../modelos 3D/lengua-en-champinones.glb"
  },
  {
    id: "cr7",
    cat: "criollo",
    name: "Parrillada Mixta de Carnes",
    ingredientes: "Sobrebarriga, morcilla, ubre, costilla de cerdo, chorizo santarrosano, chunchullo, papa criolla, torta, patacón, ensalada, ají casero",
    cantidad: "2 personas",
    precio: 68000,
    model: "../modelos 3D/parrillada-mixta-de-carnes.glb"
  },
  {
    id: "cr8",
    cat: "criollo",
    name: "5 Carnes Criollo",
    ingredientes: "Churrasquillo, costilla de cerdo, sobrebarriga, torta, papa criolla, patacón, ensalada",
    precio: 58000,
    model: "../modelos 3D/5-carnes-criollo.glb"
  },
  {
    id: "cr9",
    cat: "criollo",
    name: "Bandeja Campesina",
    ingredientes: "Frijol, arroz, huevo, chicharrón, chorizo, maduro, aguacate",
    precio: 42000,
    model: "../modelos 3D/bandeja-campesina.glb"
  },

  /* ---------- PORCIONES ---------- */
  {
    id: "po1",
    cat: "porciones",
    name: "Papa Francesa",
    ingredientes: "Porción adicional",
    precio: 6000,
    model: "../modelos 3D/papa-francesa.glb"
  },
  {
    id: "po2",
    cat: "porciones",
    name: "Arroz",
    ingredientes: "Porción adicional",
    precio: 4000,
    model: "../modelos 3D/arroz.glb"
  },
  {
    id: "po3",
    cat: "porciones",
    name: "Ensalada",
    ingredientes: "Porción adicional",
    precio: 4000,
    model: "../modelos 3D/ensalada.glb"
  },
  {
    id: "po4",
    cat: "porciones",
    name: "Torta",
    ingredientes: "Porción adicional",
    precio: 4000,
    model: "../modelos 3D/torta.glb"
  },

  /* ---------- SALUDABLE ---------- */
  {
    id: "sa1",
    cat: "saludable",
    name: "Wrap de Pollo",
    ingredientes: "Tortilla, lomito de pollo grille, lechuga, tomate, aguacate, vinagreta de la casa",
    precio: 26000,
    model: "../modelos 3D/wrap-de-pollo.glb"
  },
  {
    id: "sa2",
    cat: "saludable",
    name: "Ensalada San Joaquín",
    ingredientes: "200 g de camarón tigre, lechuga, tomate cherry confitados, aguacate, cilantro, albaca, piña caramelizada, frutos secos, parmesano, vinagreta de tamarindo",
    precio: 36000,
    model: "../modelos 3D/ensalada-san-joaquin.glb"
  },
  {
    id: "sa3",
    cat: "saludable",
    name: "Ensalada César",
    ingredientes: "200 g de crocante de pechuga en julianas, lechuga, cilantro, parmesano, tomate cherry confitados, frutos secos, crutones de pan focaccia, queso asado, aderezo",
    precio: 32000,
    model: "../modelos 3D/ensalada-cesar.glb"
  },

  /* ---------- POLLO ---------- */
  {
    id: "pl1",
    cat: "pollo",
    name: "Pollo Maizal Tradicional",
    ingredientes: "Julianas de pechuga a la miel mostaza, crutones de queso asado, queso búfala, maíz tierno, montada sobre arepa de chócolo y queso fundido, papa francesa",
    precio: 42000,
    model: "../modelos 3D/pollo-maizal-tradicional.glb"
  },
  {
    id: "pl2",
    cat: "pollo",
    name: "Pollo Maizal Brutal",
    ingredientes: "Camarón apanado, julianas de pechuga a la miel mostaza, crutones de queso asado, queso búfala, maíz tierno, montada sobre arepa de chócolo y queso fundido, papa francesa",
    precio: 48000,
    model: "../modelos 3D/pollo-maizal-brutal.glb"
  },
  {
    id: "pl3",
    cat: "pollo",
    name: "Churrasco de Pollo",
    ingredientes: "Dos pernejiles de pollo deshuesados, chimichurri, papa criolla, ensalada",
    precio: 39000,
    model: "../modelos 3D/churrasco-de-pollo.glb"
  },
  {
    id: "pl4",
    cat: "pollo",
    name: "Pechuga Mix de Frutas Gratinada",
    ingredientes: "Frutas en almíbar, papa francesa, arroz",
    precio: 42000,
    model: "../modelos 3D/pechuga-mix-de-frutas-gratinada.glb"
  },
  {
    id: "pl5",
    cat: "pollo",
    name: "Pechuga Maduro Gratinada",
    ingredientes: "Papa francesa, arroz",
    precio: 42000,
    model: "../modelos 3D/pechuga-maduro-gratinada.glb"
  },
  {
    id: "pl6",
    cat: "pollo",
    name: "Pechuga Champiñón",
    ingredientes: "Papa francesa, arroz",
    precio: 42000,
    model: "../modelos 3D/pechuga-champinon.glb"
  },
  {
    id: "pl7",
    cat: "pollo",
    name: "Pechuga Parrilla",
    ingredientes: "Papa francesa, torta, ensalada",
    precio: 40000,
    model: "../modelos 3D/pechuga-parrilla.glb"
  },

  /* ---------- RES ---------- */
  {
    id: "re1",
    cat: "res",
    name: "Lomito Salteado, Camarón y Vegetales",
    ingredientes: "Papa francesa",
    precio: 55000,
    model: "../modelos 3D/lomito-salteado-camaron-y-vegetales.glb"
  },
  {
    id: "re2",
    cat: "res",
    name: "Baby Beef",
    ingredientes: "Corte tierno derivado del lomito, papa francesa, chimichurri, ensalada",
    precio: 54000,
    model: "../modelos 3D/baby-beef.glb"
  },
  {
    id: "re3",
    cat: "res",
    name: "Lomito Piazzola",
    ingredientes: "Corte de lomito bañado con salsa piazzola, queso mozzarella, rodajas de tomate, arroz, papa francesa",
    precio: 55000,
    model: "../modelos 3D/lomito-piazzola.glb"
  },
  {
    id: "re4",
    cat: "res",
    name: "Churrasco Parrilla en Salsa con Camarón",
    ingredientes: "Arroz, papa francesa",
    precio: 59000,
    model: "../modelos 3D/churrasco-parrilla-en-salsa-con-camaron.glb"
  },
  {
    id: "re5",
    cat: "res",
    name: "Filet Mignón",
    ingredientes: "Medallones de lomito, tocineta, montados en puré de papa, bañados en salsa champiñón, arroz",
    precio: 58000,
    model: "../modelos 3D/filet-mignon.glb"
  },
  {
    id: "re6",
    cat: "res",
    name: "Blue Cheese",
    ingredientes: "Medallones de lomito, montados en puré de plátano maduro, bañado en salsa tres quesos, vegetales salteados",
    precio: 58000,
    model: "../modelos 3D/blue-cheese.glb"
  },
  {
    id: "re7",
    cat: "res",
    name: "Solomito Cheddar",
    ingredientes: "Medallones de lomito, con queso cheddar, crocante tocineta, papa francesa",
    precio: 59000,
    model: "../modelos 3D/solomito-cheddar.glb"
  },
  {
    id: "re8",
    cat: "res",
    name: "Punta de Anca Parrilla",
    ingredientes: "Corte tradicional del anca, papa criolla, maduro, ensalada, chimichurri",
    precio: 54000,
    model: "../modelos 3D/punta-de-anca-parrilla.glb"
  },
  {
    id: "re9",
    cat: "res",
    name: "Churrasco Parrilla",
    ingredientes: "Papa criolla, torta, ensalada, chimichurri",
    precio: 47000,
    model: "../modelos 3D/churrasco-parrilla.glb"
  },
  {
    id: "re10",
    cat: "res",
    name: "Churrasco Parrilla Encebollado",
    ingredientes: "Papa criolla, torta, ensalada",
    precio: 47000,
    model: "../modelos 3D/churrasco-parrilla-encebollado.glb"
  },
  {
    id: "re11",
    cat: "res",
    name: "Churrasco Parrilla Encebollado a Caballo",
    ingredientes: "Papa criolla, torta, dos huevos fritos, ensalada",
    precio: 49000,
    model: "../modelos 3D/churrasco-parrilla-encebollado-a-caballo.glb"
  },
  {
    id: "re12",
    cat: "res",
    name: "Picaña Mixta",
    ingredientes: "Pollo, res, cerdo, chicharrón, costilla de cerdo, butifarra, chorizo vara, chorizo, papa criolla, 3 empanadas, mini juanvalerio, patacón, ají, guacamole",
    cantidad: "3 personas",
    precio: 88000,
    model: "../modelos 3D/picana-mixta.glb"
  },

  /* ---------- CERDO ---------- */
  {
    id: "ce1",
    cat: "cerdo",
    name: "Crocante Costichic",
    ingredientes: "Costilla carnuda con piel, yuca al vapor, maduro, guacamole",
    precio: 47000,
    model: "../modelos 3D/crocante-costichic.glb"
  },
  {
    id: "ce2",
    cat: "cerdo",
    name: "Panceta Crocante Carnuda",
    ingredientes: "Yuca al vapor, maduro, guacamole",
    precio: 47000,
    model: "../modelos 3D/panceta-crocante-carnuda.glb"
  },
  {
    id: "ce3",
    cat: "cerdo",
    name: "Chuleta Valluna",
    ingredientes: "Papa francesa, ensalada, maduro, salsa de ajo",
    precio: 42000,
    model: "../modelos 3D/chuleta-valluna.glb"
  },
  {
    id: "ce4",
    cat: "cerdo",
    name: "Costillas San Joaquín",
    ingredientes: "Rack de costilla horneado en salsa BBQ de la casa, montañas de puré de papa, vegetales salteados",
    precio: 56000,
    model: "../modelos 3D/costillas-san-joaquin.glb"
  },
  {
    id: "ce5",
    cat: "cerdo",
    name: "Costillas Ahumadas con Salsa BBQ",
    ingredientes: "Papa francesa, torta, ensalada",
    precio: 43000,
    model: "../modelos 3D/costillas-ahumadas-con-salsa-bbq.glb"
  },
  {
    id: "ce6",
    cat: "cerdo",
    name: "Lomo a la Parrilla",
    ingredientes: "Papa criolla, torta, ensalada, chimichurri",
    precio: 39000,
    model: "../modelos 3D/lomo-a-la-parrilla.glb"
  },
  {
    id: "ce7",
    cat: "cerdo",
    name: "Lomo Champiñón",
    ingredientes: "Papa francesa, arroz",
    precio: 43000,
    model: "../modelos 3D/lomo-champinon.glb"
  },
  {
    id: "ce8",
    cat: "cerdo",
    name: "Lomo Mix de Frutas Gratinado",
    ingredientes: "Frutas en almíbar, papa rústica rizada, arroz",
    precio: 43000,
    model: "../modelos 3D/lomo-mix-de-frutas-gratinado.glb"
  },
  {
    id: "ce9",
    cat: "cerdo",
    name: "Lomo Maduro Gratinado",
    ingredientes: "Papa francesa, arroz",
    precio: 43000,
    model: "../modelos 3D/lomo-maduro-gratinado.glb"
  },
  {
    id: "ce10",
    cat: "cerdo",
    name: "Lomo Gratinado + Mermelada Tocineta",
    ingredientes: "Papa francesa, arroz",
    precio: 43000,
    model: "../modelos 3D/lomo-gratinado-mermelada-tocineta.glb"
  },

  /* ---------- PESCADOS ---------- */
  {
    id: "pz1",
    cat: "pescados",
    name: "Mar y Tierra",
    ingredientes: "Porción de ceviche de camarón, salmón a la parrilla, medallón de lomito filet mignon, pechuga mix de frutas gratinada, arroz, papa francesa",
    precio: 75000,
    model: "../modelos 3D/mar-y-tierra.glb"
  },
  {
    id: "pz2",
    cat: "pescados",
    name: "Ceviche Camarón",
    ingredientes: "Chips de plátano",
    precio: 38000,
    model: "../modelos 3D/ceviche-camaron.glb"
  },
  {
    id: "pz3",
    cat: "pescados",
    name: "Trucha en Salsa y Camarón",
    ingredientes: "Papa francesa, ensalada, tártara",
    precio: 48000,
    model: "../modelos 3D/trucha-en-salsa-y-camaron.glb"
  },
  {
    id: "pz4",
    cat: "pescados",
    name: "Trucha Ahumada",
    ingredientes: "Papa francesa, ensalada, tártara",
    precio: 43000,
    model: "../modelos 3D/trucha-ahumada.glb"
  },
  {
    id: "pz5",
    cat: "pescados",
    name: "Trucha Parrilla",
    ingredientes: "Papa francesa, ensalada",
    precio: 39000,
    model: "../modelos 3D/trucha-parrilla.glb"
  },
  {
    id: "pz6",
    cat: "pescados",
    name: "Trucha al Ajillo",
    ingredientes: "Papa francesa, ensalada",
    precio: 40000,
    model: "../modelos 3D/trucha-al-ajillo.glb"
  },
  {
    id: "pz7",
    cat: "pescados",
    name: "Mojarra Dorada",
    ingredientes: "Patacón, ensalada",
    precio: 42000,
    model: "../modelos 3D/mojarra-dorada.glb"
  },
  {
    id: "pz8",
    cat: "pescados",
    name: "Mojarra a la Criolla",
    ingredientes: "Papa, yuca, mazorca, arroz",
    precio: 42000,
    model: "../modelos 3D/mojarra-a-la-criolla.glb"
  },
  {
    id: "pz9",
    cat: "pescados",
    name: "Bocachico o Capaz",
    ingredientes: "Preparación estilo sudado, papa, yuca, mazorca, arroz, consomé, aguacate",
    precio: 48000,
    model: "../modelos 3D/bocachico-o-capaz.glb"
  },
  {
    id: "pz10",
    cat: "pescados",
    name: "Salmón Cremoso Tozcana",
    ingredientes: "Cremosa salsa con especias, tomates deshidratados, espinaca, parmesano, papa francesa",
    precio: 65000,
    model: "../modelos 3D/salmon-cremoso-tozcana.glb"
  },
  {
    id: "pz11",
    cat: "pescados",
    name: "Salmón a la Plancha",
    ingredientes: "Papa francesa, vegetales salteados",
    precio: 59000,
    model: "../modelos 3D/salmon-a-la-plancha.glb"
  },
  {
    id: "pz12",
    cat: "pescados",
    name: "Salmón Flora Pasión",
    ingredientes: "Montado en puré de papa, bañado en salsa de maracuyá, uchuva, vegetales salteados",
    precio: 63000,
    model: "../modelos 3D/salmon-flora-pasion.glb"
  },
  {
    id: "pz13",
    cat: "pescados",
    name: "Salmón Acholupado",
    ingredientes: "Montado en puré de papa, bañado en salsa de cholupa, vegetales salteados",
    precio: 63000,
    model: "../modelos 3D/salmon-acholupado.glb"
  },
  {
    id: "pz14",
    cat: "pescados",
    name: "Salmón Balsámico",
    ingredientes: "Montado en puré de papa, bañado en reducción balsámica, vegetales salteados",
    precio: 63000,
    model: "../modelos 3D/salmon-balsamico.glb"
  },
  {
    id: "pz15",
    cat: "pescados",
    name: "Pirarucú a la Parrilla",
    ingredientes: "Patacón, ensalada — por temporada",
    precio: 49000,
    model: "../modelos 3D/pirarucu-a-la-parrilla.glb"
  },

  /* ---------- ESPECIALES GOURMET ---------- */
  {
    id: "go1",
    cat: "gourmet",
    name: "Salmón - Pasta Alfredo - Vegetales Salteados",
    ingredientes: "Filete de salmón, pasta con pollo y champiñones, en salsa blanca",
    precio: 48000,
    model: "../modelos 3D/salmon-pasta-alfredo-vegetales-salteados.glb"
  },
  {
    id: "go2",
    cat: "gourmet",
    name: "Medallón Filet Mignon - Pasta Carbonara",
    ingredientes: "Medallón de lomo fino, pasta al estilo italiano, con camarón y tocineta",
    precio: 46000,
    model: "../modelos 3D/medallon-filet-mignon-pasta-carbonara.glb"
  },

  /* ---------- CAZUELAS ---------- */
  {
    id: "cz1",
    cat: "cazuelas",
    name: "Bowls Crocantes de Camarones",
    ingredientes: "Camarones salpimentados apanados, dedos de queso, salsa tres quesos, salsa de cholupa",
    precio: 56000,
    model: "../modelos 3D/bowls-crocantes-de-camarones.glb"
  },
  {
    id: "cz2",
    cat: "cazuelas",
    name: "Bagre San Joaquín Gratinado",
    ingredientes: "Trozos de bagre en salsa, camarón, champiñón, papa francesa, arroz",
    precio: 59000,
    model: "../modelos 3D/bagre-san-joaquin-gratinado.glb"
  },
  {
    id: "cz3",
    cat: "cazuelas",
    name: "Cazuela de Mariscos Gratinada",
    ingredientes: "Patacón, arroz",
    precio: 65000,
    model: "../modelos 3D/cazuela-de-mariscos-gratinada.glb"
  },
  {
    id: "cz4",
    cat: "cazuelas",
    name: "Cazuela Pirarucú y Camarón Gratinada",
    ingredientes: "Patacón, arroz",
    precio: 62000,
    model: "../modelos 3D/cazuela-pirarucu-y-camaron-gratinada.glb"
  },
  {
    id: "cz5",
    cat: "cazuelas",
    name: "Cazuela Camarón Gratinada",
    ingredientes: "Patacón, arroz",
    precio: 62000,
    model: "../modelos 3D/cazuela-camaron-gratinada.glb"
  },

  /* ---------- ARROCES ---------- */
  {
    id: "ar1",
    cat: "arroces",
    name: "Guiso de la Abuela",
    ingredientes: "Guiso mezclado con longaniza, arveja, papa criolla, acompañado de panceta, huevo frito, tajadas de maduro",
    precio: 39000,
    model: "../modelos 3D/guiso-de-la-abuela.glb"
  },
  {
    id: "ar2",
    cat: "arroces",
    name: "Paella Mariscos",
    ingredientes: "Papa francesa",
    precio: 62000,
    model: "../modelos 3D/paella-mariscos.glb"
  },
  {
    id: "ar3",
    cat: "arroces",
    name: "Rissotto de Champiñones",
    ingredientes: "Arroz cremoso, champiñones salteados",
    precio: 39000,
    model: "../modelos 3D/rissotto-de-champinones.glb"
  },
  {
    id: "ar4",
    cat: "arroces",
    name: "Rissotto Miñón",
    ingredientes: "Arroz cremoso con champiñones, medallón de lomito relleno de queso bordeado con tocineta, bañado en salsa teriyaki, papa francesa",
    precio: 55000,
    model: "../modelos 3D/rissotto-minon.glb"
  },
  {
    id: "ar5",
    cat: "arroces",
    name: "Arroz Meloso",
    ingredientes: "Camarón, champiñones",
    precio: 49000,
    model: "../modelos 3D/arroz-meloso.glb"
  },
  {
    id: "ar6",
    cat: "arroces",
    name: "Arroz Tapao'",
    ingredientes: "Salsa de la casa, champiñones, tocineta, pollo desmechado, papa ripio",
    precio: 38000,
    model: "../modelos 3D/arroz-tapao.glb"
  },
  {
    id: "ar7",
    cat: "arroces",
    name: "Arroz del Campo",
    ingredientes: "Cerdo, pollo, mollejas, huevo, tortilla, trozos de maduro, maíz tierno, vegetales, chips de plátano",
    precio: 39000,
    model: "../modelos 3D/arroz-del-campo.glb"
  },
  {
    id: "ar8",
    cat: "arroces",
    name: "Caldoso de Mariscos",
    ingredientes: "Arroz con base en salsa atomatada, mix de marisco, papa francesa",
    precio: 58000,
    model: "../modelos 3D/caldoso-de-mariscos.glb"
  },

  /* ---------- PASTA ---------- */
  {
    id: "pa1",
    cat: "pasta",
    name: "Bolognesa al Forno",
    ingredientes: "Pasta larga o corta, pan focaccia",
    precio: 39000,
    model: "../modelos 3D/bolognesa-al-forno.glb"
  },
  {
    id: "pa2",
    cat: "pasta",
    name: "Carbonara con Camarón",
    ingredientes: "Pasta larga o corta, pan focaccia",
    precio: 48000,
    model: "../modelos 3D/carbonara-con-camaron.glb"
  },
  {
    id: "pa3",
    cat: "pasta",
    name: "Al Fredo",
    ingredientes: "Pasta larga o corta, pan focaccia",
    precio: 39000,
    model: "../modelos 3D/al-fredo.glb"
  },
  {
    id: "pa4",
    cat: "pasta",
    name: "Espaguetti Tres Quesos + Lomito Balsámico",
    ingredientes: "Base en salsa blanca, queso pecorino, queso azul y parmesano",
    precio: 48000,
    model: "../modelos 3D/espaguetti-tres-quesos-lomito-balsamico.glb"
  },

  /* ---------- CREPES GRATINADOS ---------- */
  {
    id: "cp1",
    cat: "crepes",
    name: "Pollo Champiñón",
    ingredientes: "Acompañado con pan focaccia",
    precio: 29000,
    model: "../modelos 3D/pollo-champinon.glb"
  },
  {
    id: "cp2",
    cat: "crepes",
    name: "Camarones al Ajillo",
    ingredientes: "Acompañado con pan focaccia",
    precio: 30000,
    model: "../modelos 3D/camarones-al-ajillo.glb"
  },

  /* ---------- LASAGNA ---------- */
  {
    id: "ls1",
    cat: "lasagna",
    name: "Lasagna Boloñesa",
    ingredientes: "Acompañada con pan focaccia",
    precio: 38000,
    model: "../modelos 3D/lasagna-bolonesa.glb"
  },
  {
    id: "ls2",
    cat: "lasagna",
    name: "Lasagna Boloñesa con Maduro",
    ingredientes: "Acompañada con pan focaccia",
    precio: 38000,
    model: "../modelos 3D/lasagna-bolonesa-con-maduro.glb"
  },

  /* ---------- PATAKOLOS ---------- */
  {
    id: "pk1",
    cat: "patakolo",
    name: "Patakolo Insignia de la Casa",
    ingredientes: "Base de patacón crocante, cubierta con salsa de la casa, carne y pollo desmechado, chicharrón, piña y maduro caramelizado, gratinado",
    precio: 39000,
    model: "../modelos 3D/patakolo-insignia-de-la-casa.glb"
  },
  {
    id: "pk2",
    cat: "patakolo",
    name: "Patakolo Brutal (con Camarón)",
    ingredientes: "Base de patacón crocante, salsa de la casa, carne y pollo desmechado, chicharrón, champiñón, camarón apanado, piña y maduro caramelizado, gratinado",
    precio: 48000,
    model: "../modelos 3D/patakolo-brutal-con-camaron.glb"
  },
  {
    id: "pk3",
    cat: "patakolo",
    name: "Patakronch",
    ingredientes: "Carne y pollo estilo ropa vieja, maíz tierno, láminas de aguacate, rodajas de chorizo santarrosano, queso asado, queso mozzarella fundido",
    precio: 36000,
    model: "../modelos 3D/patakronch.glb"
  },

  /* ---------- MENÚ INFANTIL ---------- */
  {
    id: "in1",
    cat: "infantil",
    name: "Brochetas de Nuggets y Salchicha Ranchera",
    ingredientes: "Papa carita feliz y francesa, salsa, miel, brownie con helado",
    precio: 27000,
    model: "../modelos 3D/brochetas-de-nuggets-y-salchicha-ranchera.glb"
  },
  {
    id: "in2",
    cat: "infantil",
    name: "Alitas de Pollo",
    ingredientes: "Salsa BBQ de la casa, papa francesa, brownie con helado",
    precio: 30000,
    model: "../modelos 3D/alitas-de-pollo.glb"
  },
  {
    id: "in3",
    cat: "infantil",
    name: "Salchipapa Moñona",
    ingredientes: "Papa francesa, salchicha ranchera, chorizo vara, cubo de quesillo asado, huevos de codorniz, salsa de la casa, brownie con helado",
    precio: 25000,
    model: "../modelos 3D/salchipapa-monona.glb"
  },
  {
    id: "in4",
    cat: "infantil",
    name: "Mazorcada",
    ingredientes: "Trozos de lomito de res y pechuga con maíz tierno y maduro en salsa de la casa, queso fundido, papa chips",
    precio: 33000,
    model: "../modelos 3D/mazorcada.glb"
  },

  /* ---------- BEBIDAS ---------- */
  {
    id: "bb1",
    cat: "bebidas",
    name: "Limonada Natural",
    ingredientes: "Limonada clásica",
    precio: 9000,
    model: "../modelos 3D/limonada-natural.glb"
  },
  {
    id: "bb2",
    cat: "bebidas",
    name: "Limonada de Hierbabuena",
    ingredientes: "Limonada con hierbabuena fresca",
    precio: 9000,
    model: "../modelos 3D/limonada-de-hierbabuena.glb"
  },
  {
    id: "bb3",
    cat: "bebidas",
    name: "Limonada Cerezada",
    ingredientes: "Limonada con toque de cereza",
    precio: 9000,
    model: "../modelos 3D/limonada-cerezada.glb"
  },
  {
    id: "bb4",
    cat: "bebidas",
    name: "Limonada de Coco",
    ingredientes: "Limonada cremosa de coco",
    precio: 10000,
    model: "../modelos 3D/limonada-de-coco.glb"
  },
  {
    id: "bb5",
    cat: "bebidas",
    name: "Jugo Natural",
    ingredientes: "Fruta de temporada",
    precio: 9000,
    model: "../modelos 3D/jugo-natural.glb"
  },
  {
    id: "bb6",
    cat: "bebidas",
    name: "Jarra en Agua",
    ingredientes: "Para compartir",
    precio: 16000,
    model: "../modelos 3D/jarra-en-agua.glb"
  },
  {
    id: "bb7",
    cat: "bebidas",
    name: "Jarra en Leche",
    ingredientes: "Para compartir",
    precio: 18000,
    model: "../modelos 3D/jarra-en-leche.glb"
  },
  {
    id: "bb8",
    cat: "bebidas",
    name: "Soda Refrescante Sandía",
    ingredientes: "Sirope sandía, perlas explosivas de manzana verde, trozos de sandía, manzana roja, limón, rodaja de naranja",
    precio: 15000,
    model: "../modelos 3D/soda-refrescante-sandia.glb"
  },
  {
    id: "bb9",
    cat: "bebidas",
    name: "Soda Refrescante Frutos Verdes",
    ingredientes: "Sirope manzana, perlas explosivas de maracuyá, trozos de pera, manzana, limón, rodaja de naranja",
    precio: 15000,
    model: "../modelos 3D/soda-refrescante-frutos-verdes.glb"
  },
  {
    id: "bb10",
    cat: "bebidas",
    name: "Soda Refrescante Frutos Amarillos",
    ingredientes: "Sirope maracuyá, perlas explosivas de mango viche, mix de maracuyá, cholupa, piña, limón, rodaja de naranja",
    precio: 15000,
    model: "../modelos 3D/soda-refrescante-frutos-amarillos.glb"
  },
  {
    id: "bb11",
    cat: "bebidas",
    name: "Soda Refrescante Frutos Rojos",
    ingredientes: "Sirope fresa, perlas explosivas de cereza, fresa, arándanos, manzana roja, limón, rodaja de naranja",
    precio: 15000,
    model: "../modelos 3D/soda-refrescante-frutos-rojos.glb"
  },
  {
    id: "bb12",
    cat: "bebidas",
    name: "Soda Lychees con Hierbabuena",
    ingredientes: "Sirope lychees, perlas explosivas de blueberry, hierbabuena, limón, rodaja de naranja, lychees",
    precio: 15000,
    model: "../modelos 3D/soda-lychees-con-hierbabuena.glb"
  },
  {
    id: "bb13",
    cat: "bebidas",
    name: "Michelada Mango Biche",
    ingredientes: "Vodka, mix de mango biche · valor de la cerveza adicional",
    precio: 10000,
    model: "../modelos 3D/michelada-mango-biche.glb"
  },
  {
    id: "bb14",
    cat: "bebidas",
    name: "Michelada Honey Chelada",
    ingredientes: "Vodka, miel de abeja, limón, pimienta · valor de la cerveza adicional",
    precio: 10000,
    model: "../modelos 3D/michelada-honey-chelada.glb"
  },
  {
    id: "bb15",
    cat: "bebidas",
    name: "Malteada",
    ingredientes: "Deliciosa malteada de helado",
    precio: 12000,
    model: "../modelos 3D/malteada.glb"
  },
  {
    id: "bb16",
    cat: "bebidas",
    name: "Cerveza Lata",
    ingredientes: "Consulta las referencias disponibles",
    precio: 5000,
    model: "../modelos 3D/cerveza-lata.glb"
  },

  /* ---------- POSTRES ---------- */
  {
    id: "pt1",
    cat: "postres",
    name: "Postre del Día",
    ingredientes: "Consulta la opción disponible con tu mesero",
    precio: 13000,
    model: "../modelos 3D/postre-del-dia.glb"
  },

];

/* =========================================================
   CATEGORÍAS  (orden, textos y color igual a la referencia)
   ========================================================= */
const CATEGORIES = [
  { key:"entradas", label:"Entradas",          tag:"Aperitivos para compartir y abrir el apetito",  accent:"maroon", icon:"cup" },
  { key:"criollo",   label:"Criollo Colombiano", tag:"Tradición colombiana en cada plato",            accent:"maroon", icon:"fork" },
  { key:"porciones", label:"Porciones",          tag:"Acompañamientos adicionales",                    accent:"green",  icon:"cup" },
  { key:"saludable", label:"Saludable",          tag:"Opciones ligeras y nutritivas",                  accent:"green",  icon:"heart" },
  { key:"pollo",     label:"Pollo",              tag:"Exquisitas preparaciones de pollo",              accent:"maroon", icon:"fork" },
  { key:"res",       label:"Res",                tag:"Cortes selectos de res a la parrilla",           accent:"maroon", icon:"flame" },
  { key:"cerdo",     label:"Cerdo",              tag:"Jugosos cortes de cerdo",                        accent:"maroon", icon:"forkx" },
  { key:"pescados",  label:"Pescados",           tag:"Lo mejor del mar y la rivera",                   accent:"green",  icon:"boat" },
  { key:"gourmet",   label:"Especiales Gourmet", tag:"Especialidades de autor",                        accent:"gold",   icon:"crown" },
  { key:"cazuelas",  label:"Cazuelas",           tag:"Cazuelas gratinadas llenas de sabor",            accent:"gold",   icon:"cup" },
  { key:"arroces",   label:"Arroces",            tag:"Arroces y risottos de la casa",                  accent:"gold",   icon:"forkx" },
  { key:"pasta",     label:"Pasta",              tag:"Pastas italianas con sabor local",               accent:"gold",   icon:"cup" },
  { key:"crepes",    label:"Crepes Gratinados",  tag:"Crepes gratinados al horno",                     accent:"green",  icon:"layers" },
  { key:"lasagna",   label:"Lasagna",            tag:"Lasagna italiana al horno",                      accent:"green",  icon:"cake" },
  { key:"patakolo",  label:"Patakolos",          tag:"La especialidad de la casa",                     accent:"maroon", icon:"star" },
  { key:"infantil",  label:"Menú Infantil",      tag:"Opciones especiales para los pequeños",          accent:"green",  icon:"smile" },
  { key:"bebidas",   label:"Bebidas",            tag:"Bebidas refrescantes y cocteles",                accent:"green",  icon:"glass" },
  { key:"postres",   label:"Postres",            tag:"Dulces tentaciones para cerrar",                 accent:"gold",   icon:"cake" },
];

const ADMIN_PASSWORD = "sanjoaquin86";

/* =========================================================
   ESTADO
   ========================================================= */
let state = {
  view: "welcome",       // welcome | menu | category | admin-login | admin | qr
  category: null,
  availability: {},      // { dishId:true } => true significa "código 86" (agotado)
  popular: {},           // { dishId:true } => plato marcado como popular
  chefRec: {},           // { dishId:true } => recomendación del chef
  loadingAvail: true,
  modalDish: null,
  adminError: "",
  isAdmin: false,
  adminTab: "86",        // "86" | "featured"
  dark: false,
  qrUrl: ""
};

const app = document.getElementById("app");

function fmt(price){
  return "$" + price.toLocaleString("es-CO");
}

function isDisabled(dishId){
  return !!state.availability[dishId];
}

function isPopular(dishId){
  return !!state.popular[dishId];
}

function isChef(dishId){
  return !!state.chefRec[dishId];
}

/* =========================================================
   PERSISTENCIA (window.storage) — compartida entre todos
   los usuarios que escanean el QR, para que el código 86
   del admin se refleje en todos los dispositivos.
   ========================================================= */
async function loadState(){
  try{
    const [availRes, popRes, chefRes] = await Promise.all([
      window.storage.get("san-joaquin-availability", true).catch(()=>null),
      window.storage.get("san-joaquin-popular", true).catch(()=>null),
      window.storage.get("san-joaquin-chef", true).catch(()=>null)
    ]);
    state.availability = availRes && availRes.value ? JSON.parse(availRes.value) : {};
    state.popular = popRes && popRes.value ? JSON.parse(popRes.value) : {};
    state.chefRec = chefRes && chefRes.value ? JSON.parse(chefRes.value) : {};
  }catch(e){
    state.availability = {};
    state.popular = {};
    state.chefRec = {};
  }
  state.loadingAvail = false;
  render();
}

async function toggleAvailability(dishId){
  state.availability[dishId] = !state.availability[dishId];
  render();
  try{
    await window.storage.set("san-joaquin-availability", JSON.stringify(state.availability), true);
  }catch(e){ console.error("No se pudo guardar el estado", e); }
}

async function togglePopular(dishId){
  state.popular[dishId] = !state.popular[dishId];
  render();
  try{
    await window.storage.set("san-joaquin-popular", JSON.stringify(state.popular), true);
  }catch(e){ console.error("No se pudo guardar el estado", e); }
}

async function toggleChef(dishId){
  state.chefRec[dishId] = !state.chefRec[dishId];
  render();
  try{
    await window.storage.set("san-joaquin-chef", JSON.stringify(state.chefRec), true);
  }catch(e){ console.error("No se pudo guardar el estado", e); }
}

async function clearAll86(){
  state.availability = {};
  render();
  try{
    await window.storage.set("san-joaquin-availability", JSON.stringify(state.availability), true);
  }catch(e){ console.error("No se pudo guardar el estado", e); }
}

/* =========================================================
   ICONOS (SVG en línea, sin librerías externas)
   ========================================================= */
const ICONS = {
  cup:   `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M6 3h12l-1.5 8.5a4.5 4.5 0 0 1-9 0z"/><path d="M12 15v6"/><path d="M8 21h8"/></svg>`,
  fork:  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M3 13a9 9 0 0 1 18 0"/><path d="M3 13h18"/><path d="M12 4v2"/></svg>`,
  forkx: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M6 5l12 14M18 5L6 19"/></svg>`,
  heart: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 20s-7-4.4-9.5-8.8C.7 7.6 2.4 4 6 4c2 0 3.4 1.1 4 2.3.6-1.2 2-2.3 4-2.3 3.6 0 5.3 3.6 3.5 7.2C19 15.6 12 20 12 20z"/></svg>`,
  flame: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 2c2 3-1 4-1 7a3 3 0 0 0 6 0c1.5 2 1.5 5 0 7a7 7 0 0 1-13 0c-1-3 0-5 2-7 1 2 2 1 2-1 0-2-1-4 0-6z"/></svg>`,
  boat:  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M3 15h18l-2 4H5z"/><path d="M6 15V6l6 3 6-3v9"/></svg>`,
  crown: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M3 8l4 4 5-7 5 7 4-4-2 10H5z"/></svg>`,
  layers:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 3l9 5-9 5-9-5z"/><path d="M3 13l9 5 9-5"/></svg>`,
  cake:  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M4 10h16l-1.5 9h-13z"/><path d="M12 10V4"/><path d="M9 6c0-1.5 3-1.5 3-3"/></svg>`,
  star:  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 3l2.6 5.7 6.2.6-4.7 4.2 1.4 6.1L12 16.7 6.5 19.6l1.4-6.1-4.7-4.2 6.2-.6z"/></svg>`,
  smile: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="12" r="9"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><path d="M9 9h.01M15 9h.01"/></svg>`,
  glass: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M6 3h12l-1.5 8.5a4.5 4.5 0 0 1-9 0z"/><path d="M12 15v6"/><path d="M8 21h8"/></svg>`
};

/* =========================================================
   NAVEGACIÓN
   ========================================================= */
function go(view, extra){
  state.view = view;
  if(extra) Object.assign(state, extra);
  window.scrollTo(0,0);
  render();
}

function toggleDark(){
  state.dark = !state.dark;
  document.body.classList.toggle("dark", state.dark);
  render();
}

/* =========================================================
   VISTAS
   ========================================================= */
function viewWelcome(){
  return `
  ${topbar('welcome')}
  <section class="welcome">
    <div class="welcome-frame">
      <div class="eyebrow">Hotel Campestre · Restaurante</div>
      <h1>Bienvenidos al<br>Restaurante<br>San Joaquín</h1>
      <p class="sub">Un oasis en el centro del Huila</p>
      <button class="btn" onclick="go('menu')">Ver la Carta →</button>
      <div class="desde">Escanea, elige, disfruta</div>
    </div>
  </section>`;
}

/* Logo oficial San Joaquín */
const LOGO_URL = "https://www.sanjoaquin.com.co/wp-content/uploads/2025/11/LOGO-SJ-HOME-05.png";

function topbar(active){
  return `
  <div class="topbar">
    <div class="brand-logo" onclick="go('welcome')" style="cursor:pointer" role="button" aria-label="San Joaquín — Inicio">
      <img src="${LOGO_URL}" alt="San Joaquín — Hotel Restaurante Campestre">
    </div>
    <nav>
      <button class="icon-btn ${active==='welcome'?'active':''}" onclick="go('welcome')">🏠 Inicio</button>
      <button class="icon-btn ${active==='menu'?'active':''}" onclick="go('menu')">☰ Carta</button>
      <button class="icon-btn ${active==='admin'?'active':''}" onclick="goAdmin()">⚙ Admin</button>
      <button class="icon-btn round" onclick="toggleDark()" aria-label="Modo oscuro">${state.dark ? '☀' : '☾'}</button>
    </nav>
  </div>`;
}

function goAdmin(){
  go(state.isAdmin ? 'admin' : 'admin-login');
}

function setAdminTab(tab){
  state.adminTab = tab;
  render();
}

function viewMenu(){
  return `
  ${topbar('menu')}
  <div class="hub">
    <div class="hub-head">
      <div class="eyebrow">Nuestra Carta</div>
      <h2>Elija su Experiencia</h2>
      <p>Cada plato cuenta una historia. Descubra nuestras especialidades preparadas con producto local de temporada.</p>
    </div>
    <div class="cat-grid">
      ${CATEGORIES.map(c => `
        <button class="cat-tile accent-${c.accent}" onclick="go('category',{category:'${c.key}'})">
          <div class="cat-icon">${ICONS[c.icon]}</div>
          <h3>${c.label}</h3>
          <span>${c.tag}</span>
          <div class="cat-count">${DISHES.filter(d=>d.cat===c.key).length} platos</div>
        </button>
      `).join("")}
    </div>
  </div>
  ${footer()}
  `;
}

function viewCategory(){
  const cat = CATEGORIES.find(c => c.key === state.category);
  const dishes = DISHES.filter(d => d.cat === state.category);
  return `
  ${topbar('menu')}
  <div class="cat-header">
    <div>
      <div class="eyebrow">${cat.tag}</div>
      <h2>${cat.label}</h2>
    </div>
    <button class="btn ghost small" onclick="go('menu')">← Categorías</button>
  </div>
  <div class="dish-list">
    ${dishes.map(d => dishCard(d)).join("")}
  </div>
  ${footer()}
  ${state.modalDish ? modal3D(state.modalDish) : ""}
  `;
}

function dishCard(d){
  const disabled = isDisabled(d.id);
  const popular = isPopular(d.id);
  const chef = isChef(d.id);
  return `
  <div class="dish-card ${disabled ? 'disabled' : ''}">
    <div class="dish-thumb" ${disabled ? '' : `onclick="openModel('${d.id}')"`}>
      ${disabled ? `<div class="dish-86"><span>CÓD. 86<br>AGOTADO</span></div>` : ""}
      ${(popular || chef) ? `<div class="dish-badges">
        ${popular ? `<span class="badge popular">★ Popular</span>` : ""}
        ${chef ? `<span class="badge chef">👨‍🍳 Chef</span>` : ""}
      </div>` : ""}
      <model-viewer src="${d.model}" auto-rotate auto-rotate-delay="0"
        rotation-per-second="18deg" camera-controls="false" disable-zoom disable-pan
        interaction-prompt="none" loading="eager" reveal="auto"
        style="background:transparent;width:100%;height:100%;"></model-viewer>
      ${disabled ? "" : `<div class="tap-hint">Toca · ver en 3D</div>`}
    </div>
    <div class="dish-body">
      <div class="row-top">
        <h3>${d.name}</h3>
        <div class="dish-price">${fmt(d.precio)}</div>
      </div>
      ${d.cantidad ? `<div class="dish-qty">${d.cantidad}</div>` : ""}
      ${d.ingredientes ? `<p class="dish-ing">${d.ingredientes}</p>` : ""}
    </div>
  </div>`;
}

function modal3D(dishId){
  const d = DISHES.find(x => x.id === dishId);
  if(!d) return "";
  return `
  <div class="modal-overlay" onclick="closeModelBackdrop(event)">
    <div class="modal-box" onclick="event.stopPropagation()">
      <div class="modal-viewer-wrap">
        <button class="modal-close" onclick="closeModel()">✕</button>
        <model-viewer src="${d.model}" camera-controls auto-rotate
          ar ar-modes="webxr scene-viewer quick-look"
          shadow-intensity="1" exposure="1" style="background:var(--cream-2);width:100%;height:100%;"></model-viewer>
      </div>
      <div class="modal-info">
        <div class="eyebrow">${CATEGORIES.find(c=>c.key===d.cat).label}</div>
        <h3>${d.name}</h3>
        ${(isPopular(d.id) || isChef(d.id)) ? `<div class="dish-badges static">
          ${isPopular(d.id) ? `<span class="badge popular">★ Popular</span>` : ""}
          ${isChef(d.id) ? `<span class="badge chef">👨‍🍳 Recomendación del Chef</span>` : ""}
        </div>` : ""}
        ${d.ingredientes ? `<p class="dish-ing">${d.ingredientes}</p>` : ""}
        <div class="dish-qty">${d.cantidad ? d.cantidad + " · " : ""}${fmt(d.precio)}</div>
        <div class="ar-hint">Modelo 3D de muestra — sustituir por tu escaneo de fotogrametría (.glb). Arrastra para girar, pellizca para acercar. Botón AR disponible en móviles compatibles.</div>
      </div>
    </div>
  </div>`;
}
function openModel(dishId){ state.modalDish = dishId; render(); }
function closeModel(){ state.modalDish=null; render(); }
function closeModelBackdrop(e){ if(e.target.classList.contains('modal-overlay')) closeModel(); }

function viewAdminLogin(){
  return `
  ${topbar('admin')}
  <div class="admin-login">
    <div class="shield">🛡</div>
    <div class="eyebrow">Acceso restringido</div>
    <h2>Modo Administrador</h2>
    <p>Acceso exclusivo para personal del restaurante</p>
    <input id="admin-pass" type="password" placeholder="Contraseña" onkeydown="if(event.key==='Enter')tryAdminLogin()">
    ${state.adminError ? `<p class="admin-error">${state.adminError}</p>` : ""}
    <button class="btn" style="width:100%;justify-content:center" onclick="tryAdminLogin()">Ingresar</button>
    <div class="admin-note">Prototipo: esta autenticación es solo de demostración. Para producción, usa un sistema de login real con backend.</div>
  </div>
  ${footer()}
  `;
}
function tryAdminLogin(){
  const val = document.getElementById("admin-pass").value;
  if(val === ADMIN_PASSWORD){
    state.adminError = "";
    state.isAdmin = true;
    go('admin');
  }else{
    state.adminError = "Contraseña incorrecta.";
    render();
  }
}
function adminLogout(){
  state.isAdmin = false;
  go('welcome');
}

function viewAdmin(){
  const total = DISHES.length;
  const agotados = Object.values(state.availability).filter(Boolean).length;
  const disponibles = total - agotados;
  const popularList = DISHES.filter(d => isPopular(d.id));
  const chefList = DISHES.filter(d => isChef(d.id));
  return `
  ${topbar('admin')}
  <div class="admin-wrap">
    <div class="admin-top">
      <div>
        <div class="eyebrow">Panel del admin</div>
        <h2>Panel de Administrador</h2>
        <p>Gestiona la disponibilidad de los platos y destaca tus recomendaciones</p>
      </div>
      <div class="admin-actions">
        <button class="btn small" onclick="adminLogout()">⏻ Salir</button>
      </div>
    </div>
    <div class="stat-row">
      <div class="stat-card"><div class="stat-num">${total}</div><div class="stat-label">Total platos</div></div>
      <div class="stat-card"><div class="stat-num ok">${disponibles}</div><div class="stat-label">Disponibles</div></div>
      <div class="stat-card warn"><div class="stat-num">${agotados}</div><div class="stat-label">Agotados (86)</div></div>
      <div class="stat-card pop"><div class="stat-num">${popularList.length}</div><div class="stat-label">Populares</div></div>
      <div class="stat-card chef"><div class="stat-num">${chefList.length}</div><div class="stat-label">Rec. Chef</div></div>
    </div>

    <div class="admin-tabs">
      <button class="admin-tab ${state.adminTab==='86'?'active':''}" onclick="setAdminTab('86')">📋 Disponibilidad (código 86)</button>
      <button class="admin-tab ${state.adminTab==='featured'?'active':''}" onclick="setAdminTab('featured')">★ Populares y Recomendación del Chef</button>
    </div>

    ${state.adminTab === 'featured' ? adminFeaturedSection(popularList, chefList) : adminAvailabilitySection()}

    <button class="btn ghost small" style="margin-top:16px" onclick="go('qr')">Generar código QR de mesa</button>
  </div>
  ${footer()}
  `;
}

function adminAvailabilitySection(){
  return `
    <p class="admin-tab-note">Marca un plato como agotado (código 86) y en la carta del comensal aparecerá cubierto con un aviso de "Agotado" en vez del modelo 3D.</p>
    <button class="link-btn" style="margin-bottom:10px;display:inline-block" onclick="clearAll86()">↺ Limpiar todo 86</button>
    ${CATEGORIES.map(c => `
      <div class="admin-section-title">${c.label} (${DISHES.filter(d=>d.cat===c.key).length} platos)</div>
      ${DISHES.filter(d=>d.cat===c.key).map(d => `
        <div class="admin-row ${isDisabled(d.id)?'is-86':''}">
          <div>
            <div class="name">${d.name}</div>
            <span class="cat">${fmt(d.precio)}</span>
          </div>
          <button class="toggle ${isDisabled(d.id)?'on':''}" onclick="toggleAvailability('${d.id}')">
            <span class="toggle-label">${isDisabled(d.id) ? '86' : 'OK'}</span>
          </button>
        </div>
      `).join("")}
    `).join("")}
  `;
}

function adminFeaturedSection(popularList, chefList){
  return `
    <p class="admin-tab-note">Marca aquí los platos que quieres resaltar en la carta: los "Populares" salen con insignia dorada y las "Recomendación del Chef" con insignia vinotinto.</p>

    <div class="featured-panel">
      <div class="featured-block">
        <h4>★ Platos Populares</h4>
        <p>Se destacan con una insignia dorada en la carta para tus comensales.</p>
        <div class="chip-list">
          ${popularList.length ? popularList.map(d => `<span class="chip">${d.name}<button onclick="togglePopular('${d.id}')" title="Quitar">✕</button></span>`).join("") : `<span class="chip-empty">Aún no has marcado ninguno — usa el ★ en la lista de abajo</span>`}
        </div>
      </div>
      <div class="featured-block">
        <h4>👨‍🍳 Recomendación del Chef</h4>
        <p>Se destacan con una insignia vinotinto en la carta para tus comensales.</p>
        <div class="chip-list">
          ${chefList.length ? chefList.map(d => `<span class="chip chef">${d.name}<button onclick="toggleChef('${d.id}')" title="Quitar">✕</button></span>`).join("") : `<span class="chip-empty">Aún no has marcado ninguno — usa el 👨‍🍳 en la lista de abajo</span>`}
        </div>
      </div>
    </div>

    ${CATEGORIES.map(c => `
      <div class="admin-section-title">${c.label} (${DISHES.filter(d=>d.cat===c.key).length} platos)</div>
      ${DISHES.filter(d=>d.cat===c.key).map(d => `
        <div class="admin-row">
          <div>
            <div class="name">${d.name}</div>
            <span class="cat">${fmt(d.precio)}</span>
          </div>
          <div class="controls">
            <button class="mini-toggle labeled ${isPopular(d.id)?'on-pop':''}" onclick="togglePopular('${d.id}')">★ <span>Popular</span></button>
            <button class="mini-toggle labeled ${isChef(d.id)?'on-chef':''}" onclick="toggleChef('${d.id}')">👨‍🍳 <span>Chef</span></button>
          </div>
        </div>
      `).join("")}
    `).join("")}
  `;
}

function viewQR(){
  return `
  ${topbar('admin')}
  <div class="qr-wrap">
    <div class="eyebrow">Carta digital</div>
    <h2>Genera tu QR</h2>
    <p>Pega la URL donde publiques esta página (por ejemplo, tras subirla a tu hosting) para generar el código QR que imprimirás en las mesas.</p>
    <input id="qr-url" type="text" placeholder="https://tu-dominio.com/carta" value="${state.qrUrl||''}" oninput="updateQR()">
    <div class="qr-box"><img id="qr-img" src="" alt="Código QR"></div>
    <button class="btn ghost small" onclick="go('admin')">← Volver al panel</button>
  </div>
  ${footer()}
  `;
}
function updateQR(){
  const input = document.getElementById("qr-url");
  const url = input ? input.value.trim() : "";
  state.qrUrl = url;
  const img = document.getElementById("qr-img");
  if(!img) return;
  const data = url || "https://tu-dominio.com/carta";
  img.src = "https://api.qrserver.com/v1/create-qr-code/?size=300x300&margin=8&data=" + encodeURIComponent(data);
}

function footer(){
  return `
  <div class="site-footer">
    <div class="brand-foot">SAN JOAQUÍN</div>
    <div class="sub-foot">Hotel Campestre · Restaurante</div>
    <div class="tag-foot">Escanee el QR de su mesa para acceder al menú</div>
  </div>`;
}

/* =========================================================
   RENDER
   ========================================================= */
function render(){
  let html = "";
  switch(state.view){
    case "welcome": html = viewWelcome(); break;
    case "menu": html = viewMenu(); break;
    case "category": html = viewCategory(); break;
    case "admin-login": html = viewAdminLogin(); break;
    case "admin": html = viewAdmin(); break;
    case "qr": html = viewQR(); break;
    default: html = viewWelcome();
  }
  app.innerHTML = html;
  if(state.view === "qr") setTimeout(updateQR, 0);
}

loadState();
render();