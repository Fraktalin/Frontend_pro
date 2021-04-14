block = document.getElementById("blueRect");

var heightBlock = window.getComputedStyle(block,null).getPropertyValue("height");
var widthBlock = window.getComputedStyle(block,null).getPropertyValue("width");

heightBlock = heightBlock.slice(0, -2);
widthBlock = widthBlock.slice(0, -2);

var blockTop = 0;
var blockLeft = 0;
document.body.addEventListener("keydown", moveBlock);

function moveBlock(e) {
  if (e.key == "ArrowDown" && blockTop < window.innerHeight - heightBlock-10) {
    blockTop += 10;
    block.style.top = blockTop + "px";
  }
  else if (e.key == "ArrowUp" && blockTop > 0) {
    blockTop = blockTop - 10;
    block.style.top = blockTop + "px";
  }
  else if (e.key == "ArrowLeft" && blockLeft > 0) {
    blockLeft = blockLeft - 10;
    block.style.left = blockLeft + "px";
  }
  else if (e.key == "ArrowRight" && blockLeft < window.innerWidth - widthBlock-10) {
    blockLeft += 10;
    block.style.left = blockLeft + "px";
  }
}