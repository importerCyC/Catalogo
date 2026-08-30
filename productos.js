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
];
