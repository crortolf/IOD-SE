const express = require("express");
const app = express();
const userRoutes = require("./routes/userRoutes");
const likeRoutes = require("./routes/likeRoutes");
const postRoutes = require("./routes/postRoutes");
const commentRoutes = require("./routes/commentRoutes");
require("dotenv").config();
require("../dbConnect");

// parse requests of content-type - application/json
app.use(express.json());
app.use("/api/users", userRoutes);
app.use("/api/comments", commentRoutes);
app.use("/api/likes", likeRoutes);
app.use("/api/posts", postRoutes);
app.get("/", (req, res) => {
  res.json({ message: "Welcome to my MongoDB application." });
});
// set port, listen for requests
const PORT = 80;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
