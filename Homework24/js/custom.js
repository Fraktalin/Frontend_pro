let block = document.querySelector('.block');
const requestURL = 'https://api.github.com/users';

function sendRequest(url) {
  return fetch(url)
    .then(response => {
      let users = response.json()
      return users
    })
    .then((parseUser) => {
      createdPosts(parseUser, block)
    })
}
sendRequest(requestURL)

function createdPosts(data, b) {
  for (let i = 0; i < 10; i++) {
    let blockwrap = document.createElement('li');
    let newPost = `<div>
                    <span>login: ${data[i]['login']}</span>
                    <span>id: ${data[i]['id']}</span>
                    <span>User Avatar:<a href="${data[i]['avatar_url']}">${data[i]['avatar_url']}</a></span>
                  </div>`
    blockwrap.innerHTML = newPost;
    b.appendChild(blockwrap);
  }
}