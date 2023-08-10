import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import LoginPage from "./components/pages/login/LoginPage";
import { Routes, Route } from "react-router-dom";
import OrderPage from "./components/pages/order/OrderPage";
import ErrorPage from "./components/pages/error/errorPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/order" element={<OrderPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default App;
