import { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    absolute: "Absolute Blog",  // not used template
    default: "Default Blog",
    template: null,
  }
}

export default function Blog() {
  return <h1>Blog</h1>;
}
