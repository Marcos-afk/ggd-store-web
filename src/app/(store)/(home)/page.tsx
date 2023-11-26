import { api } from '@data/api';
import { ProductDTO } from '@dtos/products';
import { formatPrice } from '@utils/format-price';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Home',
  description: 'Home page',
};

async function fetchFeaturedProducts(): Promise<ProductDTO[]> {
  const response = await api('/products/featured', {
    next: {
      revalidate: 60 * 5, // 5 minutes
    },
  });

  return response.json();
}

export default async function Home() {
  const [highlightedProduct, ...otherProducts] = await fetchFeaturedProducts();

  return (
    <main className="grid max-h-[860px] grid-cols-9 grid-rows-6 gap-6">
      <Link
        href={`/product/${highlightedProduct.slug}`}
        className="relative group col-span-6 row-span-6 rounded-lg bg-zinc-900 overflow-hidden flex justify-center"
      >
        <Image
          src={highlightedProduct.image}
          alt={highlightedProduct.title}
          width={920}
          height={920}
          quality={100}
          className="group-hover:scale-105 transition-transform duration-500"
        />
        <div
          className="absolute bottom-28 right-28 h-12 flex items-center gap-2 max-w-[280px] rounded-full border-2 border-zinc-500
        bg-black/60 p-1 pl-5"
        >
          <span className="text-sm truncate">{highlightedProduct.title}</span>
          <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">
            {formatPrice(highlightedProduct.price)}
          </span>
        </div>
      </Link>

      {otherProducts.map((product) => (
        <Link
          key={product.id}
          href={`/product/${product.slug}`}
          className="relative group col-span-3 row-span-3 rounded-lg bg-zinc-900 overflow-hidden flex justify-center"
        >
          <Image
            src={product.image}
            alt={product.title}
            width={920}
            height={920}
            quality={100}
            className="group-hover:scale-105 transition-transform duration-300"
          />

          <div
            className="absolute bottom-10 right-10 h-12 flex items-center gap-2 max-w-[280px] rounded-full border-2 border-zinc-500
        bg-black/60 p-1 pl-5"
          >
            <span className="text-sm truncate">{product.title}</span>
            <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">
              {formatPrice(product.price)}
            </span>
          </div>
        </Link>
      ))}
    </main>
  );
}
