import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { publishedPosts } from '../lib/posts';
export async function GET(context: { site: URL }) { const posts=publishedPosts(await getCollection('posts'));return rss({title:'Systems & Signals',description:"Varad's notes on technology, systems, AI, and lessons from the field.",site:context.site,items:posts.map(post=>({title:post.data.title,description:post.data.description,pubDate:post.data.publishedAt,link:`${import.meta.env.BASE_URL}blog/${post.data.slug}/`}))}); }
