import { gql, useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import Button from "../../components/button/button.component";

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
  const { attributes, brand, description, gallery, name, prices } = product;

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
  console.log(product);

  return (
    <div className="product-description-container">
      <div className="product-img-album">
        {gallery?.map((image) => (
          <img className="mini-img" src={image} key={image}></img>
        ))}
      </div>
      <div className="image-container">
        <img className="main-img" src={gallery} alt={name}></img>
      </div>
      <div className="product-details-container">
        <h2>{brand}</h2>
        <h3>{name}</h3>
        <div className="atributtes-container"></div>
        <Button>ADD TO CART</Button>
        <div className="description" dangerouslySetInnerHTML={{ __html: description }}></div>
      </div>
    </div>
  );
};

export default ProductPage;
