'use client';

import { createContext, useState } from 'react';

import {
  CartContextProps,
  CartContextProviderProps,
  CartItem,
} from './cart-context-props';

export const CartContext = createContext({} as CartContextProps);

export function CartProvider({ children }: CartContextProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (productId: string) => {
    setCartItems((state) => {
      const productAlreadyInCart = state.some(
        (product) => product.productId === productId,
      );

      if (productAlreadyInCart) {
        return state.map((product) =>
          product.productId === productId
            ? { ...product, quantity: product.quantity + 1 }
            : product,
        );
      }

      return [...state, { productId, quantity: 1 }];
    });
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  );
}
