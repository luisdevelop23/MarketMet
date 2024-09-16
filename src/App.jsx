import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./modules/core/components/Navbar";
import { paginationProductsDefault } from "./services/paginationProducts";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./page/home/HomePage";

function App() {
  return (
    <>
      <Navbar />
      {/* rutas */}
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;
