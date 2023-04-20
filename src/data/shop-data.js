import { gql } from "@apollo/client";

export const GET_CURRENCIES = gql`
  query getCurrencies {
    currencies {
      label
      symbol
    }
  }
`;

export const GET_PRODUCTS = gql`
  query getProducts {
    categories {
      name
      products {
        id
        name
        inStock
        brand
        gallery
        prices {
          currency {
            label
            symbol
          }
          amount
        }
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
