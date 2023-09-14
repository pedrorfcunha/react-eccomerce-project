import { useParams } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';

import CartModal from '../../components/cart-modal/cart-modal.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';
import ProductDetail from '../../components/product-detail-container/product-detail-container.component';
import AlertModal from '../../components/alert-modal/alert-modal.component';
import AlertPopUp from '../../components/alert-popup/alert-popup.component';
import GET_PRODUCT_DETAILS from '../../data/get-product-details.json';

import './product-page.styles.scss';

const ProductPage = () => {
  const [product, setProduct] = useState([]);

  const { id } = useParams();

  const { database } = GET_PRODUCT_DETAILS;
  const { ids } = database;

  const getProductDataById = id => {
    const productObj = ids.find(item => item.id === id);
    return productObj ? productObj.data : null;
  };

  const data = getProductDataById(id);

  useEffect(() => {
    if (data) {
      const { product } = data;

      setProduct(product);
    }
  }, [data]);

  const { isCartOpen, isAlertOpen } = useContext(CartContext);

  return (
    <>
      {isCartOpen && (
        <CartModal>
          <CartDropdown />
        </CartModal>
      )}
      {isAlertOpen && (
        <AlertModal>
          <AlertPopUp message={'Please, select all of your attributes before adding to cart :)'} />
        </AlertModal>
      )}
      <ProductDetail product={product} />;
    </>
  );
};

export default ProductPage;
