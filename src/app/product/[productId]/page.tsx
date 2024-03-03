export default function ProductDetail({ params }: {
  params: {
    productId: string;
  };
}) {
  return <h1>ProductDetail {params.productId}</h1>;
}
