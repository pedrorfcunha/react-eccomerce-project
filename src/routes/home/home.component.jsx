import ProductsContainer from "../../components/products-container/products-container.component";

const Home = ({products}) => {
   return (
    <>
      <main>
        <ProductsContainer products={products} />
      </main>
    </>
  );
};

export default Home;
