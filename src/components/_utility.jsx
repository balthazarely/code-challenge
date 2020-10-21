export default function sortData(sortThis) {
  return sortThis.sort((a, b) =>
    a.name > b.name ? 1 : b.name > a.name ? -1 : 0
  );
}
