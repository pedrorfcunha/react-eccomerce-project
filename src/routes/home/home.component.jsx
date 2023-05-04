import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

import CartModal from "../../components/cart-modal/cart-modal.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

import ProductsContainer from "../../components/products-container/products-container.component";

const Home = () => {
  const { isCartOpen } = useContext(CartContext);

  return (
    <>
      <main>
        {isCartOpen && <CartModal><CartDropdown /></CartModal>}
        <ProductsContainer  />
      </main>
    </>
  );
};

export default Home;