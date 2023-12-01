'use client';

import { useCart } from '@hooks/useCart';

interface AddToCartButtonProps {
  productId: string;
}

export function AddToCartButton({ productId }: AddToCartButtonProps) {
  const { addToCart } = useCart();

  return (
    <button
      type="button"
      className="mt-8 flex h-12 items-center justify-center rounded-full bg-emerald-600 text-white
      hover:bg-emerald-700 font-semibold w-full
      transition-colors"
      onClick={() => addToCart(productId)}
    >
      Adicionar ao carrinho
    </button>
  );
}
