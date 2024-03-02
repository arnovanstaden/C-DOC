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
    } else if (typeof value === 'string')
      formData.append(key, String(value));
    else {
      // For other types of values, convert them to strings before appending
      formData.append(key, value);
    }
  });

  return formData;
};

/**
 * Converts FormData to a JavaScript object.
 * @param {FormData} formData - The FormData instance to convert.
 * @returns {T} - The JavaScript object representation of the FormData, typed as T.
 */
const formDataToObject = <T extends Record<string, any>>(formData: FormData): T => {
  const object = {} as T;
  formData.forEach((value, key) => {
    // Check if the object already contains the key, and ensure type safety with type assertion
    if (!Object.prototype.hasOwnProperty.call(object, key)) {
      object[key as keyof T] = value as any;
    } else {
      // Ensure we handle the case where the property is already an array
      if (!Array.isArray(object[key])) {
        object[key as keyof T] = [object[key]] as any;
      }
      (object[key] as any[]).push(value);
    }
  });
  return object;
};

export default formDataToObject;


export const formatDate = (date: string | Date): string => {
  return dayjs(date).format('ddd MMM D YYYY hh:mm');
};

export const camelCaseToTitleCase = (inputString: string) => {
  // Use regex to insert spaces before the capital letters
  const titleCaseString = inputString.replace(/([A-Z])/g, ' $1');

  // Capitalize the first letter and return the result
  return titleCaseString.charAt(0).toUpperCase() + titleCaseString.slice(1);
};

export const isOneLevelDeep = (obj: object): boolean => {
  if (typeof obj !== 'object' || obj === null) {
    return false; // Not an object
  }

  for (const key in obj) {
    if (obj.hasOwnProperty(key) && typeof obj[key] === 'object') {
      return false;
    }
  }

  return true;
};

/**
 * Compares two arrays and returns false if an item is missing in one of them.
 * @param arr1 The first array to be compared.
 * @param arr2 The second array to be compared.
 * @returns {boolean} Returns true if both arrays contain the same items, otherwise false.
 */
export const compareArrays = <T>(arr1: T[], arr2: T[]): boolean => {
  // Check if all elements in arr1 are in arr2
  for (const item of arr1) {
    if (!arr2.includes(item)) {
      return false;
    }
  }

  // Check if all elements in arr2 are in arr1
  for (const item of arr2) {
    if (!arr1.includes(item)) {
      return false;
    }
  }

  return true;
};