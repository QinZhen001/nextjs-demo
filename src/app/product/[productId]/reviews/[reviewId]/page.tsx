import { Metadata } from "next"
import { notFound } from "next/navigation"

type Props = {
  params: {
    productId: string;
    reviewId: string;
  };
}

export const generateMetadata = async ({params}: Props): Promise<Metadata>  => {
  // ... await some async data fetching
  return {
    title: `Review ${params.reviewId}`,
    description: `Review ${params.reviewId} for product ${params.productId}`
  }
}

export default function ReviewDetail({ params }: Props) {

  if (parseInt(params.reviewId) > 1000) {
    return notFound()
  }

  return <>
    <h1>ReviewDetail</h1>
    <h2>productId: {params.productId}</h2>
    <h2>reviewId: {params.reviewId}</h2>
  </>
}
