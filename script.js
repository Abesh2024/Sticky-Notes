
const button2 = document.querySelector(".clear-all");

let noteColor = document.querySelector("#note-color").children;
let notes = document.querySelector("#show-notes")
let color = document.querySelector("#color");
let btn = document.querySelector("button");
let text = document.querySelector("#remove-text");

btn.addEventListener("click", () => {
    let note = noteColor[0].value;
    // let color = noteColor[1].value;
    // console.log(note, color.value);
    if (note === "") {
        alert("please enter some text!");
    }
    stickyNotes(note, color.value);

    noteColor[0].value = "";
    text.style.display = "none";
})


function stickyNotes(note, color) {
    let div = document.createElement("div");
    div.style.height = "150px";
    div.style.width = "150px";

    div.innerHTML = `
<p>${note}</p>
<button class="btn2">X</button>
`
    div.style.backgroundColor = color;
    notes.appendChild(div);
}

notes.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
        e.target.parentElement.remove();
        if (notes.innerHTML === "") {
           text.style.display = "block";
        }
    }
})

button2.addEventListener("click", (e) => {

    notes.innerHTML = ``;
    text.style.display = "block";

})
