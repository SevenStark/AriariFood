let cart = JSON.parse(localStorage.getItem('ariariCart')) || [];
let currentCategory = 'todas';
let currentSearch = '';

function formatPrice(price) {
  return '$' + price.toLocaleString('es-CO');
}

function getStockLabel(product) {
  if (product.stock > 30) return '<span class="product-stock">✔ Disponible</span>';
  if (product.stock > 10) return '<span class="product-stock low">⚠ Pocas unidades</span>';
  return '<span class="product-stock low" style="color:#e63946;">✖ Agotándose</span>';
}

function renderCategories() {
  const container = document.getElementById('categoryPills');
  container.innerHTML = categories.map(cat => `
    <button class="pill ${currentCategory === cat.id ? 'active' : ''}" onclick="filterByCategory('${cat.id}')">
      <span class="icon">${cat.icon}</span> ${cat.name}
    </button>
  `).join('');
}

function filterByCategory(categoryId) {
  currentCategory = categoryId;
  renderCategories();
  renderProducts();
}

function searchProducts(query) {
  currentSearch = query.toLowerCase();
  renderProducts();
}

function renderProducts() {
  const container = document.getElementById('productsGrid');
  let filtered = [...products];

  if (currentCategory !== 'todas') {
    filtered = filtered.filter(p => p.category === currentCategory);
  }

  if (currentSearch) {
    filtered = filtered.filter(p =>
      p.name.toLowerCase().includes(currentSearch) ||
      p.description.toLowerCase().includes(currentSearch) ||
      p.category.toLowerCase().includes(currentSearch)
    );
  }

  const count = document.getElementById('productsCount');
  count.textContent = `${filtered.length} producto${filtered.length !== 1 ? 's' : ''}`;

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="grid-column:1/-1;text-align:center;padding:3rem 1rem;color:var(--gray);">
        <div style="font-size:3rem;margin-bottom:0.75rem;">🔍</div>
        <h3 style="color:var(--dark);margin-bottom:0.5rem;">Sin resultados</h3>
        <p>No encontramos productos que coincidan con tu búsqueda.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(product => `
    <div class="product-card" onclick="openModal(${product.id})">
      <img class="product-img" src="${product.image}" alt="${product.name}" loading="lazy">
      <div class="product-body">
        <div class="product-category">${categories.find(c => c.id === product.category)?.name || product.category}</div>
        <div class="product-name">${product.name}</div>
        <div class="product-desc">${product.description}</div>
        <div class="product-footer">
          <div class="product-price">
            ${formatPrice(product.price)}
            <span class="product-unit">/ ${product.unit}</span>
          </div>
          <button class="add-btn" onclick="event.stopPropagation(); addToCart(${product.id})">+</button>
        </div>
        ${getStockLabel(product)}
      </div>
    </div>
  `).join('');
}

function addToCart(productId, qty = 1) {
  const product = products.find(p => p.id === productId);
  if (!product) return;

  const existing = cart.find(item => item.id === productId);
  if (existing) {
    existing.qty = Math.min(existing.qty + qty, product.stock);
  } else {
    cart.push({ id: productId, qty: Math.min(qty, product.stock) });
  }

  saveCart();
  updateCartUI();
  showToast(`${product.name} agregado al carrito`, 'success');
}

function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  saveCart();
  updateCartUI();
}

function updateQuantity(productId, delta) {
  const item = cart.find(i => i.id === productId);
  if (!item) return;
  const product = products.find(p => p.id === productId);
  item.qty = Math.max(1, Math.min(item.qty + delta, product.stock));
  if (item.qty === 0) removeFromCart(productId);
  else { saveCart(); updateCartUI(); }
}

function saveCart() {
  localStorage.setItem('ariariCart', JSON.stringify(cart));
}

function getCartTotal() {
  return cart.reduce((sum, item) => {
    const p = products.find(pr => pr.id === item.id);
    return sum + (p ? p.price * item.qty : 0);
  }, 0);
}

function getCartCount() {
  return cart.reduce((sum, item) => sum + item.qty, 0);
}

function updateCartUI() {
  const count = getCartCount();
  document.querySelectorAll('.cart-badge').forEach(b => b.textContent = count);
  document.querySelectorAll('.cart-badge').forEach(b => b.style.display = count > 0 ? 'flex' : 'none');
  renderCartItems();
}

