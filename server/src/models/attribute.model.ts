import { Attribute } from '@/interfaces/attributes.interface';
import { Document, model, Schema } from 'mongoose';

const attributeSchema = new Schema({
  type: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  choices: [
    {
      type: String,
      required: true,
    },
  ],
  required: {
    type: Boolean,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

const attributeModel = model<Attribute & Document>('Attribute', attributeSchema);

export default attributeModel;
