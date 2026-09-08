const express = require("express");
const router = express.Router();
const { fetchItems } = require("../controllers/storeController.js");

router.get("/", fetchItems);

module.exports = router;
