import { ComponentProps } from 'react';

import { twMerge } from 'tailwind-merge';

export function Skeleton({ className, ...rest }: ComponentProps<'main'>) {
  return (
    <main
      className={twMerge('bg-zinc-50/10 animate-pulse rounded-md', className)}
      {...rest}
    />
  );
}
