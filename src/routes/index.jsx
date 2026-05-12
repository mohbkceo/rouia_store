import { Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout.jsx";
import Home from "../pages/Home.jsx";
import Product from "../pages/Product.jsx";
import Collection from "../pages/Collection.jsx";
import Search from "../pages/Search.jsx";
import NotFound from "../pages/NotFound.jsx";
import CartPage from "../pages/CartPage.jsx";
import CheckoutSuccess from "../pages/CheckoutSuccess.jsx";

export default function AppRoutes() {
  return (
    <Routes>
      
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/products/:handle" element={<Product />} />
        <Route path="/collections/:handle" element={<Collection />} />
        <Route path="/search" element={<Search />} />
        <Route path="/cart" element={<CartPage />} />
        <Route
            path="/checkout/success"
            element={<CheckoutSuccess />}
          />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
