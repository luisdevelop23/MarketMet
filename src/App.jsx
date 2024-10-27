import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./modules/core/components/Footer";
import Navbar from "./modules/core/components/Navbar";
import Basket from "./page/basket/Basket";
import HomePage from "./page/home/HomePage";
import InitialContent from "./page/home/layout/InitialContent";
import LoginPage from "./page/login/layout/LoginPage";
import RegisterPage from "./page/login/layout/RegisterPage";
import MyAccount from "./page/myList/layout/MyAccount";
import ProductDetails from "./page/productDetails/layout/ProductDetails";

function App() {
  return (
    <>
      <Navbar />
      {/* rutas */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products/:product" element={<InitialContent />} />
        <Route path="/myaccount/:option" element={<MyAccount />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/details/:product" element={<ProductDetails />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        {/* <Route path="/payment" element={} /> */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
