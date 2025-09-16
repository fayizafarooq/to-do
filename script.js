const taskInput=document.getElementById("taskInput")
const addBtn=document.getElementById("addBtn")
const clearBtn=document.getElementById("clearBtn")
const allBtn=document.getElementById("allBtn")
const pendingBtn=document.getElementById("pendingBtn")
const completedBtn=document.getElementById("completedBtn")
const taskLists=document.getElementById("taskLists")


function addTask() {
  addBtn.addEventListener("click", ()=>{
    const lists= document.createElement("li")

    const taskText = document.createElement("span");
    taskText.textContent=taskInput.value;
    taskText.classList.add("task-text");

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
  
  clearBtn.addEventListener("click",()=>{
    taskLists.innerHTML = "";
  })
}

addTask();
filterButtons();
