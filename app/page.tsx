import Post from "./components/Post"
import Link from "next/link";
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  const handleGoBack = () => {
    router.back(); // This will take the user back to the previous page in the browser history
  };
  return (
    <main className="px-6 mx-auto">
      <p className="mt-12 mb-12 text-3xl text-center dark:text-white">
        Hello and Welcome 🙌&nbsp;
        <span className="whitespace-nowrap">
          I&apos;m <span className="font-bold" onClick={handleGoBack}>Sohaib</span>
        </span>
      </p>
      <Post />
    </main>
  )
}
