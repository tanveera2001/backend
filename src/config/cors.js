const cors = require("cors");

const corsOptions = {
  origin: "https://tanveer-ahmed.vercel.app", // your Vercel frontend URL
  credentials: true,
};

module.exports = cors(corsOptions);
