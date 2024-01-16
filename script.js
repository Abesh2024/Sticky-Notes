let noteColor = document.querySelector("#note-color").children;
let notes = document.querySelector("#show-notes")
let color = document.querySelector("#color");

let btn = document.querySelector("button");

btn.addEventListener("click", ()=>{
    let note = noteColor[0].value;
    // let color = noteColor[1].value;
    // console.log(note, color.value);
    if(note === ""){
        alert("please enter some text!");
    }

     stickyNotes (note, color.value);

     noteColor[0].value = "";
     document.querySelector("#remove-text").style.display = "none";

})


function stickyNotes (note, color) {
    let div = document.createElement("div");
    div.style.height = "150px";
    div.style.width = "150px";

    div.innerHTML = `
    <p>${note}</p>
    <button>X</button>
    `
    div.style.backgroundColor = color;
    notes.appendChild(div);
}