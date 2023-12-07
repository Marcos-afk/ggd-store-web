import { CartWidget } from '@components/cart-widget';
import { SearchForm } from '@components/search-form';
import Image from 'next/image';
import Link from 'next/link';

export function Header() {
  return (
    <header className="flex items-center justify-between">
      <div className="flex items-center gap-5">
        <Link href="/" className="text-2xl font-extrabold text-white">
          GGD Store
        </Link>
        <SearchForm />
      </div>
      <div className="flex items-center gap-4">
        <CartWidget />

        <div className="w-px h-4 bg-zinc-700" />
        <Link
          href="/"
          className="flex items-center gap-2 hover:underline all:transition-all all:duration-300 all:ease-in-out"
        >
          <span className="text-sm">Account</span>
          <Image
            src="https://avatars.githubusercontent.com/u/72817154?v=4"
            alt=""
            className="w-6 h-6 rounded-full"
            width={24}
            height={24}
          />
        </Link>
      </div>
    </header>
  );
}
