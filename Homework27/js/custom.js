let blockText = document.querySelectorAll('.cut-text');
let btn = document.querySelector('button');
let text = document.querySelector('p')

let colors = ['red', 'green', 'blue'];
let item = 0;

btn.addEventListener('click', cutWords);

function cutWords() {
  for (let item of blockText) {
    item.innerText = item.textContent.slice(0, 10) + '...';
  }
}

function changeColor() {
  text.setAttribute('style', `color: ${colors[item]}`);
  item++
  if (item === colors.length) item = 0
}
let interval = setInterval(changeColor, 1000);


