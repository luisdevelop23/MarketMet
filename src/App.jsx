import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./modules/core/components/Footer";
import Navbar from "./modules/core/components/Navbar";
import MyAccount from "./page/Account/MyAccount";
import Basket from "./page/basket/Basket";
import HomePage from "./page/home/HomePage";
import InitialContent from "./page/home/layout/InitialContent";
import LoginPage from "./page/login/layout/LoginPage";
import RegisterPage from "./page/login/layout/RegisterPage";
import ProductDetails from "./page/productDetails/ProductDetails";
import { useEffect, useState } from "react";
import supabase from "./services/supabase";
import { data } from "autoprefixer";

function App() {
  const [session, setSession] = useState(null);
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      console.log("session", session);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
    return () => subscription.unsubscribe();
  }, []);

  return (
    <main className="flex h-[100vh] flex-col justify-between">
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
    </main>
  );
}

export default App;
