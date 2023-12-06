const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Wlecome to my server");
});

app.get("/products", (req, res) => {
  res.send({
    products: [
      { id: 1, title: "product 1", price: 100 },
      { id: 2, title: "product 2", price: 200 },
      { id: 3, title: "product 3", price: 300 },
      { id: 4, title: "product 4", price: 400 },
    ],
  });
});

app.listen(3003, () => {
  console.log("Server is running at http://localhost:3003");
});
