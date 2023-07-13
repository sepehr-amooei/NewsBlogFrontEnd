export const category = [
  { _id: "5b21ca3eeb7f6fbccd471818", name: "Sport" },
  { _id: "5b21ca3eeb7f6fbccd471814", name: "Movie" },
  { _id: "5b21ca3eeb7f6fbccd471820", name: "Celebrity" },
];

export function getCategory() {
  return category.filter((c) => c);
}
