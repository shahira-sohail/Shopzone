# 🛍️ ShopZone

ShopZone is a modern, responsive Single Page E-Commerce application built using React.js. It allows users to browse products, view detailed product information, manage a global shopping cart, and access protected checkout functionality without full-page browser reloads.

## 🚀 Live Demo

🔗 Live Website: https://shopzone-pi-sage.vercel.app/

---

## ✨ Features

- 🏠 Home page with welcome/hero section
- 🛍️ Product listing fetched from DummyJSON API
- 🔎 Dynamic product detail pages
- 🛒 Global shopping cart using Context API
- 🔢 Dynamic cart item count in Navbar
- 💰 Automatic total price calculation
- 💾 Cart persistence using LocalStorage
- 🔐 Mock authentication using Context API
- 👤 Login as Guest functionality
- 🛡️ Protected Checkout route
- 📩 Contact form UI
- 📱 Responsive design for mobile, tablet and desktop
- 🧭 Client-side routing using React Router
- 🦶 Reusable Navbar and Footer components
- 🚫 No prop drilling for global cart and authentication state

---

## 🛠️ Technologies Used

- React.js
- JavaScript
- React Router DOM
- Context API
- CSS3
- Vite
- REST API
- LocalStorage
- DummyJSON API

---

## 🌐 API Used

ShopZone consumes product data from:

https://dummyjson.com/products

Individual product details are fetched dynamically using:

https://dummyjson.com/products/{id}

---

## 📁 Project Structure

```text
src/
│
├── components/
│   ├── Navbar.jsx
│   ├── Navbar.css
│   ├── Footer.jsx
│   └── Footer.css
│
├── context/
│   ├── CartContext.jsx
│   └── AuthContext.jsx
│
├── pages/
│   ├── Home.jsx
│   ├── Home.css
│   ├── Shop.jsx
│   ├── Shop.css
│   ├── Product.jsx
│   ├── Product.css
│   ├── Cart.jsx
│   ├── Cart.css
│   ├── Contact.jsx
│   ├── Contact.css
│   ├── Login.jsx
│   ├── Login.css
│   ├── Checkout.jsx
│   └── Checkout.css
│
├── App.jsx
├── main.jsx
└── index.css

## 🛒 Cart Architecture

The application uses React Context API for global cart management.

The cart state is available across different routes without passing data through multiple component levels.

Cart functionality includes:

Add products
Increase quantity
Decrease quantity
Remove products
Calculate total price
Display cart count
Persist cart data using LocalStorage
## 🔐 Authentication

ShopZone implements mock authentication using React Context API.

Users can select:

Login as Guest

After authentication, the global user state is updated and stored in LocalStorage.

The /checkout route is protected. Unauthorized users are redirected to /login.

## 📱 Responsive Design

The interface is designed to work across:

Desktop
Laptop
Tablet
Mobile devices

Responsive CSS media queries are used to adapt layouts, product grids, navigation and forms to different screen sizes.

## ⚙️ Installation & Setup

Clone the repository:

git clone https://github.com/shahira-sohail/Shopzone.git

Navigate into the project:

cd Shopzone

Install dependencies:

npm install

Start the development server:

npm run dev

Open the local development URL shown by Vite in your browser.

🏗️ Production Build

To create a production build:

npm run build

To preview the production build locally:

npm run preview
🎯 Project Objective

The objective of ShopZone is to demonstrate the development of a scalable React Single Page Application with client-side routing, global state management, API integration, authentication mocking, protected routes and persistent application state.

🔮 Future Scope

Possible future improvements include:

Real user authentication
Backend integration using Node.js and Express.js
MongoDB database integration
Real payment gateway
Product search and filtering
Product reviews and ratings
Wishlist functionality
Order history
Admin dashboard
Real-time order tracking
👩‍💻 Developer

Shahira Sohail

📄 License

This project was developed for educational and internship purposes.


### Then save and push it

```bash
git add README.md
git commit -m "Add ShopZone README"
git push origin main
