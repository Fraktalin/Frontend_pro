var elements = document.querySelectorAll('.pane-wrap .pane')

for (let i = 0; i < elements.length; i++) {
  var block = document.createElement('div');
  var closeBlock = `<img src= "./image/delete.gif">`
  block.innerHTML = closeBlock;
  elements[i].appendChild(block);

  block.addEventListener('click', close) ;
  function close () {
    elements[i].setAttribute('style', 'display: none');
  }
}