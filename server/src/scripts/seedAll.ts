// scripts/seedAll.ts
import { connectToMongoDB, disconnectFromMongoDB } from '../db/mongo.ts';
import { Show } from '../models/Show.ts';
import { HeroBanner } from '../models/HeroBanner.ts';
import { Product } from '../models/ProductCard.ts';
import { showsData } from '../db/shows.ts';
import { heroBanner, productCards } from '../db/data.ts';

async function seedDatabase() {
  try {
    await connectToMongoDB();

    // Clear existing data
    await Show.deleteMany({});
    await HeroBanner.deleteMany({});
    await Product.deleteMany({});

    console.log('Cleared existing collections.');

    // Insert Shows
    await Show.insertMany(showsData);
    console.log('Inserted shows.');

    // Insert Hero Banner (only one)
    await HeroBanner.create(heroBanner);
    console.log('Inserted hero banner.');

    // Insert Product Cards
    await Product.insertMany(productCards);
    console.log('Inserted product cards.');

  } catch (error) {
    console.error('Seeding failed:', error);
  } finally {
    await disconnectFromMongoDB();
  }
}

seedDatabase();