function renderCartItems() {
  const container = document.getElementById('cartItems');
  const totalEl = document.getElementById('cartTotal');

  if (cart.length === 0) {
    container.innerHTML = `
      <div class="cart-empty">
        <div class="empty-icon">🛒</div>
        <p>Tu carrito está vacío</p>
        <p style="font-size:0.85rem;margin-top:0.5rem;color:#aaa;">Agrega productos para empezar</p>
      </div>
    `;
    totalEl.textContent = formatPrice(0);
    return;
  }

  container.innerHTML = cart.map(item => {
    const product = products.find(p => p.id === item.id);
    if (!product) return '';
    return `
      <div class="cart-item">
        <img class="cart-item-img" src="${product.image}" alt="${product.name}">
        <div class="cart-item-info">
          <div class="cart-item-name">${product.name}</div>
          <div class="cart-item-price">${formatPrice(product.price)} / ${product.unit}</div>
          <div class="cart-item-qty">
            <button class="qty-btn" onclick="updateQuantity(${product.id}, -1)">−</button>
            <span class="qty-value">${item.qty}</span>
            <button class="qty-btn" onclick="updateQuantity(${product.id}, 1)">+</button>
          </div>
        </div>
        <button class="cart-item-remove" onclick="removeFromCart(${product.id})">✕</button>
      </div>
    `;
  }).join('');

  totalEl.textContent = formatPrice(getCartTotal());
}

let modalProductId = null;
let modalQty = 1;

function openModal(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;
  modalProductId = productId;
  modalQty = 1;

  document.getElementById('modalCategory').textContent = categories.find(c => c.id === product.category)?.name || product.category;
  document.getElementById('modalName').textContent = product.name;
  document.getElementById('modalPrice').innerHTML = formatPrice(product.price) + ' <span style="font-size:0.9rem;font-weight:400;color:var(--gray);">/ ' + product.unit + '</span>';
  document.getElementById('modalDesc').textContent = product.description;
  document.getElementById('modalImg').src = product.image;
  document.getElementById('modalImg').alt = product.name;
  document.getElementById('modalQtyValue').textContent = modalQty;
  document.getElementById('modalStock').textContent = product.stock > 0 ? `Stock disponible: ${product.stock} ${product.unit}` : 'Producto agotado';

  document.getElementById('modalOverlay').classList.add('open');
}

function closeModal() {
  document.getElementById('modalOverlay').classList.remove('open');
  modalProductId = null;
}

function modalQtyChange(delta) {
  const product = products.find(p => p.id === modalProductId);
  if (!product) return;
  modalQty = Math.max(1, Math.min(modalQty + delta, product.stock));
  document.getElementById('modalQtyValue').textContent = modalQty;
}

function modalAddToCart() {
  if (modalProductId) {
    addToCart(modalProductId, modalQty);
    closeModal();
  }
}

function openCart() {
  document.getElementById('cartOverlay').classList.add('open');
  document.getElementById('cartSidebar').classList.add('open');
}

function closeCart() {
  document.getElementById('cartOverlay').classList.remove('open');
  document.getElementById('cartSidebar').classList.remove('open');
}

function openCheckout() {
  if (cart.length === 0) {
    showToast('Tu carrito está vacío', 'error');
    return;
  }
  closeCart();
  const total = formatPrice(getCartTotal());
  document.getElementById('checkoutTotal').textContent = total;
  document.getElementById('checkoutModal').classList.add('open');
}

function closeCheckout() {
  document.getElementById('checkoutModal').classList.remove('open');
}

function submitOrder(e) {
  e.preventDefault();
  const form = e.target;
  const data = {
    nombre: form.nombre.value.trim(),
    email: form.email.value.trim(),
    telefono: form.telefono.value.trim(),
    direccion: form.direccion.value.trim(),
    notas: form.notas.value.trim(),
    items: [...cart],
    total: getCartTotal(),
    fecha: new Date().toISOString()
  };

  if (!data.nombre || !data.email || !data.telefono || !data.direccion) {
    showToast('Por favor completa todos los campos obligatorios', 'error');
    return;
  }

  console.log('Pedido:', JSON.stringify(data, null, 2));

  cart = [];
  saveCart();
  updateCartUI();
  closeCheckout();
  form.reset();
  showToast('Pedido confirmado! Te contactaremos pronto 📞', 'success');
}

let toastTimeout;

function showToast(message, type = 'success') {
  const toast = document.getElementById('toast');
  const icon = type === 'success' ? '✅' : '⚠️';
  toast.className = 'toast ' + type;
  toast.innerHTML = `<span>${icon}</span> ${message}`;
  clearTimeout(toastTimeout);
  requestAnimationFrame(() => {
    toast.classList.add('show');
    toastTimeout = setTimeout(() => toast.classList.remove('show'), 3000);
  });
}

function handleSearch(e) {
  searchProducts(e.target.value);
}

document.addEventListener('DOMContentLoaded', () => {
  renderCategories();
  renderProducts();
  updateCartUI();

  document.getElementById('searchInput').addEventListener('input', handleSearch);
  document.getElementById('searchInputMobile').addEventListener('input', handleSearch);

  document.getElementById('cartOverlay').addEventListener('click', closeCart);
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') { closeModal(); closeCart(); closeCheckout(); }
  });
});
