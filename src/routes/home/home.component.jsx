import ProductsContainer from "../../components/products-container/products-container.component";

const Home = ({category}) => {
   return (
    <>
      <main>
        <ProductsContainer category={category} />
      </main>
    </>
  );
};

export default Home;
