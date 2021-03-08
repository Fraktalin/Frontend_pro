var elem = document.getElementById('elem');


function func(surname, name) {
  alert(this.value + ', ' + surname + ' ' + name);
};


var func = func.bind(elem);  //Тут напишите конструкцию с bind()


func('Иванов', 'Иван');  //тут должно вывести 'привет, Иванов Иван'
func('Петров', 'Петр'); //тут должно вывести 'привет, Петров Петр'  


//////////////////////


var elem = document.getElementById('elem');

function funcOne() {
  alert(this.value);
}

funcOne.call(elem); //тут должно вывести value инпута