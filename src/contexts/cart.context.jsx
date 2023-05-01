import { createContext, useContext, useState, useEffect } from "react";

import { CurrencySwitcherContext } from "./currency-switcher.context";

const checkToAddCartItem = (cartItems, productToAdd) => {
  //find if cartItems contains productToAdd
  const checkIfCartItemExists = cartItems.find(
    (cartItem) =>
      JSON.stringify(cartItem.selectedAttributes) ===
      JSON.stringify(productToAdd.selectedAttributes)
  );

  //if found, increment quantity
  if (checkIfCartItemExists) {
    return cartItems.map((cartItem) =>
      JSON.stringify(cartItem.selectedAttributes) ===
      JSON.stringify(productToAdd.selectedAttributes)
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  //return new array with modified cartitems
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const checkToRemoveCartItem = (cartItems, cartItemToRemove) => {
  // find the cart item to remove
  const checkIfCartItemExists = cartItems.find(
    (cartItem) =>
      JSON.stringify(cartItem.selectedAttributes) ===
      JSON.stringify(cartItemToRemove.selectedAttributes)
  );

  // check if quantity is equal to 1, if it is remove that item from the cart
  if (checkIfCartItemExists.quantity === 1) {
    return cartItems.filter(
      (cartItem) =>
        JSON.stringify(cartItem.selectedAttributes) !==
        JSON.stringify(cartItemToRemove.selectedAttributes)
    );
  }

  // return back cartItems with matching cart item with reduced quantity
  return cartItems.map((cartItem) =>
    JSON.stringify(cartItem.selectedAttributes) ===
    JSON.stringify(cartItemToRemove.selectedAttributes)
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  cartCount: 0,
  cartTotalPrice: 0,
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartTotalPrice, setCartTotalPrice] = useState(0);

  const { currencySymbol, checkCurrency } = useContext(CurrencySwitcherContext);

  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    setCartCount(newCartCount);
  }, [cartItems]);

  useEffect(() => {
    const newCartTotalPrice = cartItems.reduce((total, cartItem) => {
      const { prices } = cartItem;
      const filteredPrice = checkCurrency(prices);
      const itemPrice = filteredPrice[0].amount;
      const productPrice = cartItem.quantity * itemPrice;
      return total + productPrice;
    }, 0);
    // const formattedNumber = newCartTotalPrice.toLocaleString("en-US", {
    //   minimumFractionDigits: 2,
    //   maximumFractionDigits: 2,
    // });
    setCartTotalPrice(newCartTotalPrice);
  }, [cartItems, currencySymbol]);

  const addItemToCart = (productToAdd) => {
    setCartItems(checkToAddCartItem(cartItems, productToAdd));
  };

  const removeItemToCart = (cartItemToRemove) => {
    setCartItems(checkToRemoveCartItem(cartItems, cartItemToRemove));
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    removeItemToCart,
    cartItems,
    cartCount,
    cartTotalPrice,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
