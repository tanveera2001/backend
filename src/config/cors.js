const cors = require("cors");

const corsOptions = {
  origin: "https://frontend-theta-eight-12.vercel.app", // your Vercel frontend URL
  credentials: true,
};

module.exports = cors(corsOptions);
