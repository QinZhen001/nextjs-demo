import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <h1>Home</h1>
      <Link href="/blog">blog</Link>
    </>
  );
}
