import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./modules/core/components/Navbar";
import Basket from "./page/basket/Basket";
import HomePage from "./page/home/HomePage";
import InitialContent from "./page/home/layout/InitialContent";
import MyList from "./page/myList/MyList";
import ProductDetails from "./page/productDetails/ProductDetails";
import Footer from "./modules/core/components/Footer";

function App() {
  return (
    <>
      <Navbar />
      {/* rutas */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products/:product" element={<InitialContent />} />
        <Route path="/myList" element={<MyList />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/Details/:product" element={<ProductDetails />} />
        {/* <Route path="/payment" element={} /> */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
