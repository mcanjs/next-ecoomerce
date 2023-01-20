import { Manufacturer } from '@/interfaces/manufacturer.interface';
import { Document, model, Schema } from 'mongoose';

const manufacturerSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  image: {
    type: String,
    required: false,
  },
  alt: {
    type: String,
    required: false,
  },
  slug: {
    type: String,
    required: true,
    unique: true,
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

const manufacturerModel = model<Manufacturer & Document>('Manufacturer', manufacturerSchema);

export default manufacturerModel;
