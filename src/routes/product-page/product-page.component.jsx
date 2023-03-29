import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { useState, useEffect, useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

import Modal from "../../components/modal/modal.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import ProductDetail from "../../components/product-detail-container/product-detail-container.component";

import { GET_PRODUCT_DETAILS } from "../../data/shop-data";

import "./product-page.styles.scss";

const ProductPage = () => {
  const [product, setProduct] = useState([]);

  const { id } = useParams();

  const response = useQuery(GET_PRODUCT_DETAILS, {
    variables: {
      id: id,
    },
  });
  const { loading, error, data } = response;

  useEffect(() => {
    if (data) {
      const { product } = data;

      setProduct(product);
    }
  }, [data]);

  const { isCartOpen } = useContext(CartContext);

  return (
    <>
      {isCartOpen && (
        <Modal>
          <CartDropdown />
        </Modal>
      )}
      <ProductDetail product={product} />;
    </>
  );
};

export default ProductPage;
