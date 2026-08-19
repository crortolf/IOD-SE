const express = require("express");
const router = express.Router();

router.get;

router.get("/add", (req, res) => {
  res.json({
    result: parseInt(req.query.num1) + parseInt(req.query.num2),
  });
});

router.get("/sub", (req, res) => {
  res.json({
    result: parseInt(req.query.num1) - parseInt(req.query.num2),
  });
});

router.get("/mult", (req, res) => {
  res.json({
    result: parseInt(req.query.num1) * parseInt(req.query.num2),
  });
});

router.get("/div", (req, res) => {
  res.json({
    result: parseInt(req.query.num1) / parseInt(req.query.num2),
  });
});

module.exports = router;
