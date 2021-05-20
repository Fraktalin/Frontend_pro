
var data = [
  {
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
  },
  {
    "userId": 1,
    "id": 2,
    "title": "quis ut nam facilis et officia qui",
    "completed": true
  },
  {
    "userId": 1,
    "id": 3,
    "title": "fugiat veniam minus",
    "completed": true
  },
  {
    "userId": 1,
    "id": 4,
    "title": "et porro tempora",
    "completed": true
  },
  {
    "userId": 1,
    "id": 5,
    "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
    "completed": false
  },
  {
    "userId": 1,
    "id": 6,
    "title": "qui ullam ratione quibusdam voluptatem quia omnis",
    "completed": false
  },
  {
    "userId": 1,
    "id": 7,
    "title": "illo expedita consequatur quia in",
    "completed": false
  },
  {
    "userId": 1,
    "id": 8,
    "title": "quo adipisci enim quam ut ab",
    "completed": true
  },
  {
    "userId": 1,
    "id": 9,
    "title": "molestiae perspiciatis ipsa",
    "completed": false
  },
  {
    "userId": 1,
    "id": 10,
    "title": "illo est ratione doloremque quia maiores aut",
    "completed": true
  },
  {
    "userId": 1,
    "id": 11,
    "title": "vero rerum temporibus dolor",
    "completed": true
  },
  {
    "userId": 1,
    "id": 12,
    "title": "ipsa repellendus fugit nisi",
    "completed": true
  },
  {
    "userId": 1,
    "id": 13,
    "title": "et doloremque nulla",
    "completed": false
  },
  {
    "userId": 1,
    "id": 14,
    "title": "repellendus sunt dolores architecto voluptatum",
    "completed": true
  },
  {
    "userId": 1,
    "id": 15,
    "title": "ab voluptatum amet voluptas",
    "completed": true
  },
  {
    "userId": 1,
    "id": 16,
    "title": "accusamus eos facilis sint et aut voluptatem",
    "completed": true
  },
  {
    "userId": 1,
    "id": 17,
    "title": "quo laboriosam deleniti aut qui",
    "completed": true
  },
  {
    "userId": 1,
    "id": 18,
    "title": "dolorum est consequatur ea mollitia in culpa",
    "completed": false
  },
  {
    "userId": 1,
    "id": 19,
    "title": "molestiae ipsa aut voluptatibus pariatur dolor nihil",
    "completed": true
  },
  {
    "userId": 1,
    "id": 20,
    "title": "ullam nobis libero sapiente ad optio sint",
    "completed": true
  }
];

const todoList = document.querySelector('.todo-list');
const isCompleted = document.querySelector('.isComplited');
const searchInput = document.querySelector('.searchInput');
const inputSort = document.querySelector('#sort');
let checkBox, sortArr, searchLet = '';


inputSort.addEventListener('change', sorting)

function sorting(e) {
  if (filterTrue.length < 5) {
    currentSort(data)
  }
  else if (filterTrue.length > 5 && isCompleted.checked === true) {
    currentSort(filterTrue)
  }
  else currentSort(data)
  function currentSort(arr) {
    let sortingArr = inputSort.value;
    if (sortingArr === 'asc') {
      arr.sort(function (a, b) {
        if (a['title'] > b['title']) {
          return 1;
        }
        if (a['title'] < b['title']) {
          return -1;
        }
        return 0;
      });
    }
    else if (sortingArr === 'desc') {
      arr.sort(function (a, b) {
        if (a['title'] < b['title']) {
          return 1;
        }
        if (a['title'] > b['title']) {
          return -1;
        }
        return 0;
      });
    }
    todoList.innerHTML = "";
    renderList(arr);
  }
  let sortValue = inputSort.value
  pushHistory(sortValue, 'sort')
}

function renderList(list) {
  list.forEach((item, indx) => {
    let todoItem = `
    <div class='todo-item todo-item-${item.id}'>
      <div class="completed completed-${item.completed}">
        <h3 class="todo-item-title" data-userId='${item.userId}'>${indx + 1} ${item.title}</h3>
      </div>
    </div>`;
    todoList.innerHTML += todoItem
  })
}

renderList(data);

function pushHistory(elemH, type) {
  console.log(elemH, type);
  if (type === 'check') {
    checkBox = `?isCompleted=${elemH}`;
  }
  else if (type === 'sort') {
    sortArr = `&sort=${elemH}`;
  }
  else if (type === 'search') {
    searchLet = `&search=${elemH}`;
  }
  if(sortArr === undefined) {
    sortArr =''
  }
  if (checkBox === undefined) {
    checkBox ='';
  }
  if (searchLet === undefined) {
    searchLet='';
  }
  history.pushState({}, '',  `${sortArr}${checkBox}${searchLet}`)
}

isCompleted.addEventListener('click', (event) => {
  let completed = isCompleted.checked
  pushHistory(completed, 'check')
  filtersToParams(data, completed, 'checkbox');
});

searchInput.addEventListener('input', (event) => {
  let searchText = event.target.value;
  pushHistory(searchText, 'search')
  filtersToParams(data, searchText, 'search');
});

let filterTrue = [];
function filtersToParams(data, searchParam, field) {
  let numCheck = 0;
  if (field === 'checkbox' && searchParam === true) {
    numCheck++
  }
  else if (field === 'checkbox' && searchParam === false) {
    numCheck--
  }
  if (numCheck <= 0) {
    todoList.innerHTML = "";
    renderList(data);
  }
  if (field === 'search' && filterTrue.length < 1 && isCompleted.checked === true) filterArr(data)
  else if (filterTrue.length > 5 && field == 'search' && isCompleted.checked === true) filterArr(filterTrue)
  else filterArr(data)
  function filterArr(arr) {
    let isCompletedArr = arr.filter((item) => {
      switch (field) {
        case 'checkbox':
          if (searchParam == true) {
            if (item.completed === true && filterTrue.length <= 12) {
              filterTrue.push(item)
            }
            return searchParam == item.completed
          } else {
            return item
          }
        case 'search':
          return item['title'].includes(searchParam) ? item : false
        default: return item
      }
    });
    todoList.innerHTML = "";
    renderList(isCompletedArr);
  }
}