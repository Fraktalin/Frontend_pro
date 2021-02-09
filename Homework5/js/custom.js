var letters = ['a', 'b', 'c'];
var mainNumbers = letters.push('1', '2', '3');
console.log('Добавляем в конец массива--> ', letters);

var secondNumbers = ['1', '2', '3'];
var thirdNumbers = secondNumbers.unshift('4', '5', '6');
console.log('Добавляем в начало массива--> ', secondNumbers);

var technology = ['js', 'css', 'jq'];
console.log('Превый элемент массива--> ', technology[0]);
console.log('Последний элемент массива--> ', technology[technology.length - 1]);

var furthNumbers = [1, 2, 3, 4, 5];
var fifthNumbers = furthNumbers.slice(0, 3);
console.log('Скопированы первые три элемента в новый массив--> ', fifthNumbers);