let blockText = document.querySelectorAll('.cut-text');
let btn = document.querySelector('button');
let text = document.querySelector('p')

let colors = ['red', 'green', 'blue'];
let item = 0;

btn.addEventListener('click', cutWords);

function cutWords(e) {
  for (let item of blockText) {
    let str = item.textContent
    if (str.length > 10) {
      str = str.slice(0, 10);
      str += '...';
      item.innerText = str;
    }
  }
}

function changeColor(i) {
  text.setAttribute('style', `color: ${colors[item]}`);
  item++
  if (item === colors.length) item = 0
}
let interval = setInterval(changeColor, 1000);


