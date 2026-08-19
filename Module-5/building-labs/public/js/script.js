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
        leftOperand.textContent = fetch(
          `/calculator/add?num1=${leftOperand.textContent}&num2=${rightOperand.textContent}`,
        )
          .then((response) => response.json())
          .then((response) => {
            leftOperand.textContent = response.result;
          });
      if (operator.textContent === "-")
        leftOperand.textContent = fetch(
          `/calculator/sub?num1=${leftOperand.textContent}&num2=${rightOperand.textContent}`,
        )
          .then((response) => response.json())
          .then((response) => {
            leftOperand.textContent = response.result;
          });
      if (operator.textContent === "*")
        leftOperand.textContent = fetch(
          `/calculator/mult?num1=${leftOperand.textContent}&num2=${rightOperand.textContent}`,
        )
          .then((response) => response.json())
          .then((response) => {
            leftOperand.textContent = response.result;
          });
      if (operator.textContent === "/")
        leftOperand.textContent = fetch(
          `/calculator/div?num1=${leftOperand.textContent}&num2=${rightOperand.textContent}`,
        )
          .then((response) => {
            console.log(response);
            return response.json();
          })
          .then((data) => {
            leftOperand.textContent = data.result;
          });
      operator.textContent = "";
      rightOperand.textContent = "";
      currentlyLeft = true;
    }
  }
};
