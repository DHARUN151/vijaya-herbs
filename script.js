/* ============================================
   DHARUN STORE - JavaScript Functionality
   E-commerce Website for Tamil Nadu
   ============================================ */

// ============================================
// PRODUCT DATABASE
// ============================================

const products = [
  // Featured Products (10)
  {
    id: 1,
    name: "Organic Turmeric Powder",
    price: "₹249",
    emoji: "🟡",
    featured: true,
    category: "Spices",
  },
  {
    id: 2,
    name: "Premium Red Chili Powder",
    price: "₹199",
    emoji: "🌶️",
    featured: true,
    category: "Spices",
  },
  {
    id: 3,
    name: "Coconut Oil 1L",
    price: "₹349",
    emoji: "🥥",
    featured: true,
    category: "Oil",
  },
  {
    id: 4,
    name: "Coriander Seeds 500g",
    price: "₹179",
    emoji: "🌿",
    featured: true,
    category: "Spices",
  },
  {
    id: 5,
    name: "Rice Flour 1kg",
    price: "₹129",
    emoji: "🍚",
    featured: true,
    category: "Flour",
  },
  {
    id: 6,
    name: "Sesame Oil 200ml",
    price: "₹299",
    emoji: "🌾",
    featured: true,
    category: "Oil",
  },
  {
    id: 7,
    name: "Cardamom 100g",
    price: "₹449",
    emoji: "💚",
    featured: true,
    category: "Spices",
  },
  {
    id: 8,
    name: "Fennel Seeds 250g",
    price: "₹89",
    emoji: "⭐",
    featured: true,
    category: "Spices",
  },
  {
    id: 9,
    name: "Mustard Seeds 200g",
    price: "₹99",
    emoji: "⚫",
    featured: true,
    category: "Spices",
  },
  {
    id: 10,
    name: "Fenugreek Leaves 50g",
    price: "₹139",
    emoji: "🍃",
    featured: true,
    category: "Herbs",
  },

  // Additional Products (30+)
  {
    id: 11,
    name: "Black Pepper 100g",
    price: "₹149",
    emoji: "⚫",
    featured: false,
    category: "Spices",
  },
  {
    id: 12,
    name: "Cumin Seeds 250g",
    price: "₹119",
    emoji: "🟤",
    featured: false,
    category: "Spices",
  },
  {
    id: 13,
    name: "Asafoetida 50g",
    price: "₹99",
    emoji: "🟨",
    featured: false,
    category: "Spices",
  },
  {
    id: 14,
    name: "Clove 100g",
    price: "₹199",
    emoji: "🌹",
    featured: false,
    category: "Spices",
  },
  {
    id: 15,
    name: "Cinnamon Sticks 100g",
    price: "₹179",
    emoji: "🟫",
    featured: false,
    category: "Spices",
  },
  {
    id: 16,
    name: "Bay Leaves 50g",
    price: "₹79",
    emoji: "🍂",
    featured: false,
    category: "Herbs",
  },
  {
    id: 17,
    name: "Nutmeg 50g",
    price: "₹139",
    emoji: "🟤",
    featured: false,
    category: "Spices",
  },
  {
    id: 18,
    name: "Dried Chili 100g",
    price: "₹99",
    emoji: "🌶️",
    featured: false,
    category: "Spices",
  },
  {
    id: 19,
    name: "Gram Flour 1kg",
    price: "₹149",
    emoji: "🟡",
    featured: false,
    category: "Flour",
  },
  {
    id: 20,
    name: "Wheat Flour 2kg",
    price: "₹129",
    emoji: "🟨",
    featured: false,
    category: "Flour",
  },
  {
    id: 21,
    name: "Ghee 500ml",
    price: "₹599",
    emoji: "🟡",
    featured: false,
    category: "Oil",
  },
  {
    id: 22,
    name: "Groundnut Oil 1L",
    price: "₹249",
    emoji: "🥜",
    featured: false,
    category: "Oil",
  },
  {
    id: 23,
    name: "Sunflower Oil 1L",
    price: "₹199",
    emoji: "🌻",
    featured: false,
    category: "Oil",
  },
  {
    id: 24,
    name: "Jaggery 500g",
    price: "₹129",
    emoji: "🟤",
    featured: false,
    category: "Sweetener",
  },
  {
    id: 25,
    name: "Raw Honey 500g",
    price: "₹349",
    emoji: "🍯",
    featured: false,
    category: "Sweetener",
  },
  {
    id: 26,
    name: "Rock Salt 500g",
    price: "₹49",
    emoji: "⚪",
    featured: false,
    category: "Salt",
  },
  {
    id: 27,
    name: "Sea Salt 500g",
    price: "₹89",
    emoji: "⚪",
    featured: false,
    category: "Salt",
  },
  {
    id: 28,
    name: "Tamarind 250g",
    price: "₹119",
    emoji: "🟤",
    featured: false,
    category: "Ingredients",
  },
  {
    id: 29,
    name: "Chana Dal 1kg",
    price: "₹189",
    emoji: "🟡",
    featured: false,
    category: "Lentils",
  },
  {
    id: 30,
    name: "Toor Dal 1kg",
    price: "₹249",
    emoji: "🟡",
    featured: false,
    category: "Lentils",
  },
  {
    id: 31,
    name: "Moong Dal 1kg",
    price: "₹219",
    emoji: "🟢",
    featured: false,
    category: "Lentils",
  },
  {
    id: 32,
    name: "Urad Dal 1kg",
    price: "₹289",
    emoji: "⚫",
    featured: false,
    category: "Lentils",
  },
  {
    id: 33,
    name: "Chickpeas 1kg",
    price: "₹179",
    emoji: "🟤",
    featured: false,
    category: "Legumes",
  },
  {
    id: 34,
    name: "Black Gram 1kg",
    price: "₹269",
    emoji: "⚫",
    featured: false,
    category: "Legumes",
  },
  {
    id: 35,
    name: "Rice Bran Oil 500ml",
    price: "₹299",
    emoji: "🍚",
    featured: false,
    category: "Oil",
  },
  {
    id: 36,
    name: "Dried Ginger 100g",
    price: "₹149",
    emoji: "🟤",
    featured: false,
    category: "Spices",
  },
  {
    id: 37,
    name: "Curry Leaves 50g",
    price: "₹69",
    emoji: "🍃",
    featured: false,
    category: "Herbs",
  },
  {
    id: 38,
    name: "Mint Leaves 50g",
    price: "₹79",
    emoji: "🟢",
    featured: false,
    category: "Herbs",
  },
  {
    id: 39,
    name: "Gram Masala Mix 100g",
    price: "₹179",
    emoji: "🟤",
    featured: false,
    category: "Spice Mix",
  },
  {
    id: 40,
    name: "Sambar Powder 100g",
    price: "₹159",
    emoji: "🟤",
    featured: false,
    category: "Spice Mix",
  },
];

