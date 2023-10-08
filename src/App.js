import React from "react";
import HomePage from "./pages/HomePage";
import Content from "./components/content/Content";
import Navbar from "./components/navbar/Navbar";
import Login from "./components/login/Login";

import Header from "./components/header/Header";
import { Route, Routes } from "react-router-dom";
import OrdersPage from "./pages/OrdersPage";
import ProductPage from "./pages/ProductPage";
import AnalysisPage from "./pages/AnalysisPage";
import LoginPage from "./pages/LoginPage";
import { useUserContext } from "./context/userContext";
import NewOrder from "./components/newOrder/NewOrder";


function Page () {
  return (
    <div>
      <HomePage />
    </div>
  )
}

function App() {
 const {LoggedIn} = useUserContext()

  const authenticatedRoutes = (
    <Routes>
      <Route path="/home" element={<Page />} />
      <Route path="/" element={<Page />} />
      <Route path="/order" element={<OrdersPage />} />
      <Route path="/product" element={<ProductPage />} />
      <Route path="/analysis" element={<AnalysisPage />} />
      <Route path="/neworder" element={<NewOrder />} />

      <Route path="*" element={<Page />} />


    </Routes>
  )

  const unauthenticatedRoutes = (
    <Routes>
    <Route path="/login" element={<LoginPage />} />
    <Route path="*" element={<LoginPage />} />

    </Routes>
  )

  return LoggedIn ? authenticatedRoutes : unauthenticatedRoutes;
  
}

export default App;
