# 🏪 Vijaya Herbs- E-Commerce Website

A modern, mobile-friendly e-commerce website for a Tamil Nadu small business, built with HTML, CSS, and JavaScript.

## 📋 Project Structure

```
vijaya-herbs/
├── index.html          # Home page with featured products
├── products.html       # All products page with search
├── contact.html        # Contact & business information
├── styles.css          # Complete responsive styling
├── script.js           # JavaScript functionality & product data
└── README.md           # This file
```

## ✨ Key Features

### 1. **Home Page (index.html)**

- 🔥 Hero banner with "Best Sellers" headline
- 💥 Featured 10 products showcase
- 📊 Features section highlighting business benefits
- 🎯 Call-to-action button to view all products

### 2. **Products Page (products.html)**

- 📦 Display 30+ products in responsive grid
- 🔍 Search functionality by product name or category
- 📱 Mobile-optimized layout
- 💬 WhatsApp order button for each product

### 3. **Contact Page (contact.html)**

- 📍 Business location and contact information
- 📱 Phone number with call link
- 💬 Direct WhatsApp integration
- 📧 Contact form for inquiries

## 🎨 Design Features

### Color Scheme

- **Primary Color**: #FF6B35 (Bright Orange)
- **Secondary Color**: #FFD60A (Bright Yellow)
- **Accent Color**: #DC1C13 (Deep Red)
- **Light Background**: #FFF8F0 (Cream)

### Responsive Design

- ✅ Mobile-first approach
- ✅ Tablets (768px and below)
- ✅ Mobile phones (480px and below)
- ✅ Desktop (1200px+)

### Hover Effects

- 🎯 Product cards lift on hover
- 🔘 Button scale effects
- ⚡ Smooth transitions throughout
- ✨ Animations on load

## 🚀 Quick Start

1. **Open the website**: Open `index.html` in your web browser
2. **Navigate**: Use the top navigation bar to switch between pages
3. **Search Products**: Use the search bar on products page
4. **Order via WhatsApp**: Click "💬 Order on WhatsApp" button on any product

## 📱 WhatsApp Integration

All products have a direct WhatsApp ordering button that:

- Opens WhatsApp with a pre-filled message
- Includes the product name automatically
- Uses the business WhatsApp number: +91 98765 43210
- Works on both web and mobile devices

**To customize the WhatsApp number:**

1. Open `script.js`
2. Find: `const WHATSAPP_PHONE = "919876543210";`
3. Replace with your WhatsApp number (without +91)

## 📊 Product Database

The website includes 40 products:

- **10 Featured** products (shown on home page)
- **30+ All Products** (shown on products page)

**Product Categories:**

- Spices 🌶️
- Oils 🥥
- Flours 🍚
- Herbs 🍃
- Lentils 🟡
- Legumes 🟤
- Salt ⚪
- Sweeteners 🍯
- Spice Mixes 🟤

### To add/edit products:

1. Open `script.js`
2. Find the `products` array
3. Add or modify products following this format:

```javascript
{
    id: 41,
    name: "Product Name",
    price: "₹299",
    emoji: "🟡",
    featured: false,
    category: "Category"
}
```

## 🎯 Product Object Structure

```javascript
{
    id: 1,                      // Unique identifier
    name: "Product Name",       // Display name
    price: "₹249",             // Price in rupees
    emoji: "🟡",               // Display emoji
    featured: true,            // Show on home page?
    category: "Spices"         // Product category
}
```

## 🔧 Customization Guide

### 1. Change Business Name

- `index.html, products.html, contact.html`: Replace "Dharun Store" with your store name
- `styles.css`: Update `.footer` if needed

### 2. Update Contact Info

File: `contact.html`

- Replace phone number: +91 98765 43210
- Replace location: Tamil Nadu
- Update email: info@dharunstore.com

### 3. Modify Colors

File: `styles.css` (Top section - `:root` variables)

```css
--primary-color: #ff6b35; /* Orange */
--secondary-color: #ffd60a; /* Yellow */
--accent-color: #dc1c13; /* Red */
```

### 4. Change Product Images

Currently using emojis. To add real images:

1. Add image URLs to product objects in `script.js`
2. Modify `createProductCard()` function to use `<img>` tags

### 5. Update Business Hours

File: `contact.html`

- Find "Business Hours: 9 AM - 8 PM"
- Update as needed

## 📱 Mobile Responsiveness

The website automatically adjusts for:

- **Desktop** (1200px+): 5 columns grid
- **Tablets** (768px): 4 columns grid
- **Mobile** (480px): 2 columns grid
- **Small Phone** (360px): 1 column grid

## 🎨 Typography

- **Font**: Segoe UI, Tahoma, Geneva, Verdana, sans-serif
- **Hero Title**: 48px, Bold 900
- **Section Titles**: 36px, Bold 900
- **Body Text**: 16px, Normal weight

## ⚡ Performance Features

- ✅ Lightweight (no external frameworks)
- ✅ Fast loading (CSS approach optimized)
- ✅ Smooth animations (CSS transitions)
- ✅ Mobile-optimized
- ✅ SEO-friendly HTML structure

## 🔗 Navigation Structure

```
Home (index.html)
├── Featured Products Section
├── Features Section
└── "View More Products" → Products Page

Products (products.html)
├── Search Bar
├── Product Grid (30+ items)
└── Navigation to Home/Contact

Contact (contact.html)
├── Business Info
├── Contact Form
└── WhatsApp/Phone Links
```

## 📞 Support & Updates

### Adding New Pages

1. Create new HTML file
2. Copy navbar and footer from existing pages
3. Link in navbar of all pages
4. Add `<link rel="stylesheet" href="styles.css">`
5. Add `<script src="script.js"></script>`

### Troubleshooting WhatsApp Links

- Ensure proper phone number format (without + or -)
- Test on actual mobile device
- Check WhatsApp is installed on device
- Verify message encoding in `script.js`

## 📄 File Sizes

- `index.html`: ~2 KB
- `products.html`: ~1 KB
- `contact.html`: ~3 KB
- `styles.css`: ~25 KB
- `script.js`: ~12 KB
- **Total**: ~43 KB

## ✅ Browser Compatibility

- ✅ Chrome & Edge
- ✅ Firefox
- ✅ Safari
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🎯 Next Steps

1. **Customize Colors**: Update CSS variables in `styles.css`
2. **Add Your Products**: Edit product array in `script.js`
3. **Update Contact Info**: Modify `contact.html`
4. **Test on Mobile**: Check responsiveness on actual devices
5. **Deploy**: Upload to web hosting service

## 📝 HTML Structure

All pages follow semantic HTML5:

```html
<nav>
  <!-- Navigation Bar -->
  <header>
    <!-- Page Header/Hero -->
    <section>
      <!-- Main Content -->
      <footer><!-- Footer --></footer>
    </section>
  </header>
</nav>
```

## 🎉 Ready to Use!

The website is fully functional and ready to deploy. No additional dependencies or installations needed.

---

**Created**: 2026  
**For**: Dharun Store, Tamil Nadu  
**Built with**: Pure HTML, CSS, JavaScript  
**License**: Open Source

🚀 **Happy Selling!**
