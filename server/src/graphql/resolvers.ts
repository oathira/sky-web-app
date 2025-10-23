import { Show } from "../models/Show.ts";
import { Product } from "../models/ProductCard.ts";
import { HeroBanner } from "../models/HeroBanner.ts";

export const resolvers = {
  Query: {
    shows: async () => await Show.find(),
    products: async () => await Product.find(),
    heroBanner: async () => await HeroBanner.findOne(),
  },
//   addProducts: async (_: any, { products }: any) => {
//   try {
//     const inserted = await Product.insertMany(products);
//     return inserted;
//   } catch (error) {
//     console.error("Error inserting products:", error);
//     throw new Error("Failed to insert products");
//   }
// }
};
