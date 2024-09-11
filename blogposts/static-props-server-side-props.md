---
title: 'When to Use getStaticProps vs. getServerSideProps'
date: '2024-09-10'
---

We recommend using **getStaticProps** when you can pre-render your page at build time. This will generate static pages that can be cached by a CDN and served quickly, resulting in faster load times and better scalability.

You should use **getStaticProps** when:

- The data required to render the page does not change frequently
- The content can be generated during the build process and served statically
- You want optimal performance for SEO, as pre-rendered pages are fast and search engine friendly

Some common use cases for **getStaticProps** include:

- Blog posts
- Product listings
- Documentation pages

On the other hand, use **getServerSideProps** when your page requires dynamic data that changes on every request. This approach is slower than static generation, but it ensures that the page content is always up-to-date.

You should use **getServerSideProps** when:

- The page content depends on real-time data
- You need to fetch personalized content for a user (e.g., a dashboard)
- Data changes frequently and cannot be cached

In summary, if you can pre-render your content at build time, **getStaticProps** will provide better performance. If the content must be generated dynamically on each request, use **getServerSideProps**.