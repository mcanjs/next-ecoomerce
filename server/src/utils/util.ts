/**
 * @method isEmpty
 * @param {String | Number | Object} value
 * @returns {Boolean} true & false
 * @description this value is Empty Check
 */
export const isEmpty = (value: string | number | object): boolean => {
  if (value === null) {
    return true;
  } else if (typeof value !== 'number' && value === '') {
    return true;
  } else if (typeof value === 'undefined' || value === undefined) {
    return true;
  } else if (value !== null && typeof value === 'object' && !Object.keys(value).length) {
    return true;
  } else {
    return false;
  }
};

export const generateSKU = (title: string): string => {
  let topLevelIdentifier = '';

  for (let i = 0; i < title.split(' ').length; i += 1) {
    topLevelIdentifier += title.split(' ')[i].charAt(0).toUpperCase();
  }

  const yearIdentifier = Number(new Date().getFullYear().toString().substring(2));
  const randomIdentifier = Number(Math.random() * 999999).toFixed(0);
  return `SKU-${topLevelIdentifier}-${yearIdentifier}-${randomIdentifier}`;
};

export const escapeRegex = (text: string): string => {
  return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
};
