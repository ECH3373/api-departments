import mongoose from 'mongoose';
import mongooseSequence from 'mongoose-sequence';

const schema = new mongoose.Schema({
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
});

const AutoIncrement = mongooseSequence(mongoose);
schema.plugin(AutoIncrement, { inc_field: 'index' });

export const model = mongoose.model('Department', schema);
