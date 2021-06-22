import React, { createContext, useState, useEffect } from "react";
import { clearItemFromCart } from "../../redux/cart/cart.actions";

import { addItemToCart, removeItemFromCart } from "./cart.utils";

const CartContext = createContext({
  hidden: true,
  toggleHidden: () => {},
  cartItems: [],
  addItem: () => {},
  removeItem: () => {},
  clearItemFromCart: () => {},
  cartItemsCount: 0,
});


const CartProvider = ({ children }) => {
    return <CartContext.Provider> {children}</CartContext.Provider>
}