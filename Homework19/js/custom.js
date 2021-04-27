function createAndRun() {
  let myWindow = window.open("","Frontend","width=500,height=500,scrollbars=no,resizabie=no");
  myWindow.document.write("<img src='./image/cat.png' style='width:100%'></img>");
  myWindow.document.title = 'Frontend';

  let timerId = setInterval(function () {
    let randomNum = Math.random();
    myWindow.moveTo(randomNum*outerWidth,randomNum*outerHeight);
  }, 1000)

  setTimeout(function(){ 
    clearInterval(timerId);
    myWindow.close();
  }, 15000);

}

createAndRun();