let addToDoButton = document.getElementById('buttonAddTask');
let inputTask = document.getElementById('inputAddTask');
let toDoesContainer = document.getElementById('toDoesContainer');

addToDoButton.addEventListener('click', function(){
    var paragraph = document.createElement('p');
    paragraph.innerText = inputTask.value;
    toDoesContainer.appendChild(paragraph);
    inputTask.value="";
    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration = "line-through";
    })
    paragraph.addEventListener('dblclick', function(){
        toDoesContainer.removeChild(paragraph);
    })

})