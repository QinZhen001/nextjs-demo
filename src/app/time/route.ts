import { NextRequest } from "next/server"

// will not cache 
export const dynamic = "force-dynamic"



// Caching in Route Handlers
export async function GET(request: NextRequest) {
  return Response.json({
    time: new Date().toLocaleTimeString()
  })
}
