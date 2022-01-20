const express = require("express");

const app = express();

app.use(express.json());



const productController = require("./Controllers/productsController");


app.use("/products",productController)



module.exports = app;
