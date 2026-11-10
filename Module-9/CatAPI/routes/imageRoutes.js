let express = require("express");
let router = express.Router();
let Controllers = require("../controllers");

// GET /api/images/search?limit=5&breed_ids=beng&has_breeds=1
router.get("/search", (req, res) => {
  Controllers.imageController.searchImages(req, res);
});
// GET /api/images/:id
router.get("/:id", (req, res) => {
  Controllers.imageController.getImage(req, res);
});

module.exports = router;
