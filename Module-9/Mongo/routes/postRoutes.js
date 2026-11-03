let express = require("express");
let router = express.Router();
let pC = require("../Mongo/controllers/postController");

// Adds a GET route to return all Posts
router.get("/", (req, res) => {
  pC.getPosts(res);
});
// Adds a POST route to create a new Post
router.post("/create", (req, res) => {
  pC.createPost(req.body, res);
});
router.put("/:id", (req, res) => {
  pC.updatePost(req, res);
});
router.delete("/:id", (req, res) => {
  pC.deletePost(req, res);
});

module.exports = router;
