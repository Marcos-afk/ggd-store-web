/* eslint-disable no-unused-vars */

import { ReactNode } from 'react';

export interface CartItem {
  productId: string;
  quantity: number;
}

export interface CartContextProps {
  cartItems: CartItem[];
  addToCart: (productId: string) => void;
}

export interface CartContextProviderProps {
  children: ReactNode;
}
