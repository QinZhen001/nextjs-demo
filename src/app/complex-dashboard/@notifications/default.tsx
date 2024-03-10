import Card from "@/components/card"
import Link from "next/link"

export default function DefaultNotifications() {
  return <Card>
    <div>Notifications</div>
    {/* Unmatched Routes */}
    <Link href={"/complex-dashboard/archived"}>Archived</Link>
  </Card>
}
