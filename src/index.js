import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

import App from "./App";
import { UserProvider } from "./contexts/user.context";
import { CartProvider } from "./contexts/cart.context";
import { CurrencySwitcherProvider } from "./contexts/currency-switcher.context";

import "./index.scss";

const client = new ApolloClient({
  uri: "http://localhost:4000/",
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <CurrencySwitcherProvider>
          <UserProvider>
            <CartProvider>
              <App />
            </CartProvider>
          </UserProvider>
        </CurrencySwitcherProvider>
      </BrowserRouter>
    </ApolloProvider>
  </React.StrictMode>
);
