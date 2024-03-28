const resultElement = document.getElementById("result");

const firstNum = document.getElementById("input1");

const secondNum = document.getElementById("input2");

const submitBtn = document.getElementById("submit");

const plusBtn = document.getElementById("plus");
const minusBtn = document.getElementById("minus");

const multiplyBtn = document.getElementById("multiply");
const divideBtn = document.getElementById("divide");

const clearBtn = document.getElementById("clear");

let action = "";

function printResult(result) {
  if (result < 0) {
    resultElement.style.color = "red";
  } else {
    resultElement.style.color = "green";
  }
  resultElement.textContent = result;
}

function computeNumbersWithAction(inp1, inp2, actionSymbol) {
  const num1 = Number(inp1.value);
  const num2 = Number(inp2.value);

  if (num1 == " " || num2 == " ") {
    return "Введите оба числа";
  }

  if (actionSymbol == "+") {
    return num1 + num2;
  } else if (actionSymbol == "-") {
    return num1 - num2;
  }

  if (actionSymbol == "*") {
    return num1 * num2;
  } else if (actionSymbol == "/") {
    return num1 / num2;
  }
}

plusBtn.onclick = function () {
  action = "+";
  plusBtn.setAttribute("disabled", "true");
  minusBtn.removeAttribute("disabled", "true");
  multiplyBtn.removeAttribute("disabled", "true");
  divideBtn.removeAttribute("disabled", "true");
};

minusBtn.onclick = function () {
  action = "-";
  minusBtn.setAttribute("disabled", "true");
  plusBtn.removeAttribute("disabled", "true");
  multiplyBtn.removeAttribute("disabled", "true");
  divideBtn.removeAttribute("disabled", "true");
};
multiplyBtn.onclick = function () {
  action = "*";
  minusBtn.removeAttribute("disabled", "true");
  plusBtn.removeAttribute("disabled", "true");
  multiplyBtn.setAttribute("disabled", "true");
  divideBtn.removeAttribute("disabled", "true");
};
divideBtn.onclick = function () {
  action = "/";
  minusBtn.removeAttribute("disabled", "true");
  plusBtn.removeAttribute("disabled", "true");
  multiplyBtn.removeAttribute("disabled", "true");
  divideBtn.setAttribute("disabled", "true");
};

clearBtn.onclick = function () {
  firstNum.value = null;
  secondNum.value = null;
  resultElement.textContent = "0";
  resultElement.style.color = "black";
  plusBtn.removeAttribute("disabled", "true");
  minusBtn.removeAttribute("disabled", "true");
  multiplyBtn.removeAttribute("disabled", "true");
  divideBtn.removeAttribute("disabled", "true");
};

submitBtn.onclick = function () {
  const result = computeNumbersWithAction(input1, input2, action);
  printResult(result);
};
