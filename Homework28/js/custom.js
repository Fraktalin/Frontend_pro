let inputs = document.querySelectorAll('.cart_numb_item');

for (item of inputs) {
  item.addEventListener('input', changeInputNext)
  item.addEventListener('keydown', changeInputBack)
  item.addEventListener('keypress', checkNum)
}

function changeInputNext(e) {
  this.value ? this.nextElementSibling.focus() : null
}
function checkNum(e) {
  if (e.keyCode < 48 || e.keyCode > 57) {
    e.preventDefault();
  }
}
function changeInputBack(e) {
  if (e.keyCode === 8 && this.value.length === 0) {
    this.previousElementSibling.focus()
  }
}