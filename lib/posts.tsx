import fs from 'fs'
import path from "path"
import matter from "gray-matter"
import { remark } from 'remark'
import html from 'remark-html'

const postDirectory = path.join(process.cwd(), 'blogposts')

export function getSortedPostsData() {

    const fileNames = fs.readdirSync(postDirectory);
    const allPostsData = fileNames.map((fileName) => {
        const id = fileName.replace(/\.md$/, '');

        const fullPath = path.join(postDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        const matterResult = matter(fileContents);

        const blogPost: BlogPost = {
            id,
            title: matterResult.data.title,
            date: matterResult.data.date
        }

        return blogPost
    });

    return allPostsData.sort((a, b) => a.date < b.date ? 1 : -1);
}

export async function getSortedPostData(id: string) {

    const fullPath = path.join(postDirectory, `${id}.md`);
    const fileContent = fs.readFileSync(fullPath, 'utf8');

    const matterResult = matter(fileContent);

    const processedContent = await remark().use(html).process(matterResult.content)
    
    const contentHtml =  processedContent.toString();

    const blogPostWithHTML : BlogPost & {contentHtml : string} = {
        id,
        title: matterResult.data.title,
        date: matterResult.data.date,
        contentHtml,
    }
   return blogPostWithHTML;
}