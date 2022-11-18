const numberOne = +prompt("Введите первое число", "");
const numberTwo = +prompt("Введите второе число", "");
const arithmeticOperation = prompt(
  "Введите арифметическую операцияю (+, -, /, *)"
);
if (arithmeticOperation === "+") {
  alert(numberOne + numberTwo);
} else if (arithmeticOperation === "-") {
  alert(numberOne - numberTwo);
} else if (arithmeticOperation === "/") {
  if (numberTwo === 0) {
    alert("Делить на 0 нельзя");
  } else {
    alert(numberOne / numberTwo);
  }
} else if (arithmeticOperation === "*") {
  alert(numberOne * numberTwo);
} else {
  alert("Вы ввели не правильную арифметическую операцию");
}
