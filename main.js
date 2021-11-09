const btnAdd = document.querySelector('.btn');
const input = document.querySelector('.input');
const toDos = document.querySelector('.toDos');

const saveToLocalStorage = () => {
  localStorage.setItem('todo', toDos.textContent)
}
btnAdd.addEventListener('click', (e) => {
  const todo = document.createElement('p', 'i');
  todo.innerText = input.value;
  toDos.appendChild(todo);
  input.value = "";
  todo.style.margin = '5px';

  todo.addEventListener('click', (e) => {
    todo.style.textDecoration = 'line-through';
    todo.style.color = '#fc6f03';
  })

  todo.addEventListener('dblclick', (e) => {
    toDos.removeChild(todo);
  })

});

btnAdd.addEventListener('click', saveToLocalStorage);
