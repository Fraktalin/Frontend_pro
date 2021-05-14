var numbers = [-1, -12, 16, -4, -9, 9, 36, 0, 25, -29, 30];

var secondNumbers = [];
numbers.map(function (value) {
  if (value > 0) secondNumbers.push(value);
});

var rootNumbers = secondNumbers.map(function (value) {
  return Math.sqrt(value);
});
console.log('Дан массив: ', numbers);
console.log('Только положительные числа: ', secondNumbers);
console.log('Корень из этих чисел: ', rootNumbers);

console.log('///////////////////////////////////////////////////////////////|-< Задание № 2 >-|//////////////////////////////////////////////////////////////');

var sum = 0;
var i;
for (i = 0;; i++) {
  sum = numbers[i] + sum;
  if (sum > 10) break;
}
console.log('Дан массив: ', numbers);
console.log('сумма-->', sum );
console.log('сложено было', i+1,'первых элементов');