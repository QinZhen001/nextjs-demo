"use client"
import { useRouter } from "next/navigation"

export default function OrderProduct() {
  const router = useRouter()

  const placeOrder = () => {
    console.log('placeOrder')
    router.push("/")
  }

  return <>
    <h1>OrderProduct</h1>
    <div>
      <button onClick={placeOrder}>Place order</button>
    </div>
  </>
}
