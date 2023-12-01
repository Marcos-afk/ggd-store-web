'use client';

import { useCart } from '@hooks/useCart';
import { ShoppingBag } from 'lucide-react';

export function CartWidget() {
  const { cartItems } = useCart();

  return (
    <div className="flex items-center gap-2">
      <ShoppingBag className="h-4 w-4" />
      <span className="text-sm">Cart ({cartItems.length})</span>
    </div>
  );
}
