import { api } from '@data/api';
import { ProductDTO } from '@dtos/products';
import { formatPrice } from '@utils/format-price';
import Image from 'next/image';
import Link from 'next/link';
import { redirect } from 'next/navigation';

interface SearchProps {
  searchParams: {
    q: string;
  };
}

async function searchProducts(query: string): Promise<ProductDTO[]> {
  const response = await api(`/products/search?q=${query}`, {
    next: {
      revalidate: 60 * 5, // 5 minutes
    },
  });

  return response.json();
}

export default async function Search({ searchParams }: SearchProps) {
  const { q: query } = searchParams;

  if (!query) {
    redirect('/');
  }

  const products = await searchProducts(query);

  return (
    <main className="flex flex-col gap-4">
      {searchParams.q && (
        <p className="text-sm">
          Resultados para:
          <span className="font-semibold ml-2">{query}</span>
        </p>
      )}

      <div className="grid grid-cols-3 gap-6">
        {products.map((product) => (
          <Link
            key={product.id}
            href={`/product/${product.slug}`}
            className="relative group rounded-lg bg-zinc-900 overflow-hidden flex justify-center"
          >
            <Image
              src={product.image}
              alt={product.title}
              width={480}
              height={480}
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
      </div>
    </main>
  );
}
