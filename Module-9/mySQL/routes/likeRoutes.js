let express = require("express");
let router = express.Router();
let Controllers = require("../controllers");

// Adds a GET route to return all likes
router.get("/", (req, res) => {
  Controllers.likeController.getLikes(res);
});
// Adds a POST route to create a new like
router.post("/create", (req, res) => {
  Controllers.likeController.createLike(req.body, res);
});
router.delete("/:id", (req, res) => {
  Controllers.likeController.deleteLike(req, res);
});

module.exports = router;
