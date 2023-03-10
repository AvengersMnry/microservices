const express = require("express");
const app = express();
app.use(express.json());
// Declare orders as a global variable
const orders = [];

// Create GET request
app.get("/api/ping", (req, res) => {
  res.send("PONG");
});

// Create POST request for /api/shipping
app.post("/api/shipping", (req, res) => {
  // Send a response to the client + code status
  // Get the order ID and number of products from the request body
  const { orderId, nbProducts } = req.body;
  // Save the order details to memory or database
  // For example, you can store it in an array
  orders.push({ orderId, nbProducts });
  res.status(204).send("Order details saved successfully.");
});

// Initialize server
app.listen(3000, () => {
  console.log("Running on port 3000.");
});

module.exports = app;