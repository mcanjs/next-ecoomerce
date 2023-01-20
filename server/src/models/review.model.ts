import { Review } from '@/interfaces/review.interface';
import mongoose, { Document, model, Schema } from 'mongoose';

const reviewSchema: Schema = new Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  productId: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
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

const reviewModel = model<Review & Document>('Review', reviewSchema);

export default reviewModel;
