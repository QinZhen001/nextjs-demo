import { NextRequest } from "next/server"
import { headers,cookies } from "next/headers"

// export async function GET(request: NextRequest) {
//   const requestHeaders  = new Headers(request.headers)
//   const authorization = requestHeaders.get("Authorization")


//   return Response.json({
//     authorization
//   })
// }



export async function GET(request: NextRequest) {
  const requestHeaders = new Headers(request.headers)
  const headerList = headers()

  // return Response.json({
  //   authorization: headerList.get("Authorization")
  // })

  // const theme = request.cookies.get("theme")

  cookies().set("theme", "dark1")

  return new Response(`<h1>
    authorization: ${headerList.get("Authorization")} <br>

  </h1>`, {
    headers: {
      "Content-Type": "text/html",
      // "Set-Cookie": "theme=dark",
    }
  })
}
