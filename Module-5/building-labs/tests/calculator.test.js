const {
  add,
  sub,
  mult,
  div,
} = require("../controllers/calculatorController.js");

test("adding 410 and 5390", () => {
  expect(add("410", "5390")).toBe(5800);
});

test("adding 51239 and 53", () => {
  expect(add("51239", "53")).toBe(51292);
});

test("subtracting 54 from 291", () => {
  expect(sub("291", "54")).toBe(237);
});

test("subtracting 102 from 39", () => {
  expect(sub("39", "102")).toBe(-63);
});

test("multiplying 231 and 23", () => {
  expect(mult("231", "23")).toBe(5313);
});

test("multiplying 491 and 37159", () => {
  expect(mult("491", "37159")).toBe(18245069);
});

test("dividing 406 by 7", () => {
  expect(div("406", "7")).toBe(58);
});

test("dividing 7 by 2", () => {
  expect(div("7", "2")).toBe(3.5);
});
