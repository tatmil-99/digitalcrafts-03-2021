function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

function calculate(str, num1, num2) {
  let output = ""
  if (str.toLowerCase() === "add") {
    output = `You chose ${str}, your answer is ${add(num1, num2)}.`;
  }
  else if (str.toLowerCase() === "subtract") {
    output = `You chose ${str}, your answer is ${subtract(num1, num2)}.`;
  }
  else if (str.toLowerCase() === "multiply") {
    output = `You chose ${str}, your answer is ${multiply(num1, num2)}.`;
  }
  else if (str.toLowerCase() === "divide") {
    output = `You chose ${str}, your answer is ${divide(num1, num2)}.`;
  }
  else {
    output = "Something went wrong, please re-enter your arguments."
  }
  return output;
}

console.log(calculate("adD", 10, 5));
console.log(calculate("subtRact", 10, 5));
console.log(calculate("MULTIPLY", 10, 5));
console.log(calculate("divide", 10, 5));

