export default function sortData(sortThis) {
  return sortThis.sort((a, b) =>
    a.state > b.state ? 1 : b.state > a.state ? -1 : 0
  );
}
