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
const notesPanelDisplay = document.querySelector(".note-panel-display");
const backgroundDrop = document.querySelector(".overlay");


const noteDisplay = `
    <div class="note">
        <div class="note-text">
            <h3 id="note-title">{ input.value }</h3>
            <p id="note-description">{ textarea.value } </p>
        </div>
        <div class="note-addons">
            <span class="date">{ new Date().getTime() }</span>
            <span class="del-update">...
                <ul>
                    <button class="edit-note" type="button">update</button>
                    <button class="delete-note" type="button">delete</button>
                </ul>
            </span>
        </div>
    </div>
`;

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

/* Functions */
// close note form
const closeNoteForm = () => {
    overlayBG.classList.add("hidden");
    noteForm.classList.add("hidden");
};



// Display all notes
const addNewNote = (inpVal, textVal, dateVal) => {
    console.log("add note btn");
    notesPanelDisplay.insertAdjacentHTML("afterbegin", noteDisplay);
};
