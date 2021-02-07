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
    url: '/productos/aceite250',
  },
  {
    id: 5,
    name: 'Contacto',
    url: '/contacto',
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
    imgUrl:
      'https://firebasestorage.googleapis.com/v0/b/fincas-manolo-63f79.appspot.com/o/diaguita.jpg?alt=media&token=9c2267d5-3d39-46e4-b6c7-678494cbc20b',
    slug: 'los-diaguitas',
  },
];

// ---> Productos <---
export const productos = [
  {
    id: 1,
    slug: 'pecan',
    name: 'Nueces Pecán',
    shortName: 'Nueces Pecán',
    desc:
      'Las nueces pecán son deliciosos generadores de energía, llenos de nutrientes, que pueden resultar un bocadillo ideal o utilizarse como condimento o ingrediente en tus recetas favoritas.',
    peso: '500g',
    imgUrl:
      'https://firebasestorage.googleapis.com/v0/b/fincas-manolo-63f79.appspot.com/o/1%20Nuez%20pecan%20x500g.jpg?alt=media&token=506bcc7c-1897-4b58-8638-06e6f482604b',
    promoImgUrl: 'LINK A BUENA FOTO',
    precio: 'PRECIO',
    featured: true,
    category: 'Frutos Secos',
  },
  {
    id: 2,
    slug: 'almendras',
    name: 'Almendras Non Pareil',
    shortName: 'Almendras',
    desc: `La almendra es uno de los frutos secos con mayor aporte de vitamina E, una vitamina cuya ingesta a menudo está por debajo de lo que sería recomendable y que ejerce un valioso papel antioxidante. 50 g diarios de almendras crudas cubren las necesidades diarias de esta vitamina.
Otro punto destacable es su contenido en fibra. Es ideal para estimular los movimientos intestinales y para conferir sensación de saciedad. El contenido en hierro es otra de las virtudes de este delicioso fruto seco.`,
    peso: '500g',
    imgUrl:
      'https://firebasestorage.googleapis.com/v0/b/fincas-manolo-63f79.appspot.com/o/1Almendras%20non%20pareil%20x500.jpg?alt=media&token=d05471a3-2069-4068-9867-57332d1f78fc',
    promoImgUrl: 'LINK A BUENA FOTO',
    precio: 'PRECIO',
    featured: true,
    category: 'Frutos Secos',
  },
  {
    id: 3,
    slug: 'caju',
    name: 'Castañas de Cajú',
    shortName: 'Castañas de Cajú',
    desc: `Las castañas de cajú son una valiosa fuente de ácidos grasos insaturados, los cuales ayudan a equilibrar los niveles de colesterol y triglicéridos, beneficiando la salud cardiovascular.
Es antioxidante y favorece el restablecimiento de calcio en los huesos. También se le atribuyen propiedades afrodisíacas.
Por su riqueza en magnesio y vitaminas del grupo B, suele recomendarse en caso de: irritabilidad, nerviosismo, depresión y cansancio o debilidad física anormales.`,
    peso: '500g',
    imgUrl:
      'https://firebasestorage.googleapis.com/v0/b/fincas-manolo-63f79.appspot.com/o/1Casta%C3%B1as%20Caju%20x500gr.jpg?alt=media&token=39819c2f-044b-4ba6-9eb4-98537b231c78',
    promoImgUrl: 'LINK A BUENA FOTO',
    precio: 'PRECIO',
    featured: false,
    category: 'Frutos Secos',
  },
  {
    id: 4,
    slug: 'nueces',
    name: 'Nueces Chandler Extra Light Peladas',
    shortName: 'Nueces Chandler',
    desc: `Las nueces contienen ácidos grasos de serie de los ácidos grasos omega 3. Otorgan protección cardiovascular, importante para el cerebro y para aumentar la producción de colesterol bueno. Estos ácidos, además, tienen poder antiinflamatorio.`,
    peso: '500g',
    imgUrl:
      'https://firebasestorage.googleapis.com/v0/b/fincas-manolo-63f79.appspot.com/o/1Nueces%20Chandler%20extra%20lightpeladas%20x500.jpg?alt=media&token=11858b68-2cd5-4120-bb6b-66c083d09fa6',
    promoImgUrl: 'LINK A BUENA FOTO',
    precio: 'PRECIO',
    featured: false,
    category: 'Frutos Secos',
  },
  {
    id: 5,
    slug: 'pasas',
    name: 'Pasas de Uva',
    shortName: 'Pasas de Uva',
    desc: `Las pasas de uva tienen múltiples propiedades para la salud. Si comemos algunas cada día será bueno para nuestro sistema digestivo, ya que contienen fibra. Esto ayuda a aliviar el estreñimiento y permite regularizar la digestión. Tienen un alto contenido de magnesio y potasio, lo que ayuda a reducir la acidez y eliminar las toxinas del organismo, previniendo enfermedades como la artritis, la gota, las piedras en los riñones y las enfermedades del corazón.`,
    peso: '500g',
    imgUrl:
      'https://firebasestorage.googleapis.com/v0/b/fincas-manolo-63f79.appspot.com/o/1Pasas%20de%20uwu%20x500.jpg?alt=media&token=1e306046-3cc3-4a61-880a-0d28ac22e9c7',
    promoImgUrl: 'LINK A BUENA FOTO',
    precio: 'PRECIO',
    featured: true,
    category: 'Frutos Secos',
  },
  {
    id: 6,
    slug: 'aceite1l',
    name: 'Aceite de Oliva',
    shortName: 'Aceite de Oliva',
    desc:
      'Nuestro aceite de oliva Premium está compuesto de un blend de nuestras mejores variedades.',
    peso: '1 Litro',
    imgUrl:
      'https://firebasestorage.googleapis.com/v0/b/fincas-manolo-63f79.appspot.com/o/2aceite%201l.jpg?alt=media&token=85b31890-c418-450a-a185-1f3b9ef63d0e',
    promoImgUrl: 'LINK A BUENA FOTO',
    precio: 'PRECIO',
    featured: false,
    category: 'Aceites',
  },
  {
    id: 7,
    slug: 'aceite250',
    name: 'Aceite de Oliva',
    shortName: 'Aceite de Oliva',
    desc:
      'Nuestro aceite de oliva Premium está compuesto de un blend de nuestras mejores variedades.',
    peso: '250 ml.',
    imgUrl:
      'https://firebasestorage.googleapis.com/v0/b/fincas-manolo-63f79.appspot.com/o/2aceite%20250.jpg?alt=media&token=527dc964-2d3b-4639-857c-4d007215e15d',
    promoImgUrl: 'LINK A BUENA FOTO',
    precio: 'PRECIO',
    featured: true,
    category: 'Aceites',
  },
  {
    id: 8,
    slug: 'aceite2l',
    name: 'Aceite de Oliva',
    shortName: 'Aceite de Oliva',
    desc:
      'Nuestro aceite de oliva Premium está compuesto de un blend de nuestras mejores variedades.',
    peso: '2 Litros',
    imgUrl:
      'https://firebasestorage.googleapis.com/v0/b/fincas-manolo-63f79.appspot.com/o/2aceite%202l.jpg?alt=media&token=3027ef17-c4a4-44d2-a81a-b7c7b8b5abad',
    promoImgUrl: 'LINK A BUENA FOTO',
    precio: 'PRECIO',
    featured: false,
    category: 'Aceites',
  },
  {
    id: 9,
    slug: 'aceite500',
    name: 'Aceite de Oliva',
    shortName: 'Aceite de Oliva',
    desc:
      'Nuestro aceite de oliva Premium está compuesto de un blend de nuestras mejores variedades.',
    peso: '500 ml.',
    imgUrl:
      'https://firebasestorage.googleapis.com/v0/b/fincas-manolo-63f79.appspot.com/o/2aceite%20500.jpg?alt=media&token=a5fdb001-912a-4bea-9911-14ecfe8c4018',
    promoImgUrl: 'LINK A BUENA FOTO',
    precio: 'PRECIO',
    featured: false,
    category: 'Aceites',
  },
  {
    id: 10,
    slug: 'aceite5l',
    name: 'Aceite de Oliva',
    shortName: 'Aceite de Oliva',
    desc:
      'Nuestro aceite de oliva Premium está compuesto de un blend de nuestras mejores variedades.',
    peso: '5 Litros',
    imgUrl:
      'https://firebasestorage.googleapis.com/v0/b/fincas-manolo-63f79.appspot.com/o/2aceite%205l.jpg?alt=media&token=526b8996-e7f9-440d-adc7-4d2bf0cb85fa',
    promoImgUrl: 'LINK A BUENA FOTO',
    precio: 'PRECIO',
    featured: true,
    category: 'Aceites',
  },
  {
    id: 11,
    slug: 'aceitunasN',
    name: 'Aceitunas Negras en Aceite y Laurel',
    shortName: 'Aceitunas Negras',
    desc: `Las aceitunas son muy ricas en ácidos grasos Omega 3 y Omega 6, esenciales para mantener una buena salud cardiovascular. Aportan vitaminas, y las negras tienen mayor cantidad de hierro. Además, contienen otras sustancias antioxidantes que te ayudarán a reforzar el sistema inmunitario.
Las aceitunas una buena fuente de fibra, así que también ayudan al correcto funcionamiento del aparato digestivo.`,
    peso: '500g & 360g',
    imgUrl:
      'https://firebasestorage.googleapis.com/v0/b/fincas-manolo-63f79.appspot.com/o/3Aceitunas%20negras%20en%20aceite%20y%20laurel%20x360.jpg?alt=media&token=886b5eaf-95b7-4204-8098-cc106dede044',
    promoImgUrl: 'LINK A BUENA FOTO',
    precio: 'PRECIO',
    featured: true,
    category: 'Aceitunas',
  },
  {
    id: 12,
    slug: 'aceitunasV',
    name: 'Aceitunas Verdes en Salmuera y Laurel',
    shortName: 'Aceitunas Verdes',
    desc: `Las aceitunas son muy ricas en ácidos grasos Omega 3 y Omega 6, esenciales para mantener una buena salud cardiovascular. Aportan vitaminas, y las negras tienen mayor cantidad de hierro. Además, contienen otras sustancias antioxidantes que te ayudarán a reforzar el sistema inmunitario.
Las aceitunas una buena fuente de fibra, así que también ayudan al correcto funcionamiento del aparato digestivo.`,
    peso: '500g & 360g',
    imgUrl:
      'https://firebasestorage.googleapis.com/v0/b/fincas-manolo-63f79.appspot.com/o/3Aceitunas%20verdes%20en%20salmuera%20x500.jpg?alt=media&token=7f7ba6b2-f10d-4785-952b-954a98e42945',
    promoImgUrl: 'LINK A BUENA FOTO',
    precio: 'PRECIO',
    featured: true,
    category: 'Aceitunas',
  },
];

