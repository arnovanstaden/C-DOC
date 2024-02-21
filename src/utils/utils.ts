// Sorting

export const sortProducts = (array: any[], key: string) => {
  const sortedProducts = array.sort(function (a, b) {
    if (a[key] < b[key]) { return -1; }
    if (a[key] > b[key]) { return 1; }
    return 0;
  });
  return sortedProducts;
};


export const convertToFormData = (data: object): FormData => {
  const formData = new FormData();

  // Iterate over the data object and append each field and its value to FormData
  Object.entries(data).forEach(([key, value]) => {
    // If value is a File object (for file inputs), append it directly
    if (value instanceof File) {
      formData.append(key, value);
    } else {
      // For other types of values, convert them to strings before appending
      formData.append(key, String(value));
    }
  });

  return formData;
};