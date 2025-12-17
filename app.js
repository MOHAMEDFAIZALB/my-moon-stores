// Default catalog derived from provided asset names and matching existing files in img/
const defaultProducts = [
  { id: "mixture-spicy", name: "Spicy Mixture", grams: 250, price: 0, discount: 10, tag: "spicy", category: "mixture", image: "./img/mixture-spicy.jpg", description: "A fiery blend of crunchy sev, peanuts, and spices." },
  { id: "mixture-sweet", name: "Sweet Mixture", grams: 250, price: 0, discount: 10, tag: "sweet", category: "mixture", image: "./img/mixture-sweet.jpg", description: "Savory mix with a hint of sweetness and dry fruits." },
  { id: "kara-sev", name: "Kara Sev", grams: 250, price: 0, discount: 10, tag: "spicy", category: "sev", image: "./img/kara-sev.jpg", description: "Thick, spicy gram flour noodles with pepper." },
  { id: "kovilpatti-sev", name: "Kovilpatti Sev", grams: 250, price: 0, discount: 10, tag: "savory", category: "sev", image: "./img/kovilpatti-sev.jpg", description: "Traditional crunchy sev from Kovilpatti." },
  { id: "sattur-sev", name: "Sattur Sev", grams: 250, price: 0, discount: 10, tag: "savory", category: "sev", image: "./img/sattur-sev.jpg", description: "Fine, crispy sev famous in Sattur region." },
  { id: "nylon-sev", name: "Nylon Sev", grams: 250, price: 0, discount: 10, tag: "savory", category: "sev", image: "./img/nylon-sev.jpg", description: "Extremely fine sev, great for chaat toppings." },
  { id: "onion-pakoda", name: "Onion Pakoda", grams: 250, price: 0, discount: 10, tag: "savory", category: "pakoda", image: "./img/onion-pakoda.jpg", description: "Crispy fried onion fritters." },
  { id: "pundnu-pakoda", name: "Pundu Pakoda", grams: 250, price: 0, discount: 10, tag: "savory", category: "pakoda", image: "./img/pundnu-pakoda.jpg", description: "Garlic flavored crunchy fritters." },
  { id: "mul-murukku", name: "Mul Murukku", grams: 250, price: 0, discount: 10, tag: "savory", category: "murukku", image: "./img/mul-murukku.jpg", description: "Thorny, crunchy rice flour coils." },
  { id: "karasev-murukku", name: "Karasev Murukku", grams: 250, price: 0, discount: 10, tag: "spicy", category: "murukku", image: "./img/karasev-murukku.jpg", description: "Spicy variant of the classic murukku." },
  { id: "nei-murukku", name: "Nei Murukku", grams: 250, price: 0, discount: 10, tag: "savory", category: "murukku", image: "./img/nei-murukku.jpg", description: "Melt-in-mouth murukku made with ghee." },
  { id: "kadalai-mittai", name: "Kadalai Mittai", grams: 250, price: 0, discount: 10, tag: "sweet", category: "candy", image: "./img/kadalai-mittai.jpg", description: "Classic peanut brittle with jaggery." },
  { id: "coco-mittai", name: "Coco Mittai", grams: 250, price: 0, discount: 10, tag: "sweet", category: "candy", image: "./img/coco-mittai.jpg", description: "Coconut candy bars." },
  { id: "kovilpatti-kadalai-mittai", name: "Kovilpatti Kadalai Mittai", grams: 250, price: 0, discount: 10, tag: "sweet", category: "candy", image: "./img/kovilpatti-kadalai-mittai.jpg", description: "Authentic Chikki from its origin place." },
  { id: "pallapatti-kadalai-mittai", name: "Pallapatti Kadalai Mittai", grams: 250, price: 0, discount: 10, tag: "sweet", category: "candy", image: "./img/pallapatti-kadalai-mittai.jpg", description: "Famous regional peanut candy." },
  { id: "pappadi", name: "Pappadi", grams: 250, price: 0, discount: 10, tag: "savory", category: "chips", image: "./img/pappadi.jpg", description: "Crispy flat rice crackers." },
  { id: "thattu-vadun", name: "Thattu Vadai", grams: 250, price: 0, discount: 10, tag: "savory", category: "chips", image: "./img/thattu-vadun.jpg", description: "Spiced, flat, crunchy discs." },
  { id: "seedai", name: "Seedai", grams: 250, price: 0, discount: 10, tag: "savory", category: "murukku", image: "./img/seedai.jpg", description: "Tiny, crunchy balls of fried dough." },
  { id: "maavu-urundai", name: "Maavu Urundai", grams: 250, price: 0, discount: 10, tag: "sweet", category: "laddu", image: "./img/maavu-urundai.jpg", description: "Soft moong dal flour balls." },
  { id: "porulvalan-gai", name: "Porulvilangai Urundai", grams: 250, price: 0, discount: 10, tag: "sweet", category: "laddu", image: "./img/porulvalan-gai.jpg", description: "Multigrain sweet balls, hard and healthy." },
  { id: "athirasam", name: "Athirasam", grams: 250, price: 0, discount: 10, tag: "sweet", category: "pastry", image: "./img/athirasam.jpg", description: "Traditional fermented rice and jaggery donut." },
  { id: "kudiraivali-laddu", name: "Kudiraivali Laddu", grams: 250, price: 0, discount: 10, tag: "sweet", category: "laddu", image: "./img/kudiraivali-laddu.jpg", description: "Millet laddu (Barnyard millet)." },
  { id: "thinai-laddu", name: "Thinai Laddu", grams: 250, price: 0, discount: 10, tag: "sweet", category: "laddu", image: "./img/thinai-laddu.jpg", description: "Foxtail millet sweet balls." },
  { id: "kambu-laddu", name: "Kambu Laddu", grams: 250, price: 0, discount: 10, tag: "sweet", category: "laddu", image: "./img/kambu-laddu.jpg", description: "Pearl millet energy balls." },
  { id: "ragi-laddu", name: "Ragi Laddu", grams: 250, price: 0, discount: 10, tag: "sweet", category: "laddu", image: "./img/ragi-laddu.jpg", description: "Finger millet laddu, rich in calcium." },
  { id: "karuppu-ulundhu-laddu", name: "Karuppu Ulundhu Laddu", grams: 250, price: 0, discount: 10, tag: "sweet", category: "laddu", image: "./img/karuppu-ulundhu-laddu.jpg", description: "Black gram laddu, traditional protein snack." },
  { id: "groundnut-laddu", name: "Groundnut Laddu", grams: 250, price: 0, discount: 10, tag: "sweet", category: "laddu", image: "./img/groundnut-laddu.jpg", description: "Roasted peanut sweet balls." },
  { id: "ellu-urundai", name: "Ellu Urundai", grams: 250, price: 0, discount: 10, tag: "sweet", category: "laddu", image: "./img/ellu-urundai.jpg", description: "Sesame and jaggery balls." },
  { id: "soan-papdi", name: "Soan Papdi", grams: 250, price: 0, discount: 10, tag: "sweet", category: "sweet", image: "./img/soan-papdi.jpg", description: "Flaky, melt-in-the-mouth sweet." },
  // cookie family (no images provided, reuse logo or others?)
  { id: "salt-cookies", name: "Salt Cookies", grams: 250, price: 0, discount: 10, tag: "sweet", category: "cookie", image: "./img/salt-cookies.jpg", description: "Sweet-salty balance that pairs with chai." },
  { id: "white-cookies", name: "White Cookies", grams: 250, price: 0, discount: 10, tag: "sweet", category: "cookie", image: "./img/white-cookies.jpg", description: "Light, vanilla-forward cookies." },

  // rusk family (no rusk.jpg, reuse tea-rusk)
  { id: "rusk", name: "Rusk", grams: 250, price: 0, discount: 10, tag: "sweet", category: "rusk", image: "./img/tea-rusk.jpg", description: "Classic twice-baked rusk." },
  { id: "tea-rusk", name: "Tea Rusk", grams: 250, price: 0, discount: 10, tag: "sweet", category: "rusk", image: "./img/tea-rusk.jpg", description: "Twice-baked for the perfect crunch." },
  { id: "baby-rusk", name: "Baby Rusk", grams: 250, price: 0, discount: 10, tag: "sweet", category: "rusk", image: "./img/baby-rusk.jpg", description: "Lightly sweet, perfect for dipping." },
  { id: "bombay-rusk", name: "Bombay Rusk", grams: 250, price: 0, discount: 10, tag: "sweet", category: "rusk", image: "./img/bombay-rusk.jpg", description: "Bombay-style crisp rusk." },
];


