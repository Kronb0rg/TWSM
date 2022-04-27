const express = require("express");
const app = express();
const mongoose = require("mongoose");
const ProductModel = require("./models/Products");
const cors = require("cors");

app.use(express.json());
app.use(cors());

mongoose.connect(
  "mongodb+srv://kronb0rg:Hejmeddig1@reviewhub.0zkno.mongodb.net/reviewhubdata?retryWrites=true&w=majority"
);

app.get("/getProducts", (req, res) => {
  ProductModel.find({}, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});

app.post("/createProduct", async (req, res) => {
  const product = req.body;
  const newProduct = new ProductModel(product);
  await newProduct.save();
  res.json(product);
});

app.listen(3001, () => {
  console.log("SERVER RUNS");
});
