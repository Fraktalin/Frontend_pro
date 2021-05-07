var letters = 'aaa bbb ccc';
console.log("Строка-->", letters);
var lettersb = letters.substr(3, 4);
console.log("Вырезанно через 'substr'-->", lettersb);

var lettersb2 = letters.substring(3, 7);
console.log("Вырезанно через 'substring'-->", lettersb2);

var lettersb3 = letters.slice(3, 7);
console.log("Вырезанно через 'slice'-->", lettersb3);

console.log('///////////////////////////////////////////////////////////////|-< Задание № 2 >-|//////////////////////////////////////////////////////////////');


var words = 'я учу javascript!';
console.log("Строка -->", words);
var wordsUp = words.charAt(0).toUpperCase();
words = words.replace(words[0], wordsUp);
console.log("Строка с большой буквы -->", words);

console.log('///////////////////////////////////////////////////////////////|-< Задание № 3 >-|//////////////////////////////////////////////////////////////');


var sentence = 'var_test_text';
console.log("Дана строка -->", sentence);
var noUnderscore = [];
noUnderscore = sentence.split('_');
var newSentence = "";
for (var i = 0; i < noUnderscore.length; i++) {
  if (i == 0) {
    newSentence += noUnderscore[i];
  }
  else {
    var str;
    str = noUnderscore[i];
    var leterUp = str.charAt(0).toUpperCase();
    str = str.replace(str[0], leterUp);
    newSentence += str;
  }
}
console.log("Преобразованная строка -->", newSentence);

console.log('///////////////////////////////////////////////////////////////|-< Задание № 4 >-|//////////////////////////////////////////////////////////////');


function randomize(min, max) {
  var rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}

console.log(`Случайное число в диапазоне от 0 до 50 --->  ${randomize(0, 50)}`);