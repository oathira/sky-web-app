import mongoose from 'mongoose';

const buttonSchema = new mongoose.Schema({
  text: String,
  variant: String,
});

const heroBannerSchema = new mongoose.Schema({
  image: String,
  subtitle: String,
  title: String,
  description: String,
  buttons: [buttonSchema],
});

export const HeroBanner = mongoose.model('HeroBanner', heroBannerSchema);
  