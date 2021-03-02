var age = +prompt ('Привет, сколько тебе лет?');
var smoke  = confirm ('Нажми "ОК", если куришь, и "Отмена", если не куришь');

if (age<18 && smoke==true) {
  alert ('Маме расскажу');
}
else if (age<18 && smoke==false) {
  alert ('Так держать!');
}
else if (age>=18 && smoke==true) {
  alert ('Ну и зря');
}
else if (age>=18 && smoke==false) {
  alert ('Молодец, и не надо');
}
else {
  alert ('Введено неверное значение')
}