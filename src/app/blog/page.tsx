import Link from "next/link";

import { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    absolute: "Absolute Blog",  // not used template
    default: "Default Blog",
    template: null,
  }
}

export default function Blog() {
  return <>
    <h1>Blog</h1>
    <Link href={"/blog/first"}>first blog</Link>
    <Link href={"/blog/second"}>second blog</Link>
  </>;
}
