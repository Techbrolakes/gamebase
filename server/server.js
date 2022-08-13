const express = require("express");
const dotenv = require("dotenv").config();
const mongoose = require("mongoose");
const goalRoutes = require("./routes/goalRoutes");
const userRoutes = require("./routes/userRoutes");
// express
const app = express();

// middleware
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.method, req.path);
  next();
});

// routes
app.use("/api/goals", goalRoutes);
app.use("/api/users", userRoutes);

// Serve frontend
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/build")));

  app.get("*", (req, res) =>
    res.sendFile(
      path.resolve(__dirname, "../", "frontend", "build", "index.html")
    )
  );
} else {
  app.get("/", (req, res) => res.send("Please set to production"));
}

// connect to DB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Connected to the DB & Server Stated on ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log(`Hey Boss There is an error - ${error}`);
  });
