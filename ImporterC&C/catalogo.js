// ================================================================
//  catalogo.js — Solo lógica. Los productos están en productos.js
// ================================================================

// ─── Referencias al DOM ──────────────────────────────────
const catBtn = document.getElementById('cat-btn');
const catMenu = document.getElementById('cat-menu');
const catItems = document.querySelectorAll('.cat-item');
const grid = document.getElementById('product-grid');
const emptyMsg = document.getElementById('empty-msg');
const catLabel = document.getElementById('cat-label');
const ofertasBtn = document.getElementById('ofertas-btn');
const ofertasBanner = document.getElementById('ofertas-banner');

let categoriaActiva = 'Todos';
let modoOfertas = false;

// ─── Dropdown: abrir / cerrar ────────────────────────────
catBtn.addEventListener('click', () => {
    const abierto = catMenu.classList.contains('open');
    catMenu.classList.toggle('open');
    catBtn.classList.toggle('open');
    catBtn.setAttribute('aria-expanded', !abierto);
});

// Cerrar al hacer clic fuera
document.addEventListener('click', (e) => {
    if (!e.target.closest('#cat-dropdown')) {
        catMenu.classList.remove('open');
        catBtn.classList.remove('open');
        catBtn.setAttribute('aria-expanded', 'false');
    }
});

// ─── Selección de categoría ──────────────────────────────
catItems.forEach(item => {
    item.addEventListener('click', () => {
        catItems.forEach(i => i.classList.remove('active'));
        item.classList.add('active');
        categoriaActiva = item.dataset.cat;

        // Salir del modo ofertas al elegir una categoría
        if (modoOfertas) desactivarOfertas();

        catMenu.classList.remove('open');
        catBtn.classList.remove('open');
        catBtn.setAttribute('aria-expanded', 'false');
        renderProductos();
    });
});

// ─── Botón Ofertas ────────────────────────────────────────
ofertasBtn.addEventListener('click', () => {
    if (modoOfertas) {
        // Toggle: si ya estaba activo, volvemos a "Todos"
        desactivarOfertas();
        renderProductos();
    } else {
        activarOfertas();
        renderProductos();
    }
});

function activarOfertas() {
    modoOfertas = true;
    ofertasBtn.classList.add('active');
    ofertasBtn.setAttribute('aria-pressed', 'true');
    ofertasBanner.style.display = 'flex';
    // Quitar selección activa del menú de categorías
    catItems.forEach(i => i.classList.remove('active'));
}

function desactivarOfertas() {
    modoOfertas = false;
    ofertasBtn.classList.remove('active');
    ofertasBtn.setAttribute('aria-pressed', 'false');
    ofertasBanner.style.display = 'none';
    // Restaurar "Todos" como activo
    categoriaActiva = 'Todos';
    document.querySelector('.cat-item[data-cat="Todos"]').classList.add('active');
}

// ─── Calcular % descuento ─────────────────────────────────
function calcDescuento(precio, precioAnterior) {
    return Math.round(((precioAnterior - precio) / precioAnterior) * 100);
}

// ─── Render de tarjetas ───────────────────────────────────
function renderProductos() {
    const visibles = PRODUCTOS.filter(p => p.disponible);
    let filtrados;

    if (modoOfertas) {
        filtrados = visibles.filter(p => p.oferta === true);
        catLabel.innerHTML = `Mostrando: <strong>🔥 Ofertas</strong> — ${filtrados.length} producto${filtrados.length !== 1 ? 's' : ''} en oferta`;
    } else {
        filtrados = categoriaActiva === 'Todos'
            ? visibles
            : visibles.filter(p => p.categoria === categoriaActiva);
        const nombreCat = categoriaActiva === 'Todos' ? 'Todos los productos' : categoriaActiva;
        catLabel.innerHTML = `Mostrando: <strong>${nombreCat}</strong> — ${filtrados.length} producto${filtrados.length !== 1 ? 's' : ''}`;
    }

    grid.innerHTML = '';

    if (filtrados.length === 0) {
        emptyMsg.style.display = 'block';
        return;
    }
    emptyMsg.style.display = 'none';

    filtrados.forEach((producto, index) => {
        const card = document.createElement('article');
        card.className = 'product-card';
        if (producto.oferta) card.classList.add('product-card--oferta');
        card.style.animationDelay = `${index * 60}ms`;

        // Badge de descuento (solo si tiene precioAnterior)**************************************
        const descuentoBadge = (producto.oferta && producto.precioAnterior)
            ? `<span class="oferta-badge">-${calcDescuento(producto.precio, producto.precioAnterior)}%</span>`
            : '';

        // Precio anterior tachado
        const precioAnteriorHTML = (producto.oferta && producto.precioAnterior)
            ? `<span class="product-price-old">${producto.precioAnterior.toFixed(2)} Bs.</span>`
            : '';

        card.innerHTML = `
            <div class="product-img-wrapper">
                ${descuentoBadge}
                <img
                    src="${producto.imagen}"
                    alt="${producto.nombre}"
                    class="product-img"
                    loading="lazy"
                >
            </div>
            <div class="product-info">
                <span class="product-cat-badge">${producto.categoria}</span>
                <h2 class="product-name">${producto.nombre}</h2>
                <p class="product-desc">${producto.descripcion}</p>
                <div class="product-price-row">
                    ${precioAnteriorHTML}
                    <p class="product-price ${producto.oferta ? 'product-price--oferta' : ''}">${producto.precio.toFixed(2)} Bs.</p>
                </div>
            </div>
        `;

        grid.appendChild(card);
    });
}

// ─── Arrancar ─────────────────────────────────────────────
renderProductos();
