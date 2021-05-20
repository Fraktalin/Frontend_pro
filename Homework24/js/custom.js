let block = document.querySelector('.block');
const requestURL = 'https://api.github.com/users';
function sendRequest() {
  return fetch(requestURL)
    .then(response => {
      let users = response.json()
      return users
    })
    .then((parseUser) => {
      for (let i = 0; i < 10; i++) {
        let blockwrap = document.createElement('li');
        let newPost = `<div class="flex">
                        <img src="${parseUser[i]['avatar_url']}"></img>
                        <div class="text-wrap">
                          <span>login: ${parseUser[i]['login']}</span>
                          <span>id: ${parseUser[i]['id']}</span>
                        <div>
                      </div>`;
        blockwrap.innerHTML = newPost;
        block.appendChild(blockwrap);
      }
    }).catch((e) => {
      block.innerHTML = `<div class="wrong-url">Проверьте ввод данных</div>`;
    })
}
sendRequest()
