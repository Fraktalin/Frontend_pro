let inputs = document.querySelectorAll('.cart_numb_item');

for (let item of inputs) {
  item.addEventListener('input', changeInputNext);
  item.addEventListener('keydown', changeInputBack);
  item.addEventListener('keypress', checkNum);
  item.addEventListener('input', setCookie);
}


function getCookie() {
  let obj = {};
  let arr = document.cookie.split(";");
  for (let i = 0; i < arr.length; i++) {
    let [name, value] = arr[i].split('=');
    obj[name.trim()] = value;
  }
  return obj;
}

alert('Пользуясь этим веб-сайтом, вы даете свое согласие на использование файлов cookies.');

if (document.cookie) {
  var currentCookie = getCookie();
}
else currentCookie = {
  card: "156158168161",
};

function autocomplete() {
  for (let i = 0; i < currentCookie.card.length; i++) {
    inputs[i].value = currentCookie.card[i];
  }
}
function setCookie() {
  currentCookie.card = currentCookie.card.split('');
  if (this.value === '') currentCookie.card[+this.attributes[0].value] = '?';
  else currentCookie.card[+this.attributes[0].value] = this.value;
  currentCookie.card = currentCookie.card.join('');
  document.cookie = `card=${currentCookie.card}`;
}

function changeInputNext() {
  if (this.value) this.nextElementSibling.focus();
}

function checkNum(e) {
  if (e.keyCode < 48 || e.keyCode > 57) {
    e.preventDefault();
  }
}

function changeInputBack(e) {
  if (e.keyCode === 8 && this.value.length === 0) {
    this.previousElementSibling.focus();
  }
}

autocomplete();