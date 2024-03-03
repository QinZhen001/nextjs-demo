import Link from "next/link"

export default function Product() {
  return <>
    <h1>Product</h1>
    <h2>product1</h2>
    <h2>product2</h2>
    <h2>
      <Link href={"/product/3"} >product3</Link>
    </h2>
    <h2>
      <Link href={"/product/4"} replace>product4</Link>
    </h2>
  </>
}
