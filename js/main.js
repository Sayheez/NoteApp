/*
    Author: Seyi Samuel
    Description: Note app that allows user to create a note, edit it and also delete it with a local storage database facility.

*/

"use strict";

/*  Variables*/
//Get the dom element
const newNoteBtn = document.querySelector(".btn");
const closeNewNotePop = document.querySelector(".note-form i");
const noteForm = document.querySelector(".note-form");
const noteContainer = document.querySelector(".note-container");
const notesPanelDisplay = document.querySelector(".notes-panel-display");
const backgroundDrop = document.querySelector(".overlay");
const addNoteBtn = document.querySelector(".note-form input[type='submit']");
const inputtedTitle = document.querySelector(".note-form .note-form-title");
const textBody = document.querySelector(".note-form .note-form-description");
const notesLS = JSON.parse(localStorage.getItem("notes") || "[]");


/*  Event Listeners*/
newNoteBtn.addEventListener("click", (e) => {
    e.preventDefault();
    backgroundDrop.classList.remove("hidden");
    noteForm.classList.remove("hidden");
});

// To close the note form displayed
closeNewNotePop.addEventListener("click", () => {
    console.log("removed note form pop");
    closeNoteForm();
});

// Add note to the all notes, and also store in localStorage 
addNoteBtn.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("add note btn");
    let noteTitle = inputtedTitle.value;
    let noteDescription = textBody.value;
    if(noteTitle || noteDescription) {
        let date = new Date().toLocaleString();

        let noteInfo = {
            "title": noteTitle,
            "description": noteDescription,
            date
        };

        // Push the noteInfo object into the array created 
        notesLS.push(noteInfo);

        // Add the noteInfo object to local storage
        localStorage.setItem("notes", JSON.stringify(notesLS));

        // closeNoteForm();
        closeNewNotePop.click();

        displayNotes();
    }
});

/* Functions */
// close note form
const closeNoteForm = () => {
    backgroundDrop.classList.add("hidden");
    noteForm.classList.add("hidden");
};



// Display all notes
const displayNotes = () => {
    // remove note duplicates
    document.querySelectorAll(".note").forEach(noteElement => noteElement.remove()); //To remove duplicates
    // Loop through the notes in the array display on the UI
    notesLS.forEach((noteElement, index) => {
        let noteDiv = `
            <div class="note">
                <div class="note-text">
                    <h3 id="note-title">${noteElement.title}</h3>
                    <p id="note-description"> ${noteElement.description} </p>
                </div>
                <div class="note-addons">
                    <span class="date">${noteElement.date} </span>
                    <span class="del-update">
                        <i onclick="showMenu(this)" >...</i> 
                        <ul>
                            <button onclick="editNote(${index}, '${noteElement.title}', '${noteElement.description}')" class="edit-note" type="button">update</button>
                            <button onclick="removeNote(${index})" class="delete-note" type="button">delete</button>
                        </ul>
                    </span>
                </div>
            </div>`;
        console.log(notesPanelDisplay);
        notesPanelDisplay.insertAdjacentHTML("afterbegin", noteDiv);
    });
};

displayNotes();

