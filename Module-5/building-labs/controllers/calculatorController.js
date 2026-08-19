const add = (num1, num2) => {
  return parseInt(num1) + parseInt(num2);
};

const sub = (num1, num2) => {
  return parseInt(num1) - parseInt(num2);
};

const mult = (num1, num2) => {
  return parseInt(num1) * parseInt(num2);
};

const div = (num1, num2) => {
  return parseInt(num1) / parseInt(num2);
};

module.exports = {
  add,
  sub,
  mult,
  div,
};
