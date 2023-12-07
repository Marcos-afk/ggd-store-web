'use client';

import { Skeleton } from '@components/skeleton';
import { useSearchParams } from 'next/navigation';

export default function SearchLoading() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q');

  return (
    <main className="flex flex-col gap-4">
      <p className="text-sm">
        Resultados para:
        <span className="font-semibold ml-2">{query}</span>
      </p>

      <div className="grid grid-cols-3 gap-6">
        <Skeleton className="h-[480px]" />
        <Skeleton className="h-[480px]" />
        <Skeleton className="h-[480px]" />
        <Skeleton className="h-[480px]" />
        <Skeleton className="h-[480px]" />
        <Skeleton className="h-[480px]" />
      </div>
    </main>
  );
}
