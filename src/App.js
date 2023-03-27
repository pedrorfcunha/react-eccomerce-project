import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import { useQuery } from "@apollo/client";
import { GET_PRODUCTS } from "./data/shop-data";

import Navigation from "./routes/navigation/navigation.component";
import Home from "./routes/home/home.component";
import Authentication from "./routes/authentication/authentication.component";
import ProductPage from "./routes/product-page/product-page.component";

const App = () => {
  const [categories, setCategories] = useState([]);

  const response = useQuery(GET_PRODUCTS);
  const { loading, error, data } = response;

  useEffect(() => {
    if (data) {
      const { categories } = data;
      setCategories(categories);
    }
  }, [data]);

  return (
    <Routes>
      <Route path="/" element={<Navigation categories={categories} />}>
        <Route index element={<Home category={"all"} />} />
        {categories.map((category) => (
          <Route
            path={category.name}
            key={category.name}
            element={<Home category={category.name} />}
          />
        ))}
        <Route path="auth" element={<Authentication />} />
        <Route path="product/:id" element={<ProductPage />} />
      </Route>
    </Routes>
  );
};

export default App;
