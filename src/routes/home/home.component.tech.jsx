import ProductsContainer from "../../components/products-container/products-container.component";

const HomeTech = () => {
  const products = [
    {
      id: 1,
      title: "AirPods Pro",
      imageUrl: process.env.PUBLIC_URL + "/images/airpods.png",
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

  return (
    <>
      <main>
        <ProductsContainer products={products} />
      </main>
    </>
  );
};

export default HomeTech;
