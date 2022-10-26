import React, { Suspense, lazy } from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Spinner } from "react-spinner-animated";
import "react-spinner-animated/dist/index.css";

import "./styles/main.scss";
import Home from "./pages/home";
const NewArrivals = lazy(() => import("./pages/newArrivals"));
const Account = lazy(() => import("./pages/account"));
const Product = lazy(() => import("./pages/product"));

function App() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/newarrivals" element={<NewArrivals />} />
            <Route path="/account" element={<Account />} />
            <Route path="/product" element={<Product />} />
          </Routes>
          <Footer />
        </Router>
      </Suspense>
    </>
  );
}

export default App;
