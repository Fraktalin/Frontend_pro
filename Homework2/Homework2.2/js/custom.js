var number1 = +prompt ('Введите первое число');
var number2 = +prompt ('Введите второе число');
if (number1>number2) {
  alert (number1 + '>'+ number2);
}
else if (number2>number1) {
  alert (number2 + '>' + number1);
}
else if (number1==number2) {
  alert ('Значения равны');
}
else {
  alert ('Вы ввели что то неправильно');
}
