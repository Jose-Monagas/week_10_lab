require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const jsxEngine = require("jsx-view-engine");
const PORT = process.env.PORT || 4000;
const Vegetable = require("./models/vegetable");
const app = express();

// middleware
app.use(express.urlencoded({ extended: true })); // build a ssr website

// create view engine
app.set("view engine", "jsx");
app.engine("jsx", jsxEngine());

// set up out mongodb connection
mongoose.connect(process.env.MONGO_URI);
mongoose.connection.once("open", () => {
  console.log("connected to mongodb");
});

/* Create routes */

// Index
// show all the vegetables
app.get("/vegetables", async (req, res) => {
  try {
    const foundVegetables = await Vegetable.find({});
    res.render("vegetables/Index", {
      vegetables: foundVegetables,
    });
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});

// Show

// New

app.listen(PORT, () => {
  console.log(`the port at ${PORT} is listening`);
});