const productKey = "mymoon-products";
const cartKey = "mymoon-cart";
// Set your WhatsApp number in international format without +
// Using user-provided number (India): 6382553066 => "916382553066"
const whatsappNumber = "+919486977884";

const currency = (value) => `₹${value.toLocaleString("en-IN")} `;

// Firebase Firestore functions
let productsCache = null;
let productsListeners = [];

function loadProducts() {
  // Try localStorage FIRST (instant load)
  try {
    const stored = localStorage.getItem(productKey);
    if (stored) {
      const data = JSON.parse(stored);
      if (Array.isArray(data) && data.length > 0) {
        console.log("Loaded products from localStorage");
        return data;
      }
    }
  } catch (e) {
    console.warn("localStorage error", e);
  }

  // Use Firebase cache if available
  if (productsCache && Array.isArray(productsCache) && productsCache.length > 0) {
    console.log("Loaded products from cache");
    return productsCache;
  }

  // Fall back to defaults
  console.log("Using default products");
  return defaultProducts;
}

async function loadProductsFromFirebase() {
  if (typeof window.firebaseDB === 'undefined' || !window.firebaseDB) {
    console.warn("Firebase not initialized, using localStorage");
    return loadProducts();
  }

  // OPTIMIZATION: Return cache immediately if valid
  if (productsCache && productsCache.length > 0) {
    return productsCache;
  }

  try {
    const snapshot = await window.firebaseDB.collection('products').get();

    // Start with Cloud Data
    const productMap = new Map();

    if (!snapshot.empty) {
      snapshot.forEach(doc => {
        productMap.set(doc.id, { id: doc.id, ...doc.data() });
      });
    }

    // Merge Local Data (Priority: LOCAL > CLOUD)
    // Should overwrite cloud data because we might have pending edits that failed to sync
    const local = loadProducts();
    if (Array.isArray(local)) {
      local.forEach(p => {
        productMap.set(p.id, p);
      });
    }

    const products = Array.from(productMap.values());

    // If still empty after merge, use defaults
    if (products.length === 0) {
      await initializeFirebaseWithDefaults();
      return defaultProducts;
    }

    productsCache = products;
    // CRITICAL FIX: Persist to LocalStorage so next page load is instant
    localStorage.setItem(productKey, JSON.stringify(products));
    console.log("Cached products to LocalStorage");

    return products;
  } catch (error) {
    console.error("Error loading products from Firebase:", error);

    // Fallback: Try LocalStorage first (preserves local edits)
    try {
      const stored = localStorage.getItem(productKey);
      if (stored) {
        const local = JSON.parse(stored);
        if (Array.isArray(local) && local.length > 0) {
          console.log("⚠️ Firebase error, using LocalStorage backup.");
          return local;
        }
      }
    } catch (e) { console.warn("Local backup failed", e); }

    return defaultProducts;
  }
}

