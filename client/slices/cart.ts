import { createSlice, current, PayloadAction } from '@reduxjs/toolkit';

import { IProductsItem } from '@/interfaces/Products';
import { IAttributeSliceInfo } from './attribute';

interface ICartSliceInfo extends IProductsItem {
  selectedAttributes: IAttributeSliceInfo[];
  quantity: number;
}

interface ICartSlice {
  products: ICartSliceInfo[];
}

const initialState: ICartSlice = {
  products: []
};

/** 
{
  products: [{
    ...product,
    selectedAttributes: [{}],
    quantity: 1
  }],
}
**/

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProductToCart(state, action: PayloadAction<ICartSliceInfo>) {
      const payload = action.payload;
      const filteredItems = state.products.filter(product => {
        if (product._id !== action.payload._id) {
          return product;
        } else {
          return product.selectedAttributes.map(attribute => {
            return action.payload.selectedAttributes.map(newAttr => {
              if (attribute.attributeId === newAttr.attributeId) {
                if (
                  attribute.attributeType === 'textarea' ||
                  attribute.attributeType === 'input'
                ) {
                  if (attribute.texts === newAttr.texts) {
                    return product;
                  }
                } else {
                  attribute.selecteds?.map(s => {
                    newAttr.selecteds?.map(ns => {
                      if (s === ns) {
                        return product;
                      } else {
                        return false;
                      }
                    });
                  });
                }
              }
            });
          });
        }
      });

      state.products = [...filteredItems, payload];
    },
    removeProductToCart(
      state,
      action: PayloadAction<{ product: IProductsItem; index: number }>
    ) {
      const filteredItems = state.products.filter(
        (product, i) =>
          i !== action.payload.index &&
          product._id !== action.payload.product._id
      );
      console.log(filteredItems);
      state.products = [...filteredItems];
    }
  }
});

export const actions = cartSlice.actions;
export default cartSlice.reducer;
