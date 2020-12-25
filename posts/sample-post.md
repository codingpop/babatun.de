---
title: 'Just a sample post'
date: '2020-01-01'
summary: 'This is just a sample post.'
banner: 'https://images.unsplash.com/photo-1605142811451-57f690e06dc7?ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80'
tags: 'react,next,ssr'
---

Next.js has two forms of pre-rendering: **Static Generation** and **Server-side Rendering**. The difference is in **when** it generates the HTML for a page.

- **Static Generation** is the pre-rendering method that generates the HTML at **build time**. The pre-rendered HTML is then _reused_ on each request.
- **Server-side Rendering** is the pre-rendering method that generates the HTML on **each request**.

Importantly, Next.js lets you **choose** which pre-rendering form to use for each page. You can create a "hybrid" Next.js app by using Static Generation for most pages and using Server-side Rendering for others.
