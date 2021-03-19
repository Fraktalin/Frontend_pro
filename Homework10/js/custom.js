const secret = {
  "!": [17],
  " ": [5, 10],
  "e": [1, 15],
  "o": [4, 8],
  "h": [0],
  "l": [2, 3, 13, 14, 16],
  "f": [6],
  "r": [7],
  "m": [9],
  "H": [11],
  "i": [12],
}

function decryption(sentence) {

  var objKey = Object.keys(sentence);
  var objVal = Object.values(sentence);
  var newArr = [];
  var len = objVal.length;

  for (var j = 0; j < len; j++) {
    if (objVal[j].length > 1) {
      for (var i = 0; i < objVal[j].length; i++) {
        newArr[objVal[j][i]] = objKey[j];
      }
    }
    else newArr[objVal[j]] = objKey[j];
  }
  newArr = newArr.join('');
  document.write(`Зашифрованное предложение : ${objKey} </br> Расшиврованное предложение : ${newArr}`);
  return newArr
}

decryption(secret);
