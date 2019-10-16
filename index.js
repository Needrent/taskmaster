const taskName = document.querySelector("#title");
const taskNameEdit = document.querySelector('[name="editField"]');

const taskNameBtn = document.querySelector('[data-label="edit"]');

taskNameBtn.addEventListener("click", openEdit);

function openEdit(){
  taskName.classList.toggle("hide");  
  taskNameEdit.classList.toggle("hide");
  
  taskNameBtn.textContent = "EDIT DONE";
  taskNameEdit.value = taskName.textContent;
  
  taskNameBtn.removeEventListener("click", openEdit);
  taskNameBtn.addEventListener("click", closeEdit);
}
function closeEdit(){
  taskName.classList.toggle("hide");  
  taskNameEdit.classList.toggle("hide");
  
  taskNameBtn.textContent = "EDIT TASK";
  taskName.textContent = taskNameEdit.value;
  
  taskNameBtn.removeEventListener("click", closeEdit);
  taskNameBtn.addEventListener("click", openEdit);
}


/*document.querySelector('[data-label="edit"]').addEventListener("click", e =>{
  let taskName = document.querySelector("#title");
  let taskNameEdit = document.querySelector('[name="editField"]');
  
  taskNameEdit.value = taskName.textContent;
  taskName.classList.toggle("hide");  
  taskNameEdit.classList.toggle("hide");
  taskName.textContent = taskNameEdit.value;
 
});*/