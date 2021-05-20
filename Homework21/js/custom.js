let firstInput = document.querySelector('.first');
let secondInput = document.querySelector('.second');
let thirdInput = document.querySelector('.third');
let btnSum = document.querySelector('.buttonSum');
let inputSum = document.querySelector('.sum');
let focusInput = document.querySelector('.focus-input');
let pasteNum = document.querySelector('div');

btnSum.addEventListener('click', showSum)

firstInput.addEventListener('keypress', checkNum);
secondInput.addEventListener('keypress', checkNum);
thirdInput.addEventListener('keypress', checkNum);

function checkNum(e) {
  if (e.keyCode < 48 || e.keyCode > 57) {
    e.preventDefault();
  }
}

function showSum(e) {
  if (firstInput.value === '' || secondInput.value === '' || thirdInput.value === '') alert('Не все поля заполнены');
  else inputSum.value = +firstInput.value + +secondInput.value + +thirdInput.value;
}

focusInput.addEventListener('blur', sumOnBlur);
focusInput.addEventListener('keypress', checkNum);

function sumOnBlur(e) {
  if (focusInput.value){
    let inputNums = focusInput.value;
    let result =  inputNums.split('').reduce((partial_sum, a) => partial_sum + +a,0)
    let block = `${result} (${inputNums.split('').join('+')})`
    pasteNum.innerHTML = block
  }
  else pasteNum.innerHTML = ``
}