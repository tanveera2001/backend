// Load environment variables from .env
require('dotenv').config();

const mongoose = require("mongoose");

const connectDatabase = async (options = {}) => {
  try {
    await mongoose.connect(process.env.MONGODB_ATLAS_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      ...options
    });
    console.log("✅ Successfully connected to the MongoDB database.");

    mongoose.connection.on("error", (error) => {
      console.error("⚠️ Runtime MongoDB connection error:", error.toString());
    });
  } catch (error) {
    console.error("❌ Failed to connect to the MongoDB database:", error.toString());
  }
};

module.exports = connectDatabase;
