/** Public asset path with Vite `base` (GitHub Pages subpath) support. */
export function assetUrl(path: string): string {
  if (/^https?:\/\//.test(path)) {
    return path
  }
  const normalized = path.startsWith('/') ? path.slice(1) : path
  return `${import.meta.env.BASE_URL}${normalized}`
}