// ============================================
// WHATSAPP INTEGRATION
// ============================================

const WHATSAPP_PHONE = "919876543210";

function openWhatsApp(productName) {
  const message = `Hi Dharun Store! I want to order ${productName}. Please provide details and pricing.`;
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${encodedMessage}`;
  window.open(whatsappUrl, "_blank");
}

// ============================================
// PRODUCT CARD CREATION
// ============================================

function createProductCard(product) {
  const card = document.createElement("div");
  card.className = "product-card";
  card.innerHTML = `
        <div class="product-image">${product.emoji}</div>
        <div class="product-info">
            <h3 class="product-name">${product.name}</h3>
            <div class="product-price">
                <span class="currency">₹</span>
                <span>${product.price.replace("₹", "")}</span>
            </div>
            <button class="whatsapp-order-btn" onclick="openWhatsApp('${product.name.replaceAll("'", "\\'")}')">
                💬 Order on WhatsApp
            </button>
        </div>
    `;
  return card;
}

// ============================================
// DISPLAY FEATURED PRODUCTS
// ============================================

function displayFeaturedProducts() {
  const container = document.getElementById("featuredProducts");
  if (!container) return;

  const featuredProducts = products.filter((p) => p.featured);
  container.innerHTML = "";

  featuredProducts.forEach((product) => {
    const card = createProductCard(product);
    container.appendChild(card);
  });
}

// ============================================
// DISPLAY ALL PRODUCTS
// ============================================

function displayAllProducts() {
  const container = document.getElementById("allProducts");
  if (!container) return;

  container.innerHTML = "";
  products.forEach((product) => {
    const card = createProductCard(product);
    container.appendChild(card);
  });
}

// ============================================
// SEARCH FUNCTIONALITY
// ============================================

function setupSearch() {
  const searchInput = document.getElementById("searchInput");
  if (!searchInput) return;

  searchInput.addEventListener("input", function () {
    filterProducts(this.value.toLowerCase());
  });
}

function filterProducts(searchTerm) {
  const container = document.getElementById("allProducts");
  if (!container) return;

  container.innerHTML = "";

  const filtered = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchTerm) ||
      product.category.toLowerCase().includes(searchTerm),
  );

  if (filtered.length === 0) {
    container.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 40px;">
                <p style="font-size: 18px; color: #999;">No products found. Try a different search!</p>
            </div>
        `;
    return;
  }

  filtered.forEach((product) => {
    const card = createProductCard(product);
    container.appendChild(card);
  });
}

// ============================================
// INITIALIZE ON PAGE LOAD
// ============================================

document.addEventListener("DOMContentLoaded", function () {
  // Display featured products on home page
  displayFeaturedProducts();

  // Setup search functionality
  setupSearch();

  // Add smooth scroll behavior
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
        });
      }
    });
  });

  // Add pop effect to buttons on click
  document.querySelectorAll("button, .cta-button, a").forEach((element) => {
    element.addEventListener("click", function () {
      if (
        this.classList.contains("whatsapp-order-btn") ||
        this.classList.contains("cta-button") ||
        this.classList.contains("whatsapp-button") ||
        this.classList.contains("phone-button")
      ) {
        this.style.animation = "scale 0.3s ease";
        setTimeout(() => {
          this.style.animation = "";
        }, 300);
      }
    });
  });
});

// ============================================
// UTILITY FUNCTIONS
// ============================================

// Format price
function formatPrice(price) {
  return `₹${price}`;
}

// Get product by ID
function getProductById(id) {
  return products.find((p) => p.id === id);
}

// Get products by category
function getProductsByCategory(category) {
  return products.filter((p) => p.category === category);
}

// Get all categories
function getAllCategories() {
  return [...new Set(products.map((p) => p.category))];
}

// ============================================
// TRACKING & ANALYTICS
// ============================================

// Track WhatsApp clicks
function trackWhatsAppClick(productName) {
  console.log(
    `WhatsApp click: ${productName} - ${new Date().toLocaleTimeString()}`,
  );
}

// Track products viewed
function trackProductView(productName) {
  console.log(`Product viewed: ${productName}`);
}

// ============================================
// MOBILE MENU FUNCTIONALITY
// ============================================

function toggleMobileMenu() {
  const navLinks = document.querySelector(".nav-links");
  if (navLinks) {
    navLinks.classList.toggle("active");
  }
}

// Close mobile menu when link is clicked
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", function () {
    if (window.innerWidth <= 768) {
      const navLinks = document.querySelector(".nav-links");
      if (navLinks) {
        navLinks.classList.remove("active");
      }
    }
  });
});
