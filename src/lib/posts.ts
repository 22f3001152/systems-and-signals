import type { CollectionEntry } from 'astro:content';

export type Post = CollectionEntry<'posts'>;

export const publishedPosts = (posts: Post[]) => [...posts]
  .filter((post) => !post.data.draft)
  .sort((a, b) => b.data.publishedAt.valueOf() - a.data.publishedAt.valueOf() || a.data.order - b.data.order);

export const postUrl = (slug: string) => `${import.meta.env.BASE_URL}blog/${slug}/`;
export const categorySlug = (category: string) => category.toLowerCase().replace(/\s+/g, '-');
export const categoryUrl = (category: string) => `${import.meta.env.BASE_URL}categories/${categorySlug(category)}/`;
export const formatDate = (date: Date) => new Intl.DateTimeFormat('en', { dateStyle: 'medium' }).format(date);
export const readingMinutes = (body = '') => Math.max(1, Math.ceil(body.trim().split(/\s+/).length / 220));
