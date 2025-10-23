// src/index.ts

import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@as-integrations/express5';
import dotenv from 'dotenv';

import { typeDefs } from './graphql/schema.ts';
import { resolvers } from './graphql/resolvers.ts';
import { connectToMongoDB } from './db/mongo.ts'; // NEW

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = process.env.PORT || 4000;

  await connectToMongoDB(); //  Use MongoDB connection from separate file

  const server = new ApolloServer({ typeDefs, resolvers });
  await server.start();

  app.use(cors());
  app.use(express.json());
  app.use('/public', express.static(path.join(__dirname, '../public')));

  app.use('/graphql', expressMiddleware(server));

  app.listen(PORT, () => {
    console.log(`Server ready at http://localhost:${PORT}/graphql`);
  });
}

startServer().catch(console.error);
