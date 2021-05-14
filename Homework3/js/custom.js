var color;
function taskColor(){
  color = prompt ('Привет, сейчас мы узнаем Ланнистер ли ты. Напиши цвет своего доспеха на английском');
  if (color == '') {
    taskColor ();
  }
} 

taskColor();
var lion = confirm ('Есть ли у тебя щит на котором изображен лев?');

function isLannisterSoldier(soldierColor, soldierShield){
  console.log (color , lion)
  if (soldierColor == 'red' &&  soldierShield == false || soldierShield == true) {
    alert('Добро пожаловать!');
  }
  else alert ('Тебе нельзя, ты не Ланнистер');
}
isLannisterSoldier (color, lion);

