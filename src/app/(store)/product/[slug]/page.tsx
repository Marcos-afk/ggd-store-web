interface ProductProps {
  params: {
    slug: string;
  };
}

export default async function Product({ params }: ProductProps) {
  console.log(params.slug);

  return (
    <main className="relative grid max-h-[860px]">
      <h1>Product</h1>
    </main>
  );
}
