// ┌──────────────────────────────────────────────────────────────────┐
// │ How to add a new blog post:                                      │
// │                                                                  │
// │  1. Create a new file under `src/posts/`, e.g.                   │
// │     `src/posts/my-new-post.md`                                   │
// │                                                                  │
// │  2. Add frontmatter at the top (between --- fences):             │
// │     ---                                                          │
// │     title: My new post                                           │
// │     date: 2026-05-01                                             │
// │     excerpt: One-line hook that shows up on the list page.       │
// │     tags: [engineering, notes]                                   │
// │     readTime: 4 min read   # optional, auto-estimated otherwise  │
// │     ---                                                          │
// │                                                                  │
// │  3. Write the body in Markdown below the frontmatter.            │
// │     Supported: paragraphs, lists (- item), **bold**, *italic*,   │
// │     `inline code`, and ## / ### headings.                        │
// │                                                                  │
// │  4. Save. The file name (minus `.md`) becomes the URL slug:      │
// │     `/blog/my-new-post`                                          │
// │                                                                  │
// │  Posts are sorted newest-first by the `date` field.              │
// └──────────────────────────────────────────────────────────────────┘

import { parseFrontmatter, slugFromPath } from '../utils/frontmatter.tsx';

export type BlogPost = {
  content: string;
  date: string;
  excerpt: string;
  readTime: string;
  slug: string;
  tags: string[];
  title: string;
};

// Vite eagerly inlines all .md files at build time as raw strings.
const files = import.meta.glob('../posts/*.md', {
  eager: true,
  import: 'default',
  query: '?raw',
}) as Record<string, string>;

const estimateReadTime = (text: string): string => {
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.round(words / 200));
  return `${minutes} min read`;
};

const asString = (v: string | string[] | undefined): string | undefined =>
  typeof v === 'string' ? v : undefined;

const asStringArray = (v: string | string[] | undefined): string[] =>
  Array.isArray(v) ? v : [];

export const blogPosts: BlogPost[] = Object.entries(files)
  .map(([path, raw]): BlogPost => {
    const { content, data } = parseFrontmatter(raw);
    const fallbackSlug = slugFromPath(path);
    const trimmedContent = content.trim();
    const firstParagraph =
      trimmedContent.split(/\n\n+/)[0]?.replace(/\s+/g, ' ').trim() ?? '';

    return {
      content: trimmedContent,
      date: asString(data.date) ?? '1970-01-01',
      excerpt: asString(data.excerpt) ?? firstParagraph.slice(0, 180),
      readTime: asString(data.readTime) ?? estimateReadTime(trimmedContent),
      slug: asString(data.slug) ?? fallbackSlug,
      tags: asStringArray(data.tags),
      title: asString(data.title) ?? fallbackSlug,
    };
  })
  .sort((a, b) => (a.date < b.date ? 1 : -1));
