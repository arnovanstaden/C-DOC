// Sorting

import dayjs from 'dayjs';

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
    if (value === undefined) return;
    // If value is a File object (for file inputs), append it directly
    if (value instanceof File) {
      formData.append(key, value);
    } else if (Array.isArray(value) && value.every(item => item instanceof File)) {
      // If value is an array of File objects, append each file separately
      value.forEach((file) => {
        formData.append(key, file);
      });
    } else if (typeof value === 'object') {
      formData.append(key, value);
    }
    else {
      // For other types of values, convert them to strings before appending
      formData.append(key, String(value));
    }
  });

  return formData;
};

export const formatDate = (date: string | Date): string => {
  return dayjs(date).format('ddd MMM D YYYY hh:mm');
};

export const camelCaseToTitleCase = (inputString: string) => {
  // Use regex to insert spaces before the capital letters
  const titleCaseString = inputString.replace(/([A-Z])/g, ' $1');

  // Capitalize the first letter and return the result
  return titleCaseString.charAt(0).toUpperCase() + titleCaseString.slice(1);
};
