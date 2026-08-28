class Logger {
  constructor() {}

  log(id, value) {
    console.log("Calculator " + id + " has calculated the value " + value);
  }
}

module.exports = Logger;
