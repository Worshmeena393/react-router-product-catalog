# React Router Product Catalog

A simple multi-page product catalog built with **React v18** and **React Router v7**.  
This project demonstrates routing, nested routes, dynamic routes, and component-based design in React.

---

 📁 Project Structure


 src/
├─ components/
│ ├─ Navbar.jsx
│ ├─ ProductCard.jsx
│ ├─ ProductGrid.jsx
│ ├─ BackButton.jsx
│ └─ NotFoundMessage.jsx
├─ pages/
│ ├─ Home.jsx
│ ├─ ProductsLayout.jsx
│ ├─ ProductsList.jsx
│ ├─ ProductDetails.jsx
│ └─ NotFound.jsx
├─ data/
│ └─ products.js
├─ App.jsx
├─ main.jsx
└─ index.css



---

## 🚀 Features

1. **Routing**
   - `/` → Home page
   - `/products` → Products layout + list
   - `/products/:id` → Product details (dynamic route)
   - `*` → 404 Not Found page

2. **Navigation**
   - Top navigation bar visible on all pages
   - Uses `NavLink` to highlight the active page

3. **Product Data**
   - Local array of products (no API)
   - Each product has: `id`, `name`, `price`, `category`, `description`
   - Minimum 6 products

4. **Nested Routes**
   - `/products` acts as a layout route
   - `<Outlet />` used to render child routes

5. **Product List**
   - Displays all products in a grid
   - Each product has a **View Details** link to `/products/:id`

6. **Product Details**
   - Displays product info: `name`, `price`, `category`, `description`
   - "Back to Products" button navigates back
   - Shows "Product not found" if ID doesn't match

7. **Technical**
   - React Router v7 syntax (`element`, not `component`)
   - Uses `useParams()` and `useNavigate()`
   - Organized into `pages/` and `components/` folders

---

## 🛠 Installation

1. Clone the repository:

```bash
git clone <YOUR_REPO_URL>
cd react-router-product-catalog


npm install

npm run dev

http://localhost:5173/

⚡ Usage

Navigate between Home and Products pages using the navbar.

Click View Details on a product to see its details.

Use the Back to Products button to return to the list.

If you enter an invalid product ID, a friendly Product not found message appears.

Dependencies

React 18+

React Router DOM 7+

Vite

Notes

All styling is included in index.css.

Components are reusable and follow best practices.

Make sure file names are case-sensitive, especially for imports.

Hard refresh (Ctrl + Shift + R) if you see stale content.



📂 Available Scripts

npm run dev → Start development server

npm run build → Build production version

npm run preview → Preview production build

