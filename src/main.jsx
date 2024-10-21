import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ProductsProvider } from "./context/ProductsContext.jsx";
import { BrowserRouter } from "react-router-dom";
import { LoginProvider } from "./context/LoginContext.jsx";

createRoot(document.getElementById("root")).render(
  <LoginProvider>
    <ProductsProvider>
      <StrictMode>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </StrictMode>
    </ProductsProvider>
  </LoginProvider>,
);
