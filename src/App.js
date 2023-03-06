import { Routes, Route } from "react-router-dom";

import Navigation from "./routes/navigation/navigation.component";
import Home from "./routes/home/home.component";

const products = [
  {
    id: 1,
    title: "AirPods Pro",
    imageUrl: process.env.PUBLIC_URL + "/images/airpods.png",
  },
  {
    id: 2,
    title: "Nike Air Huarache Le",
    imageUrl: process.env.PUBLIC_URL + "/images/air-huarache-mens.png",
  },
  {
    id: 3,
    title: "AirTag",
    imageUrl: process.env.PUBLIC_URL + "/images/airtag-single.png",
  },
  {
    id: 4,
    title: "iMac 2021",
    imageUrl: process.env.PUBLIC_URL + "/images/imac-m1.png",
  },
  {
    id: 5,
    title: "iPhone 12 Pro",
    imageUrl: process.env.PUBLIC_URL + "/images/iphone12pro.png",
  },
  {
    id: 6,
    title: "Jacket Canada Goose",
    imageUrl: process.env.PUBLIC_URL + "/images/jacketcanada.png",
  },
  {
    id: 7,
    title: "PlayStation 5",
    imageUrl: process.env.PUBLIC_URL + "/images/playstation5.png",
  },
  {
    id: 8,
    title: "Xbox Series S 512GB",
    imageUrl: process.env.PUBLIC_URL + "/images/xboxseriess.png",
  },
];

const App = () => {
  const filterProducts = (path) => {
    switch (path) {
      case "clothes":
        return products.filter(
          (product) => product.id === 2 || product.id === 6
        );
      case "tech":
        return products.filter(
          (product) =>
            product.id === 1 ||
            product.id === 3 ||
            product.id === 4 ||
            product.id === 5 ||
            product.id === 7 ||
            product.id === 8
        );
      default:
        return products;
    }
  };

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home products={products} />} />
        <Route
          path="clothes"
          element={<Home products={filterProducts("clothes")} />}
        />
        <Route
          path="tech"
          element={<Home products={filterProducts("tech")} />}
        />
      </Route>
    </Routes>
  );
};

export default App;
