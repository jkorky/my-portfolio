import type { CollectionEntry } from 'astro:content';

export type BlogCollectionEntry = CollectionEntry<'blog'>;

function getPostFileSlug(entry: BlogCollectionEntry): string {
  const segments = entry.slug.split('/').filter(Boolean);
  const fileName = segments[segments.length - 1];
  if (!fileName) {
    throw new Error(`Invalid blog entry slug (no file segment): ${entry.id}`);
  }
  return fileName;
}

export function uniqueSortedCategoryNames(entries: BlogCollectionEntry[]): string[] {
  const names = new Set<string>();
  for (const entry of entries) {
    names.add(entry.data.category);
  }
  return [...names].sort((left, right) => left.localeCompare(right));
}

export function comparePostsNewestFirst(
  left: BlogCollectionEntry,
  right: BlogCollectionEntry
): number {
  const leftTime = left.data.date.getTime();
  const rightTime = right.data.date.getTime();
  return rightTime - leftTime;
}

export function postsInCategorySortedNewestFirst(
  entries: BlogCollectionEntry[],
  categoryName: string
): BlogCollectionEntry[] {
  return entries
    .filter((entry) => entry.data.category === categoryName)
    .sort(comparePostsNewestFirst);
}

export function blogCategoryPath(category: string): string {
  return `/blog/${encodeURIComponent(category)}`;
}

export function blogPostPath(category: string, postFileSlug: string): string {
  return `/blog/${encodeURIComponent(category)}/${encodeURIComponent(postFileSlug)}`;
}

export function withBaseUrl(baseUrl: string, path: string): string {
  const normalizedBase = baseUrl.endsWith('/') ? baseUrl.slice(0, -1) : baseUrl;
  return `${normalizedBase}${path}`;
}

export function getCategoryIndexStaticPaths(entries: BlogCollectionEntry[]) {
  const categoryNames = uniqueSortedCategoryNames(entries);

  return categoryNames.map((categoryName) => ({
    params: { category: categoryName },
    props: {
      postsInCategory: postsInCategorySortedNewestFirst(entries, categoryName)
    }
  }));
}

export function getBlogPostDetailStaticPaths(entries: BlogCollectionEntry[]) {
  return entries.map((entry) => {
    const postFileSlug = getPostFileSlug(entry);
    return {
      params: {
        category: entry.data.category,
        slug: postFileSlug
      },
      props: { entry }
    };
  });
}

export { getPostFileSlug as getBlogPostFileSlug };
