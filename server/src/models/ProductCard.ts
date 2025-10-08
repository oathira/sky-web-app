import mongoose from 'mongoose';

const buttonSchema = new mongoose.Schema({
  text: String,
  variant: String,
});

const productSchema = new mongoose.Schema({
  title: String,
  subtitle: String,
  text: String,
  img: String,
  buttons: [buttonSchema],
});

export const Product = mongoose.model('Product', productSchema);
