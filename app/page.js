import Link from "next/link"

export default function Home() {
  return (
    <div>
      <Link href="/about">About</Link>
      <br></br>
      <Link href="docs/post1/post2">Post1</Link>
    </div>
  )
}
