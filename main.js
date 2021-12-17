const btnAdd = document.querySelector('.btn');
const input = document.querySelector('.input');
const toDos = document.querySelector('.toDos');
let elements = []

window.onload = function(){
  if(JSON.parse(localStorage.getItem("toDoElements")) != null){
    elements = JSON.parse(localStorage.getItem("toDoElements"));
  }
};

btnAdd.addEventListener('click', (e) => {
  if(input.value.trim() === ""){
    alert("Task name cannot be blank.")
  }
  else{
  elements.push(input.value.trim())
  toDos.innerHTML += `
        <div class="task">

          <span class="taskname">
            ${input.value}
          </span>

          <button class="complete">
            <i class="fa fa-check"> </i>
          </button>
          <button class="delete">
          <i class="fa fa-trash"></i>
          </button>

        </div>

    `;

    let currentTaskDelete = document.querySelectorAll(".delete");
    for (let index = 0; index < currentTaskDelete.length; index++) {
      currentTaskDelete[index].onclick = function(){
        this.parentNode.remove();
      }
    }

    let currentTaskComplete = document.querySelectorAll(".complete");
    for (let index = 0; index < currentTaskComplete.length; index++){
      currentTaskComplete[index].onclick = function(){
        this.parentNode.classList.toggle('completed');
    	}
    }

    if(localStorage.getItem("toDoElements") == null){
      localStorage.setItem("toDoElements", JSON.stringify(elements))
    }
    else{
      localStorage.setItem("toDoElements", JSON.stringify(elements))
    }

    input.value = "";
  }
});

input.addEventListener('keyup', (e) =>{
  if(e.keyCode === 13){
    if(input.value.trim() === ""){
      alert("Task name cannot be blank.")
    }
    else{
    toDos.innerHTML += `
    <div class="task">

      <span class="taskname">
        ${input.value}
      </span>

      <button class="complete">
        <i class = "fa fa-check"> </i>
      </button>
      <button class="delete">
      <i class="fa fa-trash"></i>
      </button>

    </div>

`;


let currentTaskDelete = document.querySelectorAll(".delete");
for (let index = 0; index < currentTaskDelete.length; index++) {
  currentTaskDelete[index].onclick = function(){
    this.parentNode.remove();
  }
}

let currentTaskComplete = document.querySelectorAll(".complete");
    for (let index = 0; index < currentTaskComplete.length; index++){
      currentTaskComplete[index].onclick = function(){
        this.parentNode.classList.toggle('completed');
    	}
    }



input.value = "";
}

}});

