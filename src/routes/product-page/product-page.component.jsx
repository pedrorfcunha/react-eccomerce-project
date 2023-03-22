import { gql, useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import ProductDetail from "../../components/product-detail-container/product-detail-container.component";

import "./product-page.styles.scss";

const GET_PRODUCT_DETAILS = gql`
  query getProductDetails($id: String!) {
    product(id: $id) {
      id
      name
      gallery
      description
      attributes {
        id
        name
        type
        items {
          displayValue
          value
          id
        }
      }
      prices {
        currency {
          label
          symbol
        }
        amount
      }
      brand
    }
  }
`;

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

  return (
    <ProductDetail product={product}/>
  );
};

export default ProductPage;
