import ProductsContainer from "../../components/products-container/products-container.component";

const HomeClothes = ({products}) => {
  return (
    <>
      <main>
        <ProductsContainer products={products} />
      </main>
    </>
  );
};

export default HomeClothes;
