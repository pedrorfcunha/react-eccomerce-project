import { gql, useQuery } from "@apollo/client";
import { useState, useEffect } from "react";

import ProductItem from "../product-item/product-item.component";

import "./products-container.styles.scss";

const GET_PRODUCTS = gql`
  query getProducts {
    categories {
      name
      products {
        id
        name
        brand
        gallery
      }
    }
  }
`;

const ProductsContainer = ({category}) => {
  const [products, setProducts] = useState([]);

  const response = useQuery(GET_PRODUCTS);
  const { loading, error, data } = response;

  useEffect(() => {
    if (data) {
      const { categories } = data;
      const filteredCategory = categories.filter((item) => item.name === category);
      const {products} = filteredCategory[0];

      setProducts(products);
    }
  }, [data, category]);
  
  return (
    <>
      <h1 className="category-name">Category Name</h1>
      <div className="products-container">
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};

export default ProductsContainer;
