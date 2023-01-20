import { Product } from '@/interfaces/products.interface';
import mongoose, { Document, model, Schema } from 'mongoose';

const productSchema: Schema = new Schema({
  manufacturer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Manufacturer',
    required: true,
  },
  category: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Category',
      required: true,
    },
  ],
  reviews: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Review',
    },
  ],
  attributes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Attribute',
    },
  ],
  description: {
    type: String,
    required: true,
  },
  discountPercentage: {
    type: Number,
    default: 0,
  },
  images: [
    {
      type: String,
      required: true,
    },
  ],
  price: {
    type: Number,
    default: 0,
  },
  stock: {
    type: Number,
    default: 0,
  },
  thumbnail: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  alt: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    required: true,
  },
  sku: {
    type: String,
    default: Number(Math.random() * 9999999999).toFixed(0),
    unique: true,
  },
  isGiftCodeUsable: {
    type: Boolean,
    default: true,
  },
  isPublished: {
    type: Boolean,
    default: true,
  },
  rating: {
    type: Number,
    default: 0,
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

const productModel = model<Product & Document>('Product', productSchema);

export default productModel;
