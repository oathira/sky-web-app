import mongoose from 'mongoose';

const showSchema = new mongoose.Schema({
  title: String,
  description: String,
  image: String,
});

export const Show = mongoose.model('Show', showSchema);