async function saveProducts(list) {
  if (typeof window.firebaseDB !== 'undefined' && window.firebaseDB) {
    try {
      const batch = window.firebaseDB.batch();

      // Delete all existing products
      const snapshot = await window.firebaseDB.collection('products').get();
      snapshot.forEach(doc => {
        batch.delete(doc.ref);
      });

      // Add all new products
      list.forEach(product => {
        const { id, ...productData } = product;
        const docRef = window.firebaseDB.collection('products').doc(id);
        batch.set(docRef, productData);
      });

      await batch.commit();
      productsCache = list;
      console.log("Products saved to Firebase:", list.length);
      return true;
    } catch (error) {
      console.error("Error saving products to Firebase:", error);
      // Fallback to localStorage and update cache so UI stays in sync
      localStorage.setItem(productKey, JSON.stringify(list));
      productsCache = list;
      return false;
    }
  }

  // Fallback to localStorage
  localStorage.setItem(productKey, JSON.stringify(list));
  return true;
}

async function initializeFirebaseWithDefaults() {
  if (typeof window.firebaseDB === 'undefined' || !window.firebaseDB) {
    return;
  }

  try {
    const batch = window.firebaseDB.batch();
    defaultProducts.forEach(product => {
      const { id, ...productData } = product;
      const docRef = window.firebaseDB.collection('products').doc(id);
      batch.set(docRef, productData);
    });
    await batch.commit();
    console.log("Initialized Firebase with default products");
  } catch (error) {
    console.error("Error initializing Firebase:", error);
  }
}

