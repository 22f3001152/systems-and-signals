import { existsSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
const [slug, ...parts] = process.argv.slice(2);
if (!slug || !parts.length) { console.error('Usage: npm run new:post -- post-slug "Post title"'); process.exit(1); }
if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) { console.error('Slug must use lowercase letters, numbers, and hyphens.'); process.exit(1); }
const target=resolve('src/content/posts',`${slug}.md`);
if(existsSync(target)){console.error(`Already exists: ${target}`);process.exit(1);}
const title=parts.join(' ').replaceAll('"','\\"');
const date=new Date().toISOString().slice(0,10);
writeFileSync(target,`---
title: "${title}"
description: "Add a concise description."
slug: "${slug}"
publishedAt: ${date}
category: "Frameworks"
tags: []
cover: ../../assets/posts/architecture-map.svg
coverAlt: "Describe the cover image"
featured: false
order: 0
draft: true
---

Write your introduction here.
`);
console.log(`Created ${target}`);
