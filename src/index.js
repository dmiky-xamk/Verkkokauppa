import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { AuthContextProvider } from "./context/auth-context";
import { CartContextProvider } from "./context/cart-context";
import App from "./App";

// Wrapataan App contextilla -> App pysyy siistimpänä, eikä tarvitse lähettää propsien kautta tietoja niin paljon
ReactDOM.render(
  <AuthContextProvider>
    <CartContextProvider>
      <App />
    </CartContextProvider>
  </AuthContextProvider>,
  document.getElementById("root")
);