function setupFirebaseListener(callback) {
  if (typeof window.firebaseDB === 'undefined' || !window.firebaseDB) {
    return null;
  }

  const unsubscribe = window.firebaseDB.collection('products')
    .onSnapshot((snapshot) => {
      const productMap = new Map();

      // 1. Load Cloud Data first (Base truth)
      snapshot.forEach(doc => {
        productMap.set(doc.id, { id: doc.id, ...doc.data() });
      });

      // 2. Overlay LocalStorage Data (Priority: Local > Cloud for this session)
      // Because Cloud writes are failing (Permissions), Local is the most up-to-date.
      try {
        const stored = localStorage.getItem(productKey);
        if (stored) {
          const local = JSON.parse(stored);
          if (Array.isArray(local)) {
            console.log(`🔥 Listener: Merging.Cloud: ${productMap.size}, Local: ${local.length} `);
            local.forEach(p => {
              // Always overwrite/add local version. 
              // If it exists in cloud, local is likely newer (since cloud write failed).
              productMap.set(p.id, p);
            });
          }
        }
      } catch (e) { console.warn("Merge error", e); }

      const products = Array.from(productMap.values());
      productsCache = products;
      if (callback) callback(products);
    }, (error) => {
      console.error("Firebase listener error:", error);
    });

  productsListeners.push(unsubscribe);
  return unsubscribe;
}

function loadCart() {
  try {
    const data = JSON.parse(localStorage.getItem(cartKey) || "[]");
    return Array.isArray(data) ? data : [];
  } catch {
    return [];
  }
}

function saveCart(items) {
  localStorage.setItem(cartKey, JSON.stringify(items));
}

function addToCart(productId, btnElement) {
  const existing = loadCart();
  const item = existing.find((i) => i.id === productId);
  if (item) {
    item.qty += 1;
  } else {
    existing.push({ id: productId, qty: 1 });
  }
  saveCart(existing);
  updateCartBadge(); // Update badge
  toast("Added to cart");

  if (btnElement) {
    const originalText = btnElement.textContent;
    btnElement.textContent = "Added!";
    btnElement.classList.add("btn-bump");
    btnElement.style.background = "#4ade80"; // Success Green
    btnElement.style.color = "#064e3b";

    setTimeout(() => {
      btnElement.textContent = originalText;
      btnElement.classList.remove("btn-bump");
      btnElement.style.background = ""; // Revert to CSS
      btnElement.style.color = "";
    }, 1000);
  }
}

function removeFromCart(productId) {
  const next = loadCart().filter((i) => i.id !== productId);
  saveCart(next);
  updateCartBadge(); // Update badge
  renderCart();
}

function updateQty(productId, delta) {
  const items = loadCart();
  const item = items.find((i) => i.id === productId);
  if (!item) return;
  item.qty = Math.max(1, item.qty + delta);
  saveCart(items);
  updateCartBadge(); // Update badge
  renderCart();
}

let renderProductsTimeout;
let lastFilter = "all";
let renderedProductIds = new Set();

