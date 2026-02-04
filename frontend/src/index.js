import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import axios from "axios";
// import ProtectedRoute from "./ProtectedRoute";

import Navbar from "./langing_page/Navbar";
import Footer from "./langing_page/Footer";
import HomePage from "./langing_page/home/HomePage";
import Signup from "./langing_page/signup/Signup";
import About from "./langing_page/about/AboutPage";
import Products from "./langing_page/products/ProductPage";
import Pricing from "./langing_page/pricing/PricingPage";
import Support from "./langing_page/support/SupportPage";
import Login from "./langing_page/signup/Login";
import NotFound from "./langing_page/NotFound";

axios.defaults.withCredentials = true;

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Products />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/support" element={<Support />} />
        <Route path="/login" element={<Login></Login>} />
        <Route path="*" element={<NotFound></NotFound>} />
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  </React.StrictMode>,
);
