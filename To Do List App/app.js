let task = document.querySelector("#input-box");
let ul = document.querySelector("ul");
let btn = document.querySelector("button");

function addTask() {
    let text = task.value;
    if (text == "") {
        alert("You must write something");
    } else {
        let li = document.createElement("li");
        li.innerText = text;
        // ul.innerHTML = "<li>" + task + "</li>";
        ul.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"
        li.appendChild(span);
        task.value = "";

li.addEventListener("click", handleListClick);
span.addEventListener("click", handleSpanClick);
saveData();
    }
    

}

btn.addEventListener("click", addTask);
task.addEventListener("keydown", (e)=> {
    if (e.key == "Enter") {
        addTask();
    }
});


function handleListClick(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } 
}

function handleSpanClick(e) {
    if (e.target.tagName ==="SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}

function saveData() {
    localStorage.setItem("data", ul.innerHTML)
}

function showTask() {
    let storedTasks = localStorage.getItem("data");
    if (storedTasks) {
        ul.innerHTML = storedTasks;
        restoreTasks(); // Re-attach event listeners to the loaded tasks
    }
}

// Re-attach event listeners to existing tasks when loaded from localStorage
function restoreTasks() {
    let listItems = ul.querySelectorAll("li");
    let spans = ul.querySelectorAll("li span");

    listItems.forEach((li) => {
        li.addEventListener("click", handleListClick);
    });

    spans.forEach((span) => {
        span.addEventListener("click", handleSpanClick);
    });
}

showTask();
    