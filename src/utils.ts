const getImageUrl = (path: string): string => new URL(path, import.meta.url).href;

export { getImageUrl };
