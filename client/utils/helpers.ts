import { IProducts } from '@/interfaces/Products';
import { IReviewsItem } from '@/interfaces/Reviews';

export function toCapitalizeWord(word: string | undefined | string[]) {
  if (typeof word === 'undefined' || typeof word !== 'string') return;
  return word.charAt(0).toLocaleUpperCase() + word.slice(1);
}

export function calcDiscountPrice(price: number, discountAmount: number) {
  return (price * ((100 - discountAmount) / 100)).toFixed(2);
}

export function getRelatedManufacturerLength(
  products: IProducts,
  manufacturerId: string
) {
  return products.data.filter(
    product => product.manufacturer === manufacturerId
  ).length;
}

export function abb(string: string): string {
  let finalAbbreviation: string = '';
  string.split(' ').map(word => (finalAbbreviation += word.charAt(0)));

  return finalAbbreviation;
}
