const cors = require("cors");

const allowedOrigins = [
  "http://localhost:5173",  // local frontend
  "https://tanveer-portfolio-client.vercel.app"  // deployed frontend
];

const corsOptions = {
  origin: allowedOrigins,
  credentials: true,
};

module.exports = cors(corsOptions);
