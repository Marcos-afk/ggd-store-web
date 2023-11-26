import { env } from '../env';

export function api(path: string, init?: RequestInit) {
  const apiPrefix = '/api';
  const url = new URL(apiPrefix.concat(path), env.NEXT_PUBLIC_API_BASE_URL);

  return fetch(url, init);
}
