import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IAttributeSliceInfo {
  attributeId: string | undefined;
  attributeType: 'radio' | 'checkbox' | 'input' | 'textarea' | 'select';
  selecteds?: string[];
  texts?: string | undefined;
  attributeTitle: string;
}

interface IAttributeSlice {
  attributes: IAttributeSliceInfo[];
}

const initialState: IAttributeSlice = {
  attributes: []
};

export const attributeSlice = createSlice({
  name: 'attribute',
  initialState,
  reducers: {
    addAttribute(state, action: PayloadAction<IAttributeSliceInfo>) {
      const relatedAttribute = state.attributes.filter(
        attribute => attribute.attributeId === action.payload.attributeId
      );
      relatedAttribute.length === 0 && state.attributes.push(action.payload);
    },
    removeAttribute(state, action: PayloadAction<IAttributeSliceInfo>) {
      state.attributes = state.attributes.filter(
        att => att.attributeId !== action.payload.attributeId
      );
    },
    changeAttributeById(state, action: PayloadAction<IAttributeSliceInfo>) {
      const deleted = state.attributes.filter(
        att => att.attributeId !== action.payload.attributeId
      );
      state.attributes = [...deleted, action.payload];
    }
  }
});

export const { addAttribute, removeAttribute, changeAttributeById } =
  attributeSlice.actions;
export default attributeSlice.reducer;
