// order of documentation categories

import { getCollection } from 'astro:content';

// if a category is not included in the array, it will be moved to the end
export const categoryOrder = [
  'start',
  'utils',
  'components',
  'plugins',
  'guides',
  'reference',
];

export const docPages = await getCollection('docs');

export function makeCategoryMap() {
  const categoryMap: Map<string, typeof docPages> = new Map();

  for (const docPage of docPages) {
    const [category] = docPage.id.split('/');

    const categoryPages = [...(categoryMap.get(category) || []), docPage];

    categoryMap.set(
      category,
      categoryPages
        .sort((a, b) => a.data.title.localeCompare(b.data.title))
        .sort((a, b) => {
          return (
            (a.data.order ?? categoryPages.length) -
            (b.data.order ?? categoryPages.length)
          );
        }),
    );
  }

  return categoryMap;
}

export function makeSortedCategoryEntries() {
  const categoryMap = makeCategoryMap();
  const categories = Array.from(categoryMap.entries()).sort(
    ([catA], [catB]) => {
      const indexA = categoryOrder.indexOf(catA);
      const indexB = categoryOrder.indexOf(catB);

      const inOrderA = indexA !== -1;
      const inOrderB = indexB !== -1;

      if (inOrderA && inOrderB) return indexA - indexB;
      if (inOrderA) return -1;
      if (inOrderB) return 1;
      return 0;
    },
  );

  return categories;
}
