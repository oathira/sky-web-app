// src/graphql/mongo.ts
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

export async function connectToMongoDB() {
  const mongoURL = process.env.MONGODB_URL;
  if (!mongoURL) {
    console.error('Missing MONGODB_URL in .env');
    process.exit(1);
  }
  try {
    await mongoose.connect(mongoURL);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting MongoDB:', error);
    process.exit(1);
  }
}

export async function disconnectFromMongoDB() {
  await mongoose.disconnect();
  console.log('Disconnected MongoDB');
}


