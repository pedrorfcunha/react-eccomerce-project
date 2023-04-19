import { createContext, useState, useEffect } from "react";

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
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    setCartCount(newCartCount);
  }, [cartItems]);

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
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
