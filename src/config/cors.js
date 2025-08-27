require('dotenv').config(); // We must need this because we are using .env file's variable

const FRONTEND_URL = process.env.FRONTEND_URL;

const corsOptions = {
  origin: function (origin, callback) {
    if(!origin) return callback(null, true); // Postman has no origin. So when we request from postman this line allows it.
    if(origin == FRONTEND_URL) callback(null, true);
    else callback(new Error("Not allowed by CORS"));
  },
  credentials: true, // This is for allowing cookies
};

module.exports = cors(corsOptions);