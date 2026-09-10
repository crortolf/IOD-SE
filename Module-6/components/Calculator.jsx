import { useState } from "react";

function Calculator() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [operator, setOperator] = useState("");
  const [inputNum1, setInputNum1] = useState(true);

  const numInput = (s) => {
    if (inputNum1) setNum1(num1 + s);
    else setNum2(num2 + s);
  };

  const opInput = (s) => {
    setOperator(s);
    setInputNum1(false);
  };

  const calc = () => {
    if (inputNum1) setNum1("");
    else {
      let result;
      switch (operator) {
        case "+":
          result = Number.parseInt(num1) + Number.parseInt(num2);
          break;
        case "-":
          result = Number.parseInt(num1) - Number.parseInt(num2);
          break;
        case "*":
          result = Number.parseInt(num1) * Number.parseInt(num2);
          break;
        case "/":
          result = Number.parseInt(num1) / Number.parseInt(num2);
          break;
      }
      setNum1(result + "");
      setNum2("");
      setOperator("");
      setInputNum1(true);
    }
  };

  return (
    <>
      <p style={{ height: "30px" }}>{num1 + operator + num2}</p>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button style={{ color: "black" }} onClick={() => numInput(8)}>
          8
        </button>
        <button style={{ color: "black" }} onClick={() => numInput(9)}>
          9
        </button>
        <button style={{ color: "black" }} onClick={() => opInput("+")}>
          +
        </button>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button style={{ color: "black" }} onClick={() => numInput(6)}>
          6
        </button>
        <button style={{ color: "black" }} onClick={() => numInput(7)}>
          7
        </button>
        <button style={{ color: "black" }} onClick={() => opInput("-")}>
          -
        </button>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <br />
        <button style={{ color: "black" }} onClick={() => numInput(4)}>
          4
        </button>
        <button style={{ color: "black" }} onClick={() => numInput(5)}>
          5
        </button>
        <button style={{ color: "black" }} onClick={() => opInput("*")}>
          *
        </button>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button style={{ color: "black" }} onClick={() => numInput(2)}>
          2
        </button>
        <button style={{ color: "black" }} onClick={() => numInput(3)}>
          3
        </button>
        <button style={{ color: "black" }} onClick={() => opInput("/")}>
          /
        </button>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button style={{ color: "black" }} onClick={() => numInput(0)}>
          0
        </button>
        <button style={{ color: "black" }} onClick={() => numInput(1)}>
          1
        </button>
        <button style={{ color: "black" }} onClick={() => calc()}>
          =
        </button>
      </div>
    </>
  );
}

export default Calculator;
