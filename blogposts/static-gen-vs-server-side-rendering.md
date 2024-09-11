---
title: 'When to Use Static Generation vs. Server-side Rendering'
date: '2024-09-10'
---

We recommend using **Static Generation** (with and without data) whenever possible because your pages can be pre-built and served via CDN, which significantly improves performance by reducing server load and decreasing load times for users.

You can use Static Generation for a variety of pages, including:

- Marketing landing pages
- Blog posts and articles
- Product catalogs for e-commerce
- Documentation and help sections

Ask yourself the question: **"Can this page be pre-rendered ahead of time?"** If the answer is **yes**, Static Generation is usually the best option. The page will load faster because it was pre-built once, and users will get the cached version instantly.

However, Static Generation is **not** suitable if the content of the page needs to change frequently or based on user-specific data (e.g., real-time data or user profiles). 

In that case, you should use **Server-side Rendering (SSR)**. SSR ensures that the page is generated on every request, giving you the most up-to-date content at the cost of slightly slower performance since the server has to render the page for each user request.

Or, you can skip both Static Generation and SSR by using **Client-side Rendering** for certain parts of your page, where data is fetched dynamically using JavaScript after the page loads.

### Key Differences

- **Static Generation (SSG):** Content is built once and served statically. Best for static content that doesn’t change frequently.
- **Server-side Rendering (SSR):** The server renders the page on each request. Best for frequently updated or dynamic content.
- **Client-side Rendering (CSR):** Data is fetched dynamically on the client, and content is rendered after the page has loaded. Best for parts of the page that don’t need SEO or are specific to the user session.

### Example

For a blog site, you might use Static Generation for the blog posts (as they don’t change often), while using Server-side Rendering for a comments section that shows real-time user comments on each request.
