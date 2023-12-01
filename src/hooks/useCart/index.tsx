import { useContext } from 'react';

import { CartContext } from '@contexts/cart';

export function useCart() {
  return useContext(CartContext);
}