async function renderProducts(filter = "all", forceLocal = false) {
  const grid = document.getElementById("product-grid");
  if (!grid) return;

  // Debounce rapid filter changes
  clearTimeout(renderProductsTimeout);

  const performRender = async (items) => {
    const filtered = filter === "all" ? items : items.filter((p) => p.category === filter);

    // Only re-render if products actually changed
    const newIds = new Set(filtered.map(p => p.id));
    if (lastFilter === filter && renderedProductIds.size === newIds.size) {
      // Deep check for price changes to fix "0" bug
      const signature = filtered.map(p => `${p.id}:${p.price}`).join('|');
      if (grid.dataset.sig === signature) return;
      grid.dataset.sig = signature;
    }

    lastFilter = filter;
    renderedProductIds = newIds;

    grid.innerHTML = "";
    const fragment = document.createDocumentFragment();

    filtered.forEach((product) => {
      const hasDiscount = product.discount && product.discount > 0;
      const finalPrice = hasDiscount ? Math.round(product.price - (product.price * product.discount / 100)) : product.price;

      const isPriceLoading = product.price === 0;

      const card = document.createElement("article");
      card.className = "card product";
      card.innerHTML = `
        <div style="position:relative;">
          <img src="${product.image}" alt="${product.name}" loading="lazy" decoding="async" onerror="this.src='./img/logo.png'" />
          <div class="pill">${(product.category || product.tag || "Snack").toUpperCase()}</div>
        </div>
        <h3 style="margin-bottom: 4px;">${product.name}</h3>
        <p class="muted" style="margin:0 0 8px; font-size:0.9rem; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${product.description || ""}</p>
        
        <div style="display:flex; flex-direction:column; margin-top:auto;">
           <div class="price-row">
             ${!isPriceLoading && hasDiscount ? `<span class="price-discount">↓${product.discount}%</span>` : ''}
             ${!isPriceLoading && hasDiscount ? `<span class="price-original">${currency(product.price)}</span>` : ''}
             <span class="price-final">${isPriceLoading ? '<span class="spin">↻</span>' : currency(finalPrice)}</span>
           </div>
           
           ${hasDiscount && !isPriceLoading ? `<div style="background:#e8f2fe; color:#1a73e8; border:1px solid #d2e3fc; padding:6px; border-radius:6px; margin-top:8px; font-size:0.85rem; font-weight:600; display:flex; align-items:center; gap:6px;">
              <span style="background:#1a73e8; color:white; padding:2px 6px; border-radius:4px; font-size:0.75rem;">DEAL</span>
              Best Price
           </div>` : ''}

           <button class="button primary" data-product="${product.id}" ${isPriceLoading ? 'disabled' : ''} style="margin-top:12px; width:100%;">
             ${isPriceLoading ? 'Loading...' : 'Add to Cart'}
           </button>
        </div>
`;
      fragment.appendChild(card);
    });

    grid.appendChild(fragment);

    // Event delegation
    grid.querySelectorAll("[data-product]").forEach((btn) => {
      if (!btn.disabled) {
        btn.addEventListener("click", (e) => addToCart(e.currentTarget.dataset.product, e.currentTarget));
      }
    });

    if (filtered.length === 0) {
      grid.innerHTML = `<div style="grid-column: 1/-1; text-align:center; padding: 40px; opacity: 0.6;">No products found in this category.</div>`;
    }
  };

  // STRATEGY: Optimistic Render
  // 1. Render immediate local data
  const localItems = loadProducts();
  // If we have local items, render them immediately (even if prices are 0, UI handles it)
  if (localItems && localItems.length > 0) {
    performRender(localItems);
  }

  // 2. Background Sync (unless forced local)
  const delay = (forceLocal || (localItems && localItems.length > 0)) ? 0 : 100;

  if (!forceLocal && typeof window.firebaseDB !== 'undefined' && window.firebaseDB) {
    // Delay slightly if we entered 'loading' state to avoid flicker, 
    // but if we already rendered local, this just updates in place.
    setTimeout(() => {
      loadProductsFromFirebase().then(freshItems => {
        console.log("Shop synced with cloud");
        performRender(freshItems);
      }).catch(e => console.warn("Shop sync failed", e));
    }, delay);
  } else if (items.length === 0 && delay > 0) {
    // If no local data and no firebase, render empty/defaults eventually
    performRender(defaultProducts);
  }
}

