export default function generateKeyFromArrayOfObjectWithIds(idCollection) {
  if (!idCollection) return 'no-data';
  const ids = idCollection.map(item => item.id);
  ids.sort();
  return ids.join('_');
}
