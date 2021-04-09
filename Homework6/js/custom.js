var letters = ['a', 'b', 'c'];
var numbers = [1, 2, 3];
var mix = letters.concat(numbers);
console.log('Новый объедененный массив mix --> ', mix);

numbersReverse = numbers.reverse();
console.log('Отсортированный наоборот массив numbers --> ', numbersReverse);

var numbersTwo = [3, 4, 1, 2, 7];
numbersTwoSort = numbersTwo.sort();
console.log('Отсортированный массив numbersTwo --> ', numbersTwoSort);

numbersTwoFilt = numbersTwo.filter(numbersTwo => numbersTwo % 2 == 0);
console.log('Отфильтрованный массив (Только четные) numbersTwo --> ', numbersTwoFilt);


