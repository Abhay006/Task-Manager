// to show task when page load
showtask();
//when user enter task from user
let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function (e) {
    let addTxt = document.getElementById("addTxt");
    let task = localStorage.getItem("task");
    if (task == null) {
        taskObj = [];
    }
    else {
        taskObj = JSON.parse(task);
    }
    taskObj.push(addTxt.value);
    localStorage.setItem("task", JSON.stringify(taskObj));
    addTxt.value = "";

    // console.log(taskObj);

    showtask();
});
//function to show task
function showtask() {
    let task = localStorage.getItem("task");
    if (task == null) {
        taskObj = [];
    }
    else {
        taskObj = JSON.parse(task);

    }
    let html = "";
    taskObj.forEach((element, index) => {
        html +=
        `<div class="taskCard my-2 mx-2 card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">Task ${index + 1}</h5>
          <p class="card-text">${element}</p>
          <button id="${index}" onclick="deletetask(this.id)" class="btn btn-primary">Delete Task</button>
        </div>
      </div>`;

    });
    let taskEle = document.getElementById("task");
    if (taskObj.length != 0) {
        taskEle.innerHTML = html;
    }
    else {
        taskEle.innerHTML = `Nothing to show! Use "Add a task" section above to add task`;
    }
}
//function to delete task
function deletetask(index) {
    console.log("i am delete", index);
    let task = localStorage.getItem("task");
    if (task == null) {
        taskObj = [];
    }
    else {
        taskObj = JSON.parse(task);
    }
    taskObj.splice(index, 1);
    localStorage.setItem("task", JSON.stringify(taskObj));
    showtask();
}
//search 
let search = document.getElementById('searchTxt');
search.addEventListener("input", function () {

    let inputVal = search.value.toLowerCase();
    let taskCards = document.getElementsByClassName('taskCard');
    Array.from(taskCards).forEach(function (element) {
        let cardTxt = element.getElementsByTagName("p")[0].innerText;
        if (cardTxt.includes(inputVal)) {
            element.style.display = "block";
        }
        else {
            element.style.display = "none";
        }
    })
})