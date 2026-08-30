// ================================================================
//  ✏️  AQUÍ AÑADES O QUITAS PRODUCTOS
//
//  Para AÑADIR: copia un bloque { ... }, pégalo antes del ];
//               y cambia los datos. No olvides la coma al final.
//
//  Para QUITAR: borra el bloque completo del producto.
//
//  Campos:
//    id             → número único (no repitas)
//    nombre         → "Nombre del producto"
//    categoria      → "Cocina"  o  "Juguetes"  (exacto, con mayúscula)
//    precio         → número sin comillas  (ejemplo: 35.00)
//    imagen         → "img/nombre-del-archivo.webp"
//    descripcion    → "Texto corto"
//    disponible     → true  (visible)  /  false  (oculto)
//    oferta         → true  (aparece en la sección Ofertas)  /  false  (sin oferta)
//    precioAnterior → precio original antes de la oferta  (solo si oferta: true)
// ================================================================

const PRODUCTOS = [
  {
    id: 1,
    nombre: "Olla Express 5L",
    categoria: "Cocina",
    precio: 30.00,
    //precioAnterior: 35.00,
    imagen: "img/7901.jpg",
    descripcion: "Olla a presión de acero inoxidable 5 litros",
    disponible: true,
    oferta: false
  },
  {
    id: 2,
    nombre: "Sartén Antiadherente",
    categoria: "Cocina",
    precio: 22.00,
    imagen: "img/images.jpg",
    descripcion: "Sartén 28cm con recubrimiento antiadherente",
    disponible: true,
    oferta: false
  },
  {
    id: 3,
    nombre: "Auto de Control Remoto",
    categoria: "Juguetes",
    precio: 19.00,
    //precioAnterior: 28.00,
    imagen: "img/j00963.webp",
    descripcion: "Auto RC con batería recargable, 4 canales",
    disponible: true,
    oferta: false
  },
  {
    id: 4,
    nombre: "Muñeca Articulada",
    categoria: "Juguetes",
    precio: 18.00,
    imagen: "img/juguete-2.webp",
    descripcion: "Muñeca con accesorios y articulaciones móviles",
    disponible: true,
    oferta: false
  },
  {
    id: 5,
    nombre: "destronillador",
    categoria: "ferreteria",
    precio: 15,
    imagen: "img/jjjj.webp",
    descripcion: "destonillador con punta de estrella",
    disponible: true,
    oferta: false
  },
  {
    id: 6,
    nombre: "cepillo",
    categoria: "Baños y limpieza",
    precio: 2.50,
    //precioAnterior: 4.00,
    imagen: "img/cepillo.webp",
    descripcion: "cepillo para limpiar baños",
    disponible: true,
    oferta: false
  },//////////////////////////////////////////////////////////////////////////////////////////
  {
    id: 7,
    nombre: "Tripode modelo araña",
    categoria: "--",
    precio: 9,
    imagen: "img/jjjj.webp",
    descripcion: "soporte para celular",
    disponible: true,
    oferta: true
  },
  {
    id: 8,
    nombre: "Calentador de manos",
    categoria: "--",
    precio: 23,
    imagen: "img/jjjj.webp",
    descripcion: "calentor de manos con USB",
    disponible: true,
    oferta: true
  },
  {
    id: 9,
    nombre: "sed de cubiertos",
    categoria: "--",
    precio: 39,
    imagen: "img/jjjj.webp",
    descripcion: "sed de cubiertos",
    disponible: true,
    oferta: true
  },
  {
    id: 10,
    nombre: "Soporte de cell",
    categoria: "--",
    precio: 19,
    imagen: "img/jjjj.webp",
    descripcion: "soporte de celular para autos",
    disponible: true,
    oferta: true
  },
  {
    id: 11,
    nombre: "Soporte para tablet",
    categoria: "--",
    precio: 32,
    imagen: "img/jjjj.webp",
    descripcion: "soporte de celular y tablets flexible",
    disponible: true,
    oferta: true
  },
  {
    id: 12,
    nombre: "Rasuradora ",
    categoria: "--",
    precio: 89,
    imagen: "img/jjjj.webp",
    descripcion: "Rasuradora 3 en 1 ",
    disponible: true,
    oferta: true
  },
  {
    id: 13,
    nombre: "Faja",
    categoria: "--",
    precio: 32,
    imagen: "img/jjjj.webp",
    descripcion: "Faja reductora para mujer",
    disponible: true,
    oferta: true
  },
  {
    id: 14,
    nombre: "tubos de satin",
    categoria: "--",
    precio: 12,
    imagen: "img/jjjj.webp",
    descripcion: "son para hacer rulos de pelo",
    disponible: true,
    oferta: true
  },
  {
    id: 15,
    nombre: "Espejo led",
    categoria: "--",
    precio: 47,
    imagen: "img/jjjj.webp",
    descripcion: "Espejo led para autos",
    disponible: true,
    oferta: true
  },
  {
    id: 16,
    nombre: "Licuadora moledora y molinillo",
    categoria: "--",
    precio: 639,
    imagen: "img/jjjj.webp",
    descripcion: "Licuadora moledora y molinillo MORLEY",
    disponible: true,
    oferta: true
  },
  {
    id: 17,
    nombre: "Cascada de chocolate",
    categoria: "--",
    precio: 95,
    imagen: "img/jjjj.webp",
    descripcion: "Cascada de chocolate",
    disponible: true,
    oferta: true
  },
  {
    id: 18,
    nombre: "Horno microondas",
    categoria: "--",
    precio: 1150,
    imagen: "img/jjjj.webp",
    descripcion: "Es horno y mricoondas PREMIER 1año de garantia",
    disponible: true,
    oferta: true
  },
  {
    id: 19,
    nombre: "Sofacama",
    categoria: "--",
    precio: 195,
    imagen: "img/jjjj.webp",
    descripcion: "Sofacama para niños",
    disponible: true,
    oferta: true
  },
  {
    id: 20,
    nombre: "Rosera",
    categoria: "--",
    precio: 225,
    imagen: "img/jjjj.webp",
    descripcion: "Rosera de 700W producto Aleman",
    disponible: true,
    oferta: true
  },
  {
    id: 21,
    nombre: "Tazas removedoras",
    categoria: "--",
    precio: 53,
    imagen: "img/jjjj.webp",
    descripcion: "Taza removedora de tes",
    disponible: true,
    oferta: true
  },
  {
    id: 22,
    nombre: "Huevera calentadora",
    categoria: "--",
    precio: 110,
    imagen: "img/jjjj.webp",
    descripcion: "Huevera calentadora ",
    disponible: true,
    oferta: true
  },
  {
    id: 23,
    nombre: "Asiento plegable",
    categoria: "--",
    precio: 59,
    imagen: "img/jjjj.webp",
    descripcion: "Asiento plegable de un gancho",
    disponible: true,
    oferta: true
  },
  {
    id: 24,
    nombre: "Afeitadora con su rasuradora",
    categoria: "--",
    precio: 80,
    imagen: "img/jjjj.webp",
    descripcion: "Afeitadora con su rasuradora totalmente metalico",
    disponible: true,
    oferta: true
  },
  {
    id: 25,
    nombre: "Vasin para niños",
    categoria: "--",
    precio: 129,
    imagen: "img/jjjj.webp",
    descripcion: "Vasin para niños de diferentes modelos",
    disponible: true,
    oferta: true
  },
  {
    id: 26,
    nombre: "Kit de toallas",
    categoria: "--",
    precio: 59,
    imagen: "img/jjjj.webp",
    descripcion: "Kit de toallas viene 3 en 1",
    disponible: true,
    oferta: true
  },
  {
    id: 27,
    nombre: "Glitter metalico de 24 pcs",
    categoria: "--",
    precio: 40,
    imagen: "img/jjjj.webp",
    descripcion: "Glitter metalico de 24 pcs",
    disponible: true,
    oferta: true
  },
  {
    id: 28,
    nombre: "Exprimidor de naranja",
    categoria: "--",
    precio: 399,
    imagen: "img/jjjj.webp",
    descripcion: "Exprimidor de naranja de la marca MAJE FESA",
    disponible: true,
    oferta: true
  },
  {
    id: 29,
    nombre: "Sillon inflable",
    categoria: "--",
    precio: 140,
    imagen: "img/jjjj.webp",
    descripcion: "Sillon inflable de varios colores",
    disponible: true,
    oferta: true
  },
  {
    id: 30,
    nombre: "Ensaladera de vidrio",
    categoria: "--",
    precio: 75,
    imagen: "img/jjjj.webp",
    descripcion: "Ensaladera de vidrio",
    disponible: true,
    oferta: true
  },
  {
    id: 31,
    nombre: "Ojitos para auto Grande",
    categoria: "--",
    precio: 75,
    imagen: "img/jjjj.webp",
    descripcion: "Ojos para auto grande con su sonrisa",
    disponible: true,
    oferta: true
  },
  {
    id: 32,
    nombre: "Ojitos para auto medianos",
    categoria: "--",
    precio: 75,
    imagen: "img/jjjj.webp",
    descripcion: "Ojos para auto medianos con su sonrisa",
    disponible: true,
    oferta: true
  },
  {
    id: 33,
    nombre: "Ojitos para auto pequeños",
    categoria: "--",
    precio: 40,
    imagen: "img/jjjj.webp",
    descripcion: "Ojos para auto pequeños",
    disponible: true,
    oferta: true
  },
  {
    id: 34,
    nombre: "Parlante Tita",
    categoria: "--",
    precio: 70,
    imagen: "img/jjjj.webp",
    descripcion: "Parlante de la marca TITA",
    disponible: true,
    oferta: true
  },
  {
    id: 35,
    nombre: "Parlante Demgel",
    categoria: "--",
    precio: 75,
    imagen: "img/jjjj.webp",
    descripcion: "Parlante de la marca Demgel",
    disponible: true,
    oferta: true
  },
  {
    id: 36,
    nombre: "Piso plegable pequeño",
    categoria: "--",
    precio: 120,
    imagen: "img/jjjj.webp",
    descripcion: "Pisos plegables para bebes, pequeños",
    disponible: true,
    oferta: true
  },
  {
    id: 37,
    nombre: "Piso plegable grande",
    categoria: "--",
    precio: 145,
    imagen: "img/jjjj.webp",
    descripcion: "Pisos plegables para bebes, grandes",
    disponible: true,
    oferta: true
  },
  {
    id: 38,
    nombre: "Licuadora ICE CRUSHER",
    categoria: "--",
    precio: 155,
    imagen: "img/jjjj.webp",
    descripcion: "Licuadora de vidrio pica hielo",
    disponible: true,
    oferta: true
  },
  {
    id: 39,
    nombre: "Estufa GAMEY X30",
    categoria: "--",
    precio: 99,
    imagen: "img/jjjj.webp",
    descripcion: "Estufa gamey X30 de 800W",
    disponible: true,
    oferta: true
  },
  {
    id: 40,
    nombre: "Sillon inflable",
    categoria: "--",
    precio: 185,
    imagen: "img/jjjj.webp",
    descripcion: "Sillon inflable con su reposapies",
    disponible: true,
    oferta: true
  },
];
