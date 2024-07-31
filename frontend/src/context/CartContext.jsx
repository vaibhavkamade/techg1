import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [stock, setStock] = useState({}); // Track stock levels

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find(item => item.id === product.id);
      if (existingProduct) {
        return prevCart.map(item =>
          item.id === product.id && item.quantity < item.maxQuantity
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
    // Update stock
    setStock((prevStock) => ({
      ...prevStock,
      [product.id]: (prevStock[product.id] || product.maxQuantity) - 1
    }));
  };

  const updateItemQuantity = (id, quantity) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.map(item =>
        item.id === id
          ? { ...item, quantity }
          : item
      );
      // Update stock
      setStock((prevStock) => ({
        ...prevStock,
        [id]: (prevStock[id] || 0) + (prevCart.find(item => item.id === id).quantity - quantity)
      }));
      return updatedCart;
    });
  };

  const removeItemFromCart = (id) => {
    setCart((prevCart) => {
      const itemToRemove = prevCart.find(item => item.id === id);
      const updatedCart = prevCart.filter(item => item.id !== id);
      // Update stock
      setStock((prevStock) => ({
        ...prevStock,
        [id]: (prevStock[id] || 0) + itemToRemove.quantity
      }));
      return updatedCart;
    });
  };

  return (
    <CartContext.Provider
      value={{ cart, stock, addToCart, updateItemQuantity, removeItemFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
