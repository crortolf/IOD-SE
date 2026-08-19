const express = require("express");
const router = express.Router();
const {
  add,
  sub,
  mult,
  div,
} = require("../controllers/calculatorController.js");

router.get;

router.get("/add", (req, res) => {
  res.json({
    result: add(req.query.num1, req.query.num2),
  });
});

router.get("/sub", (req, res) => {
  res.json({
    result: sub(req.query.num1, req.query.num2),
  });
});

router.get("/mult", (req, res) => {
  res.json({
    result: mult(req.query.num1, req.query.num2),
  });
});

router.get("/div", (req, res) => {
  res.json({
    result: div(req.query.num1, req.query.num2),
  });
});

module.exports = router;
