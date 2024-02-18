// Sorting

export const sortProducts = (array: any[], key: string) => {
  const sortedProducts = array.sort(function (a, b) {
    if (a[key] < b[key]) { return -1; }
    if (a[key] > b[key]) { return 1; }
    return 0;
  })
  return sortedProducts
}

