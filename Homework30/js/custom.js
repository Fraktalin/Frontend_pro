const blockCookie = document.querySelector('.update');
const btnCookie = document.querySelector('.refresh-cookie')

btnCookie.addEventListener('click', updateCookie)

function firstTry() {
  if (document.cookie) setCookie()
  else {
    alert('Добро пожаловать');
    setCookie()
  }
}
firstTry();

function updateCookie() {
  blockCookie.classList.remove('active');
  setCookie();
}

function setCookie() {
  let date = new Date();
  document.cookie = `userName=Grisha,date=${date};max-age=10`;
}

let timerId = setInterval(function checkCookie() {
  console.log(document.cookie);
  if (!document.cookie) {
    blockCookie.classList.add('active');
  }
}, 1000);
