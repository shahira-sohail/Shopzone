import { Routes, Route } from "react-router-dom";

import Navbar from "./Navbar";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Contact from "./pages/Contact";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Checkout from "./pages/Checkout";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/shop" element={<Shop />}/>

        <Route path="/contact" element={<Contact />}/>

        <Route path="/product/:id" element={<Product />}/>

        <Route path="/cart" element={<Cart />}/>

        <Route path="/login" element={<Login />}/>

        <Route path="/checkout" element={
          <ProtectedRoute>
            <Checkout />
          </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;