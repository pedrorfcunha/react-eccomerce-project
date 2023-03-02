import ProductsContainer from "./components/products-container/products-container.component";

import "./products.styles.scss";

const App = () => {
  const products = [
    {
      id: 1,
      title: "Apollo Running Shop A",
      imageUrl: process.env.PUBLIC_URL + "/images/airpods.png",
    },
    {
      id: 2,
      title: "Apollo Running Shop B",
      imageUrl: process.env.PUBLIC_URL + "/images/air-huarache-mens.png",
    },
    {
      id: 3,
      title: "Apollo Running Shop C",
      imageUrl: process.env.PUBLIC_URL + "/images/airtag-single.png",
    },
    {
      id: 4,
      title: "Apollo Running Shop D",
      imageUrl: process.env.PUBLIC_URL + "/images/imac-m1.png",
    },
    {
      id: 5,
      title: "Apollo Running Shop E",
      imageUrl: process.env.PUBLIC_URL + "/images/iphone12pro.png",
    },
    {
      id: 6,
      title: "Apollo Running Shop F",
      imageUrl: process.env.PUBLIC_URL + "/images/jacketcanada.png",
    },
    {
      id: 7,
      title: "Apollo Running Shop G",
      imageUrl: process.env.PUBLIC_URL + "/images/playstation5.png",
    },
    {
      id: 8,
      title: "Apollo Running Shop H",
      imageUrl: process.env.PUBLIC_URL + "/images/xboxseriess.png",
    },
  ];

  return (
    <>
      <header></header>
      <main>
        <h1 className="category-name">Category Name</h1>
        <ProductsContainer products={products} />
      </main>
    </>
  );
};

export default App;
