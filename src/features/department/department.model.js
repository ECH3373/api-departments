import mongoose from 'mongoose';
import mongooseSequence from 'mongoose-sequence';

const schema = new mongoose.Schema({
  index: {
    type: Number,
    index: true,
    unique: [true, 'The provided inde" must be unique.'],
  },

  name: {
    type: String,
    trim: true,
    required: [true, 'The name is required'],
    unique: [true, 'The provided name must be unique.'],
  },

  description: {
    type: String,
    trim: true,
  },
});

const AutoIncrement = mongooseSequence(mongoose);
schema.plugin(AutoIncrement, { inc_field: 'index' });

export const model = mongoose.model('Department', schema);
