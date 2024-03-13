import { redirect } from "next/navigation"
import { comments } from "../data"

export async function GET(request: Request, context: {
  params: {
    id: string
  }
}) {
  const id = context.params.id
  const comment = comments.find((comment) => comment.id === parseInt(id, 10))

  if(!comment){
    redirect("/comments")
  }

  // return Response.redirect("/comments", 301)
  // return new Response("GET /comments/[id]")

  return Response.json(comment)
}




export async function PATCH(request: Request, context: {
  params: {
    id: string
  }
}) {
  const body = await request.json()
  const { text } = body
  const id = context.params.id
  const comment = comments.find((comment) => comment.id === parseInt(id, 10))
  if (comment) {
    comment.text = text
  }

  return Response.json(comment)
}


export async function DELETE(request: Request, context: {
  params: {
    id: string
  }
}) {
  const id = context.params.id
  const commentIndex = comments.findIndex((comment) => comment.id === parseInt(id, 10))
  const deledtedComment = comments[commentIndex]
  if (commentIndex !== -1) {
    comments.splice(commentIndex, 1)
  }

  return Response.json(deledtedComment)
}
