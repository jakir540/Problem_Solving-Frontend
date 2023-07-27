//Task 5: Implement a simple JavaScript calculator. The calculator should take two numbers and an operator (+, -, *, /) as input and return the result of the operation.

const Calculator = (num1, num2, operator) => {
  switch (operator) {
    case "+":
      return num1 + num2;
      break;
    case "-":
      return num1 - num2;
      break;
    case "*":
      return num1 * num2;
      break;
    case "/":
      return num1 / num2;
      break;

    default:
      return "invalid operator";
      break;
  }
};

const result = Calculator(10, 20, "+");
console.log(result);
