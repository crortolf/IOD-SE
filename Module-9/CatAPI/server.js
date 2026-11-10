require("dotenv").config();
const express = require("express");
const app = express();
const imageRoutes = require("./routes/imageRoutes");

// parse requests of content-type - application/json
app.use(express.json());
app.use("/api/images", imageRoutes);
app.get("/", (req, res) => {
  res.json({ message: "Welcome to my Cat API application." });
});
// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
