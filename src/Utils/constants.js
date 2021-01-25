// :::::: CONSTANTS :::::::
// Data to be Consumed inside the App -->
// Links for Routing, Products, Etc...

// ---> Links <---
export const links = [
  {
    id: 1,
    name: 'Inicio',
    url: '/',
  },
  {
    id: 2,
    name: 'Nosotros',
    url: '/nosotros',
  },
  {
    id: 3,
    name: 'Aceite de Oliva',
    url: '/el-olivar',
  },
  {
    id: 4,
    name: 'Productos',
    url: '/productos',
  },
  {
    id: 5,
    name: 'Contacto',
    url: '/contacto',
  },
  {
    id: 6,
    name: 'Galería',
    url: '/gallery',
  },
];

// ---> Servicios <---
export const services = [
  {
    id: 1,
    name: 'Delivery',
    desc: 'Envíos gratuitos Zona Norte',
    imgUrl:
      'https://firebasestorage.googleapis.com/v0/b/fincas-manolo.appspot.com/o/Delivery.png?alt=media&token=11c7f645-8739-4ade-b304-d6589f30f849',
  },
  {
    id: 2,
    name: 'Grandes Pedidos',
    desc: 'Ventas al por mayor bajo consulta',
    imgUrl:
      'https://firebasestorage.googleapis.com/v0/b/fincas-manolo.appspot.com/o/BigCommandes.png?alt=media&token=3106a19e-6ec9-47cb-a553-e8bbe361f9b0',
  },
  {
    id: 3,
    name: 'Presupuestos',
    desc: 'Realiza tu pedido y encontraremos el mejor precio para tí',
    imgUrl:
      'https://firebasestorage.googleapis.com/v0/b/fincas-manolo.appspot.com/o/Presupuestos.png?alt=media&token=06ca565b-951e-4428-a2e2-5bb0a7414f06',
  },
  {
    id: 4,
    name: 'Respuesta Inmediata',
    desc: 'Envíanos tu consulta y responderemos dentro las 24hs',
    imgUrl:
      'https://firebasestorage.googleapis.com/v0/b/fincas-manolo.appspot.com/o/RespuestaInmediata.png?alt=media&token=4bea18b0-8834-4cc6-9c2a-16e5033494c6',
  },
];

// ---> Articulos<---
export const articles = [
  {
    id: 1,
    title: 'Los Diaguitas',
    subtitle: 'Nuestra Herencia',
    contentTitle: 'Hace cientos de años',
    content: `Nuestros viñedos se encuentran en tierras que habitaron los Diaguitas, pueblos originarios de La Rioja, Argentina, hace cientos de años. Fueron los Incas quienes les dieron ese nombre, que significa “gente de las colinas”.
              La falta de lluvia, un problema constante y cotidiano para los Diaguitas, es ahora uno de los factores clave para producir los vinos de alta calidad que hoy se originan en este valle desierto y estéril. 
              Para honrar la cultura Diaguita y su herencia hemos adoptado algunos de sus símbolos para representar nuestros vinos. Los Diaguitas creían que el Cóndor era la criatura más cercana a la divinidad y lo consideraban un mensajero de los espíritus.
              El Puma que usamos en nuestro logo y las etiquetas de La Puerta representa el ser terrenal supremo por su sabiduría, fuerza e inteligencia.`,
    desc:
      'Nuestros viñedos se encuentran en tierras que habitaron los Diaguitas, pueblos originarios de La Rioja, Argentina, hace cientos de años.',
  },
];

