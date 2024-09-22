const buttonToDo = document.querySelector("#submitButton");
const inputToDo = document.querySelector("#taskInput");
const ul = document.querySelector("#taskList");
const completedUl = document.querySelector("#completedList");

let taskArray = [];
let completedTask = [];

buttonToDo.addEventListener("click", () => {
    if (taskArray.indexOf(inputToDo.value) === -1) {
        taskArray.push(inputToDo.value);
        console.log(taskArray);
        ul.innerHTML = "";
        taskArray.forEach((task) => {
            const li = document.createElement("li");
            li.className = "list-group-item d-flex justify-content-between align-items-center";
            li.innerHTML = task;

            const tickButton = document.createElement("button");
            tickButton.className = "btn btn-success btn-sm";
            tickButton.innerHTML = "✔";
            li.appendChild(tickButton);
            tickButton.addEventListener("click", () => AddToCompleted(task, li));

            const crossButton = document.createElement("button");
            crossButton.className = "btn btn-danger btn-sm";
            crossButton.innerHTML = "✘";
            li.appendChild(crossButton);
            crossButton.addEventListener("click", () => DeleteTask(task, li));

            ul.appendChild(li);
            inputToDo.value = "";
        })
    }
    else {
        alert("Already in task");
    }
})


const DeleteTask = (task, li) => {
    taskArray.splice(taskArray.indexOf(task), 1);
    completedTask.splice(completedTask.indexOf(task), 1);
    li.remove();
    console.log("Tasks not Completed: ", taskArray);
    console.log("Tasks Completed: ", taskcompleted);

};


const AddToCompleted = (task, li) => {
    taskArray.splice(taskArray.indexOf(task), 1);
    console.log("Tasks not completed: ", taskArray);
    completedTask.push(task);
    console.log("Tasks completed: ", completedTask);
    console.log(li);

    completedUl.innerHTML = "";
    completedTask.forEach((taskNew) => {
        const liNew = document.createElement("li");
        liNew.className = "list-group-item";
        liNew.setAttribute("style", "text-decoration:line-through")
        liNew.innerHTML = taskNew;

        const crossButton = document.createElement("button");
        crossButton.className = "ms-5 btn btn-danger btn-sm";
        crossButton.innerHTML = "✘";
        crossButton.addEventListener("click", () => DeleteTask(taskNew, liNew));
        liNew.appendChild(crossButton);
        
        completedUl.appendChild(liNew);
    });
    li.remove();
};