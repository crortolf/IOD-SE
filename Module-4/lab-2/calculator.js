const leftOperand = document.getElementById("left-operand");
const operator = document.getElementById("operator");
const rightOperand = document.getElementById("right-operand");
let currentlyLeft = true;

const input = (buttonLabel) => {
  if (
    buttonLabel === "0" ||
    buttonLabel === "1" ||
    buttonLabel === "2" ||
    buttonLabel === "3" ||
    buttonLabel === "4" ||
    buttonLabel === "5" ||
    buttonLabel === "6" ||
    buttonLabel === "7" ||
    buttonLabel === "8" ||
    buttonLabel === "9"
  ) {
    if (currentlyLeft) leftOperand.textContent += buttonLabel;
    else rightOperand.textContent += buttonLabel;
  } else if (
    buttonLabel === "+" ||
    buttonLabel === "-" ||
    buttonLabel === "*" ||
    buttonLabel === "/"
  ) {
    operator.textContent = buttonLabel;
    currentlyLeft = false;
  } else {
    if (currentlyLeft) {
      leftOperand.textContent = "";
    } else {
      if (operator.textContent === "+")
        leftOperand.textContent =
          new Number(leftOperand.textContent) +
          new Number(rightOperand.textContent);
      if (operator.textContent === "-")
        leftOperand.textContent =
          new Number(leftOperand.textContent) -
          new Number(rightOperand.textContent);
      if (operator.textContent === "*")
        leftOperand.textContent = Math.floor(
          new Number(leftOperand.textContent) *
            new Number(rightOperand.textContent),
        );
      if (operator.textContent === "/")
        leftOperand.textContent = Math.floor(
          new Number(leftOperand.textContent) /
            new Number(rightOperand.textContent),
        );
      operator.textContent = "";
      rightOperand.textContent = "";
      currentlyLeft = true;
    }
  }
};