// ---> Products Category <---
export const categories = [
  {
    id: 1,
    imgUrl:
      'https://firebasestorage.googleapis.com/v0/b/fincas-manolo-63f79.appspot.com/o/FilterOils.png?alt=media&token=adedb7ec-2dd5-4aa6-9fa2-11dd0ab454f3',
    name: 'Aceites',
    slug: 'aceite250',
  },
  {
    id: 2,
    imgUrl:
      'https://firebasestorage.googleapis.com/v0/b/fincas-manolo-63f79.appspot.com/o/FilterAlmonds.png?alt=media&token=047b1e6f-8f76-45df-9289-e17d785addbc',
    name: 'Frutos Secos',
    slug: 'almendras',
  },
  {
    id: 3,
    imgUrl:
      'https://firebasestorage.googleapis.com/v0/b/fincas-manolo-63f79.appspot.com/o/FilterOlives.png?alt=media&token=7f9618c7-6739-4170-b11e-9b6ea070b247',

    name: 'Aceitunas',
    slug: 'aceitunasV',
  },
  {
    id: 4,
    imgUrl:
      'https://firebasestorage.googleapis.com/v0/b/fincas-manolo-63f79.appspot.com/o/FilterWines.png?alt=media&token=ba178e6f-fb0c-431b-9928-dea1ab59f926',
    name: 'Vinos',
    slug: 'vinos',
  },
];
// ---> Nosotros <---
export const nosotros = [
  [
    {
      id: 1,
      title: 'Valle Único ',
      text: `Nuestras primeras vides y olivos fueron plantados en 1994 en el Valle de Famatina a unos 1.200 km al Noroeste de Buenos Aires. La finca está rodeada por las sierras Velasco y Famatina que se desprenden de la impresionante cordillera de los Andes.   Este valle único ofrece vistas magníficas y un suelo de muy buen drenaje.`,
    },
  ],
  [
    {
      id: 1,
      title: 'Ubicación',
      text: `Valle de Famatina, La Rioja, Argentina. Latitud:  29°24'27.33"S Longitud:  67°29'45.10”W`,
    },
    {
      id: 2,
      title: 'SUELO & ALTITUD',
      text: `Franco arenosos de origen aluvional. Altitud: 1.000 m. | 2.380 pies sobre el nivel del mar.`,
    },
    {
      id: 3,
      title: 'CLIMA',
      text: `Caluroso y semi-desértico. La diferencia de temperatura entre el día y la noche puede alcanzar 20°C | 68°F. Lluvias anuales entre 100-200mm | 4-8 pulgadas`,
    },
  ],
  [
    {
      id: 1,
      cifra: '4.000',
      title: 'Hectáreas de campo',
    },
    {
      id: 2,
      cifra: '150',
      title: 'Hectáreas de viñedos',
    },
    {
      id: 3,
      cifra: '2.2 mill.',
      title: 'Litros de vino por año',
    },
    {
      id: 4,
      cifra: '770',
      title: 'Hectáreas de olivares',
    },
    {
      id: 5,
      cifra: '15 mill.',
      title: 'Kilogramos de aceitunas',
    },
    {
      id: 6,
      cifra: '1.400',
      title: 'Toneladas de aceite por año',
    },
  ],
];
// ---> EL Olivar <---
export const elOlivar = [
  {
    id: 1,
    title: 'El Olivar',
    desc: `Nuestros primeros olivos fueron plantados en 1994 y ahora cubren una superficie total plantada de 770 hectáreas / 1,903 acres con siete diferentes variedades: Arbequina, Nabali, Barnea, Picual, Coratina, Arauco y Manzanilla. 
El aire en la región es seco y puro, el suelo compuesto principalmente de arena no retiene agua evitando el exceso de humedad que causa enfermedades, por lo tanto no es necesario el uso de pesticidas.
La cosecha comienza a mediados de Marzo y finaliza en Junio con un rinde promedio de 19 ton. de olivos por hectárea, produciendo 1.400 toneladas de aceite de oliva por año aproximadamente.`,
  },
  {
    id: 2,
    title: 'ACEITE DE OLIVA PREMIUM VIRGEN EXTRA',
    desc: `Nuestro aceite de oliva Premium está compuesto de un blend de nuestras mejores variedades. La Arbequina aporta aromas intensos a frutas, la Picual agrega frescura y un suave picante mientras que la Barnea le da un toque de dulce al blend. Finalmente, agregamos un poco de Arauco que realza las sobresalientes características del resto de las variedades.`,
  },
];
// ---> GALERIA <---
// ---> GALERIA <---
// ---> GALERIA <---
