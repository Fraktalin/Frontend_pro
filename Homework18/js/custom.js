let closeBtn = document.querySelector('.sale-popup-close');
let buyBtn = document.querySelector('.sale-popup-buy');
let endSale = document.querySelector('.endSalesDay').textContent;
let timerSale = document.querySelector('.timerSale');
let block = document.querySelector('.modal');

endSale = endSale.split('.').reverse().join('.');

endSale = new Date(endSale);

setInterval(function () {
  let curDate = new Date();
  let diff = endSale - curDate;
  if (diff < 0) {
    let timerBlock = `Время вышло`;
    timerSale.innerHTML = timerBlock;
  }
  else {
    let sec = Math.round(diff / 1000 % 60);
    let min = Math.round(diff / 1000 / 60 % 60);
    let hour = Math.round(diff / 1000 / 60 / 60);
    let timerBlock = `${hour}:${min}:${sec}`;
    timerSale.innerHTML = timerBlock;
  }
}, 1000);


buyBtn.addEventListener('click', clickBuy);
closeBtn.addEventListener('click', clickclose);

function clickBuy() {
  localStorage.setItem('Sale', true);
  localStorage.setItem('ShowSalePopup', JSON.stringify({ isShow: false, time: 0 }))
  block.setAttribute('style', 'display: none');
}

function clickclose() {
  localStorage.setItem('Sale', false);
  localStorage.setItem('ShowSalePopup', JSON.stringify({ isShow: true, time: 15000 }))
  block.setAttribute('style', 'display: none');
  setTimeout(showBlock, 10000);
}

function showBlock() {
  block.setAttribute('style', 'display: block');
}