async function renderCart() {
  const container = document.getElementById("cart-items");
  const subtotalEl = document.getElementById("subtotal");
  const totalEl = document.getElementById("total");
  if (!container || !subtotalEl || !totalEl) return;

  const cart = loadCart();
  if (cart.length === 0) {
    container.innerHTML = `<p class="muted">Your cart is empty. Add some snacks!</p>`;
    subtotalEl.textContent = currency(0);
    totalEl.textContent = currency(0);
    return;
  }

  // Helper: Renders the cart UI given a specific catalog
  const renderItems = (currentCatalog) => {
    let subtotal = 0;
    container.innerHTML = "";

    console.log("Rendering cart with catalog size:", currentCatalog.length);

    cart.forEach((item) => {
      const product = currentCatalog.find((p) => p.id === item.id);
      if (!product) {
        // Handle "Unknown Item" case gracefully
        console.warn(`Product ${item.id} not found in catalog.`);
        return;
      }

      const hasDiscount = product.discount && product.discount > 0;
      const finalPrice = hasDiscount ? Math.round(product.price - (product.price * product.discount / 100)) : product.price;
      const lineTotal = finalPrice * item.qty;
      subtotal += lineTotal;

      const isPriceLoading = product.price === 0;

      const row = document.createElement("div");
      row.className = "cart-item";
      row.innerHTML = `
        <img src="${product.image}" alt="${product.name}" onerror="this.src='./img/logo.png'">
        
        <div class="cart-details">
          <div>
            <div class="cart-title">${product.name}</div>
            <div class="muted">${product.grams}g pack</div>
          </div>
          
          <div class="price-row" style="margin: 4px 0;">
             ${!isPriceLoading && hasDiscount ? `<span class="price-discount">↓${product.discount}%</span>` : ''}
             <span class="price-final">${isPriceLoading ? '<span class="spin">↻</span>' : currency(lineTotal)}</span>
          </div>
        </div>

        <div style="display: flex; flex-direction: column; align-items: flex-end; justify-content: space-between;">
          <div class="qty-controls" style="border: 1px solid #eee; border-radius: 6px; display: flex;">
            <button data-action="dec" data-id="${product.id}" style="padding: 4px 10px; border:none; background:none;">-</button>
            <span style="font-weight:600; padding: 4px 8px;">${item.qty}</span>
            <button data-action="inc" data-id="${product.id}" style="padding: 4px 10px; border:none; background:none;">+</button>
          </div>
          <button class="button text-only warning" data-action="remove" data-id="${product.id}" style="color:var(--primary); font-size:0.8rem; border:none; background:none; padding:0; text-decoration:underline;">Remove</button>
        </div>
      `;
      container.appendChild(row);
    });

    subtotalEl.textContent = currency(subtotal);
    totalEl.textContent = currency(subtotal);

    // Re-attach listeners
    container.querySelectorAll("button[data-action]").forEach((btn) => {
      const id = btn.dataset.id;
      const action = btn.dataset.action;
      btn.addEventListener("click", () => {
        // These functions call renderCart() again, so the cycle continues
        if (action === "inc") updateQty(id, 1);
        if (action === "dec") updateQty(id, -1);
        if (action === "remove") removeFromCart(id);
      });
    });
  };

  // STRATEGY: Optimistic Render
  // 1. Try to render immediately with whatever data we have (Local/Cache)
  const localCatalog = loadProducts();

  // Check if local catalog has everything we need
  const missingItems = cart.some(item => !localCatalog.find(p => p.id === item.id));

  if (!missingItems && localCatalog.length > 0) {
    // Best Case: We have all data locally. Render INSTANTLY.
    renderItems(localCatalog);

    // Optional: Fetch fresh data in background to prevent price staleness
    if (typeof window.firebaseDB !== 'undefined' && window.firebaseDB) {
      // Using .then() ensures we don't block the UI
      loadProductsFromFirebase().then(freshCatalog => {
        // You could compare hashes/timestamps here to avoid unnecessary re-renders
        // For now, we trust the browser repaint speed is fast enough
        renderItems(freshCatalog);
      }).catch(e => console.warn("Background cart sync failed", e));
    }
  } else {
    // Worst Case: We are missing data for items in the cart.
    // We MUST wait for network, otherwise we show empty/broken items.
    // User sees the Skeleton Loader (html default) until this finishes.
    if (typeof window.firebaseDB !== 'undefined' && window.firebaseDB) {
      try {
        const freshCatalog = await loadProductsFromFirebase();
        renderItems(freshCatalog);
      } catch (e) {
        console.error("Critical cart load failure", e);
        // Fallback: Show what we can
        renderItems(localCatalog);
      }
    } else {
      renderItems(localCatalog);
    }
  }
}

function toast(message) {
  const el = document.createElement("div");
  el.textContent = message;
  el.style.position = "fixed";
  el.style.bottom = "20px";
  el.style.right = "20px";
  el.style.background = "var(--text)";
  el.style.color = "#fff";
  el.style.padding = "10px 14px";
  el.style.borderRadius = "10px";
  el.style.boxShadow = "var(--shadow)";
  el.style.zIndex = "20";
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 1800);
}

