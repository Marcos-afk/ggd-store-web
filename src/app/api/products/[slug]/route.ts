import { z } from 'zod';

import data from '../data.json';

interface ParamsProps {
  params: {
    slug: string;
  };
}

export async function GET(req: Request, { params }: ParamsProps) {
  const slug = z.string().parse(params.slug);

  const product = data.products.find((product) => product.slug === slug);

  if (!product) {
    return Response.json(
      { message: 'Produto não encontrado' },
      { status: 404 },
    );
  }

  return Response.json(product);
}
