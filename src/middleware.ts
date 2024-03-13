import { NextResponse, NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  // console.log("middleware")
  // return next(request)

  // if (request.nextUrl.pathname == "/profile") {
  //   return NextResponse.redirect(new URL("/hello", request.url))

  // }


  // return NextResponse.redirect(new URL("/", request.url))
}

// export const config = {
//   matcher:"/profile"
// }
