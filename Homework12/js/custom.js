var pasteElem = document.querySelector('body');
var newDiv = document.createElement('div');
pasteElem.appendChild(newDiv);
newDiv.setAttribute('style', 'background:lightgray;width:400px')
var newLogo = document.createElement('img');
newLogo.src = './images/stickerwall.png';
newDiv.appendChild(newLogo);
var newTitle = document.createElement('h1');
var h1Text = document.createTextNode("Создание сайта");
newTitle.appendChild(h1Text);
newDiv.appendChild(newTitle);
newTitle.setAttribute('style', 'font-weight:500;')
var secondTitle = document.createElement('h2');
var h2Text = document.createTextNode("Руководитель отдела маркетинга компании 'Sticker Wall'");
secondTitle.appendChild(h2Text);
newDiv.appendChild(secondTitle);
secondTitle.setAttribute('style', 'font-weight:400;');
var newP = document.createElement('p');
var p1Text = document.createTextNode("Спасибо команде за качественно проделанную работу. Сайт был сделан в оговоренные сроки и без единого бага."); var p1Text = document.createTextNode("Спасибо команде за качественно проделанную работу. Сайт был сделан в оговоренные сроки и без единого бага.");
newP.appendChild(p1Text);
newDiv.appendChild(newP);
newP.setAttribute('style', 'color:gray;')
var p2Text = document.createTextNode("Рад, что друзья посоветовали именно Вас!");
var secP = document.createElement('p');
secP.appendChild(p2Text);
newDiv.appendChild(secP);
secP.setAttribute('style', 'color:gray;')

