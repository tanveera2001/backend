require('dotenv').config();
const app = require("./app");
const connectDatabase = require("./config/db");

// Start the server
app.listen(process.env.SERVER_PORT, async () => {
  try {
    await connectDatabase();
    console.log(`Server is running at: http://localhost:${process.env.SERVER_PORT}`);
  } catch (error) {
    console.error("Failed to connect to the database:", error);
    process.exit(1);
  }
});
