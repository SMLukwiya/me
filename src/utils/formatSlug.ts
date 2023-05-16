export function formatSlug(title: string) {
  const slug = title.toLowerCase().split(/[\s.]/).join("-");
  return slug;
}
