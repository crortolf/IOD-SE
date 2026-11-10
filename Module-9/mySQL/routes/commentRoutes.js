let express = require("express");
let router = express.Router();
let Controllers = require("../controllers");

// Adds a GET route to return all comments
router.get("/", (req, res) => {
  Controllers.commentController.getComments(res);
});
// Adds a POST route to create a new comment
router.post("/create", (req, res) => {
  Controllers.commentController.createComment(req.body, res);
});
router.put("/:id", (req, res) => {
  Controllers.commentController.updateComment(req, res);
});
router.delete("/:id", (req, res) => {
  Controllers.commentController.deleteComment(req, res);
});

module.exports = router;
