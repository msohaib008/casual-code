import Post from "./components/Post"
import Link from "next/link";

export default function Home() {
  return (
    <main className="px-6 mx-auto">
      <p className="mt-12 mb-12 text-3xl text-center dark:text-white">
        Hello and Welcome 🙌&nbsp;
        <span className="whitespace-nowrap">
          I&apos;m <span className="font-bold">Sohaib</span>
        </span>
        <Link
          className="underline hover:text-black/70 dark:hover:text-white"
          href={`http://localhost:3000/#/medications`}
        >
          RxLink
        </Link>
      </p>
      <Post />
    </main>
  )
}