// ---> Productos <---
export const products = [
  {
    id: 1,
    slug: 'nuez-pecan',
    name: 'Nueces Pecán',
    desc:
      'Las nueces pecán son deliciosos generadores de energía, llenos de nutrientes, que pueden resultar un bocadillo ideal o utilizarse como condimento o ingrediente en tus recetas favoritas.',
    peso: '500g',
    imgUrl:
      'https://firebasestorage.googleapis.com/v0/b/fincas-manolo-63f79.appspot.com/o/1%20Nuez%20pecan%20x500g.jpg?alt=media&token=506bcc7c-1897-4b58-8638-06e6f482604b',
    promoImgUrl: 'LINK A BUENA FOTO',
    precio: 'PRECIO',
    featured: false,
  },
  {
    id: 2,
    slug: 'almendras',
    name: 'Almendras Non Pareil',
    desc: `La almendra es uno de los frutos secos con mayor aporte de vitamina E, una vitamina cuya ingesta a menudo está por debajo de lo que sería recomendable y que ejerce un valioso papel antioxidante. 50 g diarios de almendras crudas cubren las necesidades diarias de esta vitamina.
Otro punto destacable es su contenido en fibra. Es ideal para estimular los movimientos intestinales y para conferir sensación de saciedad. El contenido en hierro es otra de las virtudes de este delicioso fruto seco.`,
    peso: '500g',
    imgUrl:
      'https://firebasestorage.googleapis.com/v0/b/fincas-manolo-63f79.appspot.com/o/1Almendras%20non%20pareil%20x500.jpg?alt=media&token=d05471a3-2069-4068-9867-57332d1f78fc',
    promoImgUrl: 'LINK A BUENA FOTO',
    precio: 'PRECIO',
    featured: false,
  },
  {
    id: 3,
    slug: 'caju',
    name: 'Castañas de Cajú',
    desc: `Las castañas de cajú son una valiosa fuente de ácidos grasos insaturados, los cuales ayudan a equilibrar los niveles de colesterol y triglicéridos, beneficiando la salud cardiovascular.
Es antioxidante y favorece el restablecimiento de calcio en los huesos. También se le atribuyen propiedades afrodisíacas.
Por su riqueza en magnesio y vitaminas del grupo B, suele recomendarse en caso de: irritabilidad, nerviosismo, depresión y cansancio o debilidad física anormales.`,
    peso: '500g',
    imgUrl:
      'https://firebasestorage.googleapis.com/v0/b/fincas-manolo-63f79.appspot.com/o/1Casta%C3%B1as%20Caju%20x500gr.jpg?alt=media&token=39819c2f-044b-4ba6-9eb4-98537b231c78',
    promoImgUrl: 'LINK A BUENA FOTO',
    precio: 'PRECIO',
    featured: false,
  },
  {
    id: 4,
    slug: 'nuez-chandler',
    name: 'Nueces Chandler Extra Light Peladas',
    desc: `Las nueces contienen ácidos grasos de serie de los ácidos grasos omega 3. Otorgan protección cardiovascular, importante para el cerebro y para aumentar la producción de colesterol bueno. Estos ácidos, además, tienen poder antiinflamatorio.`,
    peso: '500g',
    imgUrl:
      'https://firebasestorage.googleapis.com/v0/b/fincas-manolo-63f79.appspot.com/o/1Nueces%20Chandler%20extra%20lightpeladas%20x500.jpg?alt=media&token=11858b68-2cd5-4120-bb6b-66c083d09fa6',
    promoImgUrl: 'LINK A BUENA FOTO',
    precio: 'PRECIO',
    featured: false,
  },
  {
    id: 5,
    slug: 'pasas',
    name: 'Pasas de Uva',
    desc: `Las pasas de uva tienen múltiples propiedades para la salud. Si comemos algunas cada día será bueno para nuestro sistema digestivo, ya que contienen fibra. Esto ayuda a aliviar el estreñimiento y permite regularizar la digestión. Tienen un alto contenido de magnesio y potasio, lo que ayuda a reducir la acidez y eliminar las toxinas del organismo, previniendo enfermedades como la artritis, la gota, las piedras en los riñones y las enfermedades del corazón.`,
    peso: '500g',
    imgUrl:
      'https://firebasestorage.googleapis.com/v0/b/fincas-manolo-63f79.appspot.com/o/1Pasas%20de%20uwu%20x500.jpg?alt=media&token=1e306046-3cc3-4a61-880a-0d28ac22e9c7',
    promoImgUrl: 'LINK A BUENA FOTO',
    precio: 'PRECIO',
    featured: false,
  },
  {
    id: 6,
    slug: '/el-olivar',
    name: 'Aceite de Oliva',
    desc:
      'Nuestro aceite de oliva Premium está compuesto de un blend de nuestras mejores variedades.',
    peso: '1 Litro',
    imgUrl:
      'https://firebasestorage.googleapis.com/v0/b/fincas-manolo-63f79.appspot.com/o/2aceite%201l.jpg?alt=media&token=85b31890-c418-450a-a185-1f3b9ef63d0e',
    promoImgUrl: 'LINK A BUENA FOTO',
    precio: 'PRECIO',
    featured: false,
  },
  {
    id: 7,
    slug: '/el-olivar',
    name: 'Aceite de Oliva',
    desc:
      'Nuestro aceite de oliva Premium está compuesto de un blend de nuestras mejores variedades.',
    peso: '250 ml.',
    imgUrl:
      'https://firebasestorage.googleapis.com/v0/b/fincas-manolo-63f79.appspot.com/o/2aceite%20250.jpg?alt=media&token=527dc964-2d3b-4639-857c-4d007215e15d',
    promoImgUrl: 'LINK A BUENA FOTO',
    precio: 'PRECIO',
    featured: false,
  },
  {
    id: 8,
    slug: '/el-olivar',
    name: 'Aceite de Oliva',
    desc:
      'Nuestro aceite de oliva Premium está compuesto de un blend de nuestras mejores variedades.',
    peso: '2 Litros',
    imgUrl:
      'https://firebasestorage.googleapis.com/v0/b/fincas-manolo-63f79.appspot.com/o/2aceite%202l.jpg?alt=media&token=3027ef17-c4a4-44d2-a81a-b7c7b8b5abad',
    promoImgUrl: 'LINK A BUENA FOTO',
    precio: 'PRECIO',
    featured: false,
  },
  {
    id: 9,
    slug: '/el-olivar',
    name: 'Aceite de Oliva',
    desc:
      'Nuestro aceite de oliva Premium está compuesto de un blend de nuestras mejores variedades.',
    peso: '500 ml.',
    imgUrl:
      'https://firebasestorage.googleapis.com/v0/b/fincas-manolo-63f79.appspot.com/o/2aceite%20500.jpg?alt=media&token=a5fdb001-912a-4bea-9911-14ecfe8c4018',
    promoImgUrl: 'LINK A BUENA FOTO',
    precio: 'PRECIO',
    featured: false,
  },
  {
    id: 10,
    slug: '/el-olivar',
    name: 'Aceite de Oliva',
    desc:
      'Nuestro aceite de oliva Premium está compuesto de un blend de nuestras mejores variedades.',
    peso: '5 Litros',
    imgUrl:
      'https://firebasestorage.googleapis.com/v0/b/fincas-manolo-63f79.appspot.com/o/2aceite%205l.jpg?alt=media&token=526b8996-e7f9-440d-adc7-4d2bf0cb85fa',
    promoImgUrl: 'LINK A BUENA FOTO',
    precio: 'PRECIO',
    featured: false,
  },
  {
    id: 11,
    slug: 'aceitunas-negras',
    name: 'Aceitunas Negras en Aceite y Laurel',
    desc: `Las aceitunas son muy ricas en ácidos grasos Omega 3 y Omega 6, esenciales para mantener una buena salud cardiovascular. Aportan vitaminas, y las negras tienen mayor cantidad de hierro. Además, contienen otras sustancias antioxidantes que te ayudarán a reforzar el sistema inmunitario.
Las aceitunas una buena fuente de fibra, así que también ayudan al correcto funcionamiento del aparato digestivo.`,
    peso: ['500 Grs.', '360 Grs.'],
    imgUrl:
      'https://firebasestorage.googleapis.com/v0/b/fincas-manolo-63f79.appspot.com/o/3Aceitunas%20negras%20en%20aceite%20y%20laurel%20x360.jpg?alt=media&token=886b5eaf-95b7-4204-8098-cc106dede044',
    promoImgUrl: 'LINK A BUENA FOTO',
    precio: 'PRECIO',
    featured: false,
  },
  {
    id: 12,
    slug: 'aceitunas-verdes',
    name: 'Aceitunas Verdes en Salmuera y Laurel',
    desc: `Las aceitunas son muy ricas en ácidos grasos Omega 3 y Omega 6, esenciales para mantener una buena salud cardiovascular. Aportan vitaminas, y las negras tienen mayor cantidad de hierro. Además, contienen otras sustancias antioxidantes que te ayudarán a reforzar el sistema inmunitario.
Las aceitunas una buena fuente de fibra, así que también ayudan al correcto funcionamiento del aparato digestivo.`,
    peso: ['500 Grs.', '360 Grs.'],
    imgUrl:
      'https://firebasestorage.googleapis.com/v0/b/fincas-manolo-63f79.appspot.com/o/3Aceitunas%20verdes%20en%20salmuera%20x500.jpg?alt=media&token=7f7ba6b2-f10d-4785-952b-954a98e42945',
    promoImgUrl: 'LINK A BUENA FOTO',
    precio: 'PRECIO',
    featured: false,
  },
];

// ---> PRODUCTO INDIVIDUAL <---
// ---> CONTACTO <---
// ---> GALERIA <---
