import { api } from '@data/api';
import { ProductDTO } from '@dtos/products';
import { ImageResponse } from 'next/og';
import { zinc } from 'tailwindcss/colors';

import { env } from '../../../../env';

export const runtime = 'edge';

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

async function getProduct(slug: string): Promise<ProductDTO> {
  const response = await api(`/products/${slug}`, {
    next: {
      revalidate: 60 * 5, // 5 minutes
    },
  });

  return response.json();
}

export default async function OgImage({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  const product = await getProduct(params.slug);

  const productImageURL = new URL(product.image, env.APP_URL).toString();

  return new ImageResponse(
    (
      <div
        style={{
          backgroundColor: zinc[950],
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <img
          src={productImageURL}
          alt={product.title}
          style={{ width: '100%' }}
        />
      </div>
    ),
    {
      ...size,
    },
  );
}