async function buildWhatsAppPayload() {
  let catalog;
  if (typeof window.firebaseDB !== 'undefined' && window.firebaseDB) {
    catalog = await loadProductsFromFirebase();
  } else {
    catalog = loadProducts();
  }

  const cart = loadCart();
  if (!cart.length) return null;

  let subtotal = 0;
  let text = "*Hello MYMOON STORE,*\nI would like to place an order:\n\n";

  cart.forEach((item) => {
    const product = catalog.find((p) => p.id === item.id);
    if (!product) return;

    // Calculate final price including discount
    const discount = product.discount || 0;
    const finalPrice = discount > 0
      ? Math.round(product.price * (1 - discount / 100))
      : product.price;

    const lineTotal = finalPrice * item.qty;
    subtotal += lineTotal;

    // Format: 
    // 📦 *Item Name* (250g)
    // 2 x ₹200 = ₹400
    text += `📦 *${product.name}* (${product.grams || 0}g)\n`;
    text += `   ${item.qty} x ${currency(finalPrice)} = *${currency(lineTotal)}*\n\n`;
  });

  text += "---------------------------------\n";
  text += `💰 *Grand Total: ${currency(subtotal)}*\n`;
  text += "---------------------------------";

  return text;
}

async function checkoutViaWhatsApp() {
  const text = await buildWhatsAppPayload();
  if (!text) {
    alert("Cart is empty.");
    return;
  }
  if (!whatsappNumber || whatsappNumber.trim().length < 8) {
    alert("WhatsApp number not configured.");
    return;
  }

  const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;

  window.open(url, "_blank");

  // Clear cart after initiating checkout
  saveCart([]);
  renderCart();
  toast("Opening WhatsApp...");
}

// Cart Badge Logic
function updateCartBadge() {
  const cart = loadCart();
  const count = cart.reduce((sum, item) => sum + item.qty, 0);
  const badges = document.querySelectorAll("#cart-count");
  badges.forEach(el => {
    el.textContent = count;
    el.style.display = count > 0 ? "inline-block" : "none";
  });
}

document.addEventListener("DOMContentLoaded", async () => {
  updateCartBadge(); // Update badge on load

  // 1. Optimistic Render: Show defaults/local immediately
  const grid = document.getElementById("product-grid");
  if (grid) {
    // Initial render with defaults or local storage
    console.log("Optimistic render...");
    renderProducts("all", true); // Pass true to force local/cache load first
  }

  // 2. Background Fetch: Get latest from Firebase
  if (typeof window.firebaseDB !== 'undefined' && window.firebaseDB) {
    console.log("Firebase connected, syncing products...");

    // Fetch in background (don't await this block to block UI)
    loadProductsFromFirebase().then(products => {
      console.log("Background sync complete. Products:", products.length);
      // We only re-render if the products actually looked different, but 
      // asking renderProducts to run again will verify cache vs fresh
      renderProducts();
    });

    // Set up real-time listener for future updates
    setupFirebaseListener((products) => {
      console.log("Real-time update:", products.length);
      renderProducts();
    });
  } else {
    console.log("Firebase not available, using localStorage");
  }

  // Filter interactions
  if (grid) {
    const chips = document.querySelectorAll(".chip");
    chips.forEach((chip) => {
      chip.addEventListener("click", async () => {
        chips.forEach((c) => c.classList.remove("is-active"));
        chip.classList.add("is-active");
        await renderProducts(chip.dataset.filter);
      });
    });
  }

  // Contact form placeholder (replace with backend/API)
  const form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      toast("Thanks! We will reach out soon.");
      form.reset();
    });
  }
});

// Expose cart render for cart page script
window.renderCart = renderCart;
window.updateCartBadge = updateCartBadge; // Expose for other scripts if needed
window.mymoonAdmin = {
  loadProducts,
  loadProductsFromFirebase,
  saveProducts,
  initializeFirebaseWithDefaults,
  setupFirebaseListener,
};
window.checkoutViaWhatsApp = checkoutViaWhatsApp;

// Hamburger Toggle
function toggleMenu() {
  const menu = document.getElementById('mobile-menu');
  const icon = document.querySelector('.hamburger');

  if (menu) menu.classList.toggle('open');
  if (icon) icon.classList.toggle('active');
}
window.toggleMenu = toggleMenu;
