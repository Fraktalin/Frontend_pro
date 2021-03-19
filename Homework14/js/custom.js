var animals = [
  {
    "animalName": "Лошадь",
    "animalDesc": "Домашняя лошадь — животное семейства непарнокопытных, одомашненный и единственный сохранившийся подвид дикой лошади, вымершей в дикой природе, за исключением небольшой популяции лошади Пржевальского."
  },
  {
    "animalName": "Осёл",
    "animalDesc": "Домашний осёл или ишак — одомашненный подвид дикого осла, сыгравший важную историческую роль в развитии хозяйства и культуры человека. Все одомашненные ослы относятся к африканским ослам."
  },
  {
    "animalName": "Корова, а также пара слов о диком быке, о волах и о тёлках. ",
    "animalDesc": "Коро́ва — самка домашнего быка, одомашненного подвида дикого быка, парнокопытного жвачного животного семейства полорогих. Самцы вида называются быками, молодняк — телятами, кастрированные самцы — волами. Молодых (до первой стельности) самок называют тёлками."
  }
];



var block = document.querySelector('.pane-wrap');


function createdPosts(data, b) {
  for (var i = 0; i < data.length; i++) {
    var blockwrap = document.createElement('div');
    var newPost = `<div id="pane${i}" class="pane">
                    <img src="./image/delete.gif" id="closedBtn${i}">
                    <h3>${data[i]['animalName']}</h3>
                    <p>${data[i]['animalDesc']}</p>
                  </div>`
    blockwrap.innerHTML = newPost;
    b.appendChild(blockwrap);
    var closeBtn = document.querySelector(`#closedBtn${i}`);
    closeBtn.addEventListener('click', close)
  }
  function close(e) {
    if (e.target['id'] == 'closedBtn0') {
      document.querySelector(`#pane0`).setAttribute('style', 'display: none')
    }
    else if (e.target['id'] == 'closedBtn1') {
      document.querySelector(`#pane1`).setAttribute('style', 'display: none')
    }
    else if (e.target['id'] == 'closedBtn2') {
      document.querySelector(`#pane2`).setAttribute('style', 'display: none')
    }
  }
}
createdPosts(animals, block);

