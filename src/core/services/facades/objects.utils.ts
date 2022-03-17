export function sortArray<T>(data: T[], propertyToSort: keyof T): T[] {
  if(!Array.isArray(data)) return data;
  return [...data].sort((a, b) => {
    const aDate = new Date(a[propertyToSort] as any);
    const bDate = new Date(b[propertyToSort] as any);
    if (aDate < bDate) {
      return -1;
    }
    if (aDate > bDate) {
      return 1;
    }
    return 0;
  });
}
