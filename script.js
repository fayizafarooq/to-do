const taskInput=document.getElementById("taskInput");
const addBtn=document.getElementById("addBtn");
const clearBtn=document.getElementById("clearBtn");
const allBtn=document.getElementById("allBtn");
const pendingBtn=document.getElementById("pendingBtn");
const completedBtn=document.getElementById("completedBtn");
const taskLists=document.getElementById("taskLists");
const errorDisplay=document.getElementById("errorDisplay");
const theme=document.getElementById("themeToggle");
const confirmModal = document.getElementById("confirmModal");
const confirmYes = document.getElementById("confirmYes");
const confirmNo = document.getElementById("confirmNo");


function addTask() {
  addBtn.addEventListener("click", ()=>{
    const lists= document.createElement("li")

    if (taskInput.value.trim() === "") {
      errorDisplay.textContent = "Please enter a task!";
      return;}
    const taskText = document.createElement("span");
    taskText.textContent = taskInput.value;taskText.classList.add("task-text");
    errorDisplay.textContent = "";

    //create done button
    const taskDone=document.createElement("span");
    taskDone.textContent="✔";
    taskDone.style.cursor="pointer";
    taskDone.style.marginRight="10px";
    taskDone.addEventListener("click",()=>{
      taskText.classList.toggle("done")
    })
    //create delete button
    const deleteBtn=document.createElement("span");
    deleteBtn.textContent="✖";
    deleteBtn.style.cursor="pointer";
    deleteBtn.style.marginLeft="auto";
    deleteBtn.addEventListener("click",()=>{
      lists.remove();
    })

    lists.appendChild(taskDone);
    lists.appendChild(taskText);
    lists.appendChild(deleteBtn)
    taskLists.appendChild(lists)
    taskInput.value = "";

  })
}

function filterButtons() {
  
  allBtn.addEventListener("click", () => {
    const allTasks = taskLists.querySelectorAll("li");
    allTasks.forEach(task => {
    task.style.display = "flex";
    });
  });

  pendingBtn.addEventListener("click",()=>{
    const allTasks = taskLists.querySelectorAll("li");
    allTasks.forEach(task =>{
      const taskText=task.querySelector(".task-text");
      if (taskText.classList.contains("done")) {
        task.style.display="none"
      }
      else{
        task.style.display="flex"
      }
    })
  })

  completedBtn.addEventListener("click", ()=>{
    const allTasks = taskLists.querySelectorAll("li");
    allTasks.forEach(task =>{
      const taskText=task.querySelector(".task-text");
      if (taskText.classList.contains("done")) {
        task.style.display="flex"
      }
      else{
        task.style.display="none"
      }
    })
  })
clearBtn.addEventListener("click", () => {
  confirmModal.style.display = "flex";
});

confirmYes.addEventListener("click", () => {
  taskLists.innerHTML = "";
  confirmModal.style.display = "none";
});

confirmNo.addEventListener("click", () => {
  confirmModal.style.display = "none";
});

}
theme.addEventListener("click", ()=>{
  document.body.classList.toggle("light-mode");
  document.body.classList.toggle("dark-mode");
  
})
addTask();
filterButtons();
