let List = localStorage.getItem('List');

let todoList;

resetList(List);

function resetList(List) {
  todoList = List ? JSON.parse(List) : [];
}

displayItems();


function addTodo() {
  let inputElement = document.querySelector('#todo-input');
  let dateElement = document.querySelector('#todo-date');
  let todoItem = inputElement.value ;
  let todoDate = dateElement.value ;

  if(todoItem && todoDate) {

  todoList.push({item : todoItem,dueDate : todoDate});
  localStorage.setItem('List',JSON.stringify(todoList)) ;

  inputElement.value = '';
  dateElement.value = '';

  displayItems();

  }
  else {
    alert('Please fill in both fields');
  }
}


function displayItems() {
  let containerElement = document.querySelector('.todo-container') ;

  let newHtml = '';

  for(let i = 0 ; i<todoList.length ; i++) {
    let item = todoList[i].item ;

    let dueDate = todoList[i].dueDate ;

    newHtml += `
    <span>${item}</span>
    <span>${dueDate}</span>
    <button class="btn-delete"  onclick="todoList.splice(${i},1);
    localStorage.setItem('List',JSON.stringify(todoList)) ;
    displayItems ();">Delete</button>
    `;
  }

  containerElement.innerHTML = newHtml ;
}






