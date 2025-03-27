import mongoose from 'mongoose';
import { v4 } from 'uuid';

const schema = new mongoose.Schema(
  {
    id: {
      type: String,
      default: v4,
      unique: true,
      index: true,
    },

    name: {
      type: String,
      trim: true,
      required: [true, 'the name is required'],
      unique: [true, 'the provided name must be unique'],
    },

    description: {
      type: String,
      trim: true,
    },
  },
  { versionKey: false },
);

export const model = mongoose.model('Department', schema);
