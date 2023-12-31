import getFormattedDate from "@/lib/getFormattedDate";
import { getSortedPostData, getSortedPostsData } from "@/lib/posts"
import Link from "next/link";
import ReactMarkdown from 'react-markdown';
import { notFound } from "next/navigation"


export function generateStaticParams(){
    const posts = getSortedPostsData();

    return posts.map((post)=>{
        postId : post.id
    })
}

export function generateMetadata({ params }: { params: { postId: string } }) {
    const posts = getSortedPostsData()
    const { postId } = params;
    const post = posts.find((post) => postId === post.id)
    if (!post) {
        return {
            title: 'Post Not Found'
        }
    }
    return {
        title: post.title
    }
}

export default async function Post({ params }: { params: { postId: string } }) {
    const posts = getSortedPostsData()
    const { postId } = params;
    if (!posts.find((post) => postId === post.id)) {
        return notFound()
    }

    const { title, date, contentHtml } = await getSortedPostData(postId);
    const pubDate = getFormattedDate(date);
    return (
        <main
            className="px-6 prose prose-xl prose-slate
        dark:prose-invert mx-auto"
        >
            <h1 className="text-3xl mt-4 mb-0">{title}</h1>
            <p className="mt-0">{pubDate}</p>
            <article>
            <ReactMarkdown>{contentHtml}</ReactMarkdown>

                {/* <section dangerouslySetInnerHTML={{ __html: contentHtml }} /> */}
                <p>
                    <Link href="/">← Back to home</Link>
                </p>

            </article>
        </main>
    )
}
