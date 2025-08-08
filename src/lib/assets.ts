export function asset(path: string): string {
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? '';
  // Ensure exactly one slash when joining
  if (!path.startsWith('/')) return `${base}/${path}`;
  return `${base}${path}`;
}
