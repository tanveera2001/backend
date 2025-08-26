
const express = require("express");
const morgan = require("morgan");


const customCors = require("./config/cors");
const seedRouter = require("./routers/seedRouter");
const projectRouter = require("./routers/projectRouter");







const app = express();


// Global Middlewares
app.use(customCors);
app.use(morgan("dev"));



// 📁 Public Static Files



// API Routes
app.use("/api/seed", seedRouter);
app.use("/api/projects", projectRouter);

app.get("/", (req, res)=>{
	res.send("Congratulations! You did it.");
});

// Global error handler
app.use((err, req, res, next) => {
  console.error("🚨 Server Error:", err);
  res.status(500).json({
    message: "Internal Server Error",
    error: err.message // remove in production
  });
});


// Export App
module.exports = app;
