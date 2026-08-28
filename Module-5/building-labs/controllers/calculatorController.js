const Calculator = require("../libraries/Calculator.js");
const calc = new Calculator();

const add = (num1, num2) => {
  return calc.add(parseInt(num1), parseInt(num2));
};

const sub = (num1, num2) => {
  return calc.sub(parseInt(num1), parseInt(num2));
};

const mult = (num1, num2) => {
  return calc.mult(parseInt(num1), parseInt(num2));
};

const div = (num1, num2) => {
  return calc.div(parseInt(num1), parseInt(num2));
};

module.exports = {
  add,
  sub,
  mult,
  div,
};
