import { gql } from "@apollo/client";

export const GET_PRODUCTS = gql`
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

export const GET_PRODUCT_DETAILS = gql`
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
