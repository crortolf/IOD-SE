const Logger = require("./Logger.js");

class Calculator {
  constructor() {
    this.id = Math.random() * 1000000;
    this.messageLogger = new Logger();
  }
  #log = (value) => {
    this.messageLogger.log(this.id, value);
  };
  add(num1, num2) {
    const value = num1 + num2;
    this.#log(value);
    return value;
  }
  sub(num1, num2) {
    const value = num1 - num2;
    this.#log(value);
    return value;
  }
  mult(num1, num2) {
    const value = num1 * num2;
    this.#log(value);
    return value;
  }
  div(num1, num2) {
    const value = num1 / num2;
    this.#log(value);
    return value;
  }
}
module.exports = Calculator;
