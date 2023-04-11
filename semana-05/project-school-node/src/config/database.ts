import mongoose from "mongoose";
import * as dotenv from "dotenv";

const databaseUrl =
  process.env.DATABASE_URL || "mongodb://localhost:27017/schoolNode";

export default mongoose.connect(databaseUrl);
