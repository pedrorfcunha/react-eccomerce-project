import { Routes, Route } from "react-router-dom";

import Navigation from "./routes/navigation/navigation.component";
import Home from "./routes/home/home.component";
import Authentication from "./routes/authentication/authentication.component";
import ProductPage from "./routes/product-page/product-page.component";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home category={"all"} />} />
        <Route path="all" element={<Home category={"all"} />} />
        <Route path="clothes" element={<Home category={"clothes"} />} />
        <Route path="tech" element={<Home category={"tech"} />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="product/:id" element={<ProductPage />} />
      </Route>
    </Routes>
  );
};

export default App;
