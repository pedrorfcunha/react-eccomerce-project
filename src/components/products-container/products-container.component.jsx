
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import ProductItem from '../product-item/product-item.component';
import GET_PRODUCTS from '../../data/get-products';

import './products-container.styles.scss';

const ProductsContainer = () => {
  const [products, setProducts] = useState([]);

  const { category } = useParams();

  const { data } = GET_PRODUCTS;

  useEffect(() => {
    if (data && category) {
      const { categories } = data;
      const filteredCategory = categories.filter(item => item.name === category);
      const { products } = filteredCategory[0];

      setProducts(products);
    } else if (data) {
      const { categories } = data;
      const { products } = categories[0];

      setProducts(products);
    }
  }, [data, category]);

  return (
    <>
      <h1 className="category-name">{category}</h1>
      <div className="products-container">
        {products.map(product => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};

export default ProductsContainer;
