const crtNoteBtn = document.querySelector(".btn");
const crtNoteInput = document.querySelector(".input-box");
const inputContainer = document.querySelector(".notes-container");
const deleteAllBtn = document.querySelector(".dltBtn");


function showNotes() {
    const notes = localStorage.getItem("notes");
    if (notes) {
        inputContainer.innerHTML = notes;
        attachDeleteListeners();
    }
}

function updateStorage() {
    localStorage.setItem("notes", inputContainer.innerHTML);
}

crtNoteBtn.addEventListener("click", ()=> {
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.classList.add("input-box");
    inputBox.setAttribute("contenteditable", "true");
    img.src = "images/delete.png";
    img.classList.add("delete-icon");
    inputBox.appendChild(img);
    inputContainer.appendChild(inputBox);

    inputBox.addEventListener("input", ()=> {
        updateStorage();
    });

    img.addEventListener("click", () => {
        inputContainer.removeChild(inputBox);
        updateStorage(); // Update storage after deletion
    });

    updateStorage();
});

function attachDeleteListeners() {
    const deleteBtns = document.querySelectorAll(".delete-icon");
    deleteBtns.forEach((btn) => {
        btn.addEventListener("click", ()=> {
           const noteToDelete = btn.parentElement;
           inputContainer.removeChild(noteToDelete);
           updateStorage();
        });
    });
}

deleteAllBtn.addEventListener("click", ()=> {
    inputContainer.innerHTML = "";
    updateStorage();
});

showNotes();