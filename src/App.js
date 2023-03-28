import { Routes, Route } from "react-router-dom";

import Navigation from "./routes/navigation/navigation.component";
import Home from "./routes/home/home.component";
import Authentication from "./routes/authentication/authentication.component";
import ProductPage from "./routes/product-page/product-page.component";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="/:category" element={<Home />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="product/:id" element={<ProductPage />} />
      </Route>
    </Routes>
  );
};

export default App;
