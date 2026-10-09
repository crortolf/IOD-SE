const express = require("express");
const app = express();
const userRoutes = require("./routes/userRoutes");
require("dotenv").config();
require("./dbConnect");

// parse requests of content-type - application/json
app.use(express.json());
app.use("/api/users", userRoutes);
app.get("/", (req, res) => {
  res.json({ message: "Welcome to my MongoDB application." });
});
// set port, listen for requests
const PORT = 80;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
