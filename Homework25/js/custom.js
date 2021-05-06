let buttons = document.querySelectorAll('button');
let sections = document.querySelectorAll('section');
let userHeigth = document.querySelector('.heigth');
let rangeHeigth = document.querySelector('.range-heigth');
let imgActivity = document.querySelector('.activity');
let imgResult = document.querySelector('.result');
let rangeActivity = document.querySelector('.range-activity');
let rangeResult = document.querySelector('.range-result');
let pasteCalor = document.querySelector('.space');
let cutInput = document.querySelector('#current-weight');
let desInput = document.querySelector('#desired-weight');

cutInput.addEventListener('keypress', checkNum);
desInput.addEventListener('keypress', checkNum);
rangeResult.addEventListener('input', pasteImg);
rangeActivity.addEventListener('input', pasteImg);
rangeHeigth.addEventListener('input', showRange);

setingListener(buttons);

imgActivity.src = "./images/activity-run.jpg";
imgResult.src = "./images/type-medium.jpg";

let rangeValue = rangeHeigth.value;
userHeigth.innerText = rangeValue;

function setingListener(target) {
  for (let value of target) {
    value.addEventListener('click', changeBlock);
  }
}

function pasteImg(e) {
  let image = e.target.nextElementSibling;
  let result = e.target.value;
  if (e.target.className === 'range-activity') {
    switch (result) {
      case '0':
        image.src = "./images/activity-sit.jpg";
        break
      case '1':
        image.src = "./images/activity-walk.jpg";
        break
      case '2':
        image.src = "./images/activity-run.jpg";
        break
      case '3':
        image.src = "./images/activity-box.jpg";
        break
      default: image.src = "./images/activity-sit.jpg";
    }
  }
  else if (e.target.className === 'range-result') {
    switch (result) {
      case '1':
        image.src = "./images/type-small.jpg";
        break
      case '2':
        image.src = "./images/type-medium.jpg";
        break
      case '3':
        image.src = "./images/type-hard.jpg";
        break
      default: imgActivity.src = "./images/type-small.jpg";
    }
  }
}

function showRange(e) {
  rangeValue = rangeHeigth.value;
  userHeigth.innerText = rangeValue;
}

function checkNum(e) {
  if (e.keyCode < 48 || e.keyCode > 57) {
    e.preventDefault();
  }
}

function changeBlock(e) {
  let curButton = e.target.dataset.page;
  for (let sec of sections) {
    let curSec = sec.classList;
    if (curSec[0] == 'block_' + curButton) {
      curSec.remove("hide-block");
      curSec.add("active_block");
    }
    else {
      curSec.add("hide-block");
      curSec.remove("active_block");
    }
  }
}

pasteCalor.innerText = Math.round(Math.random() * 2000);