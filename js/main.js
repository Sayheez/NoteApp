/*
    Author: Seyi Samuel
    Description: Note app that allows user to create a note, edit it and also delete it with a local storage database facility.

*/

"use strict";

/*  Variables*/
//Get the dom element
const newNoteBtn = document.querySelector(".btn");
const noteForm = document.querySelector(".note-form");
const noteContainer = document.querySelector(".note-container");
const notesPanelDisplay = document.querySelector(".note-panel-display");

/*  Event Listeners*/
newNoteBtn.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("New note btn");
    getNoteForm();

});

/* Functions */
// note form display
const getNoteForm = () => {
    const noteForm = `
    <div class="note-form">
        <h3 id="note-heading">Add a new note</h3>
        <input type="text" class="note-form-title" placeholder="note title">
        <textarea placeholder="note description" class="note-form-description" cols="30" rows="10"></textarea>
        <input  type="submit" value="add note">
    </div>`;

    noteContainer.insertAdjacentHTML("beforeend", noteForm);
}

// Display all notes
const addNewNote = (inpVal, textVal, dateVal) => {
    console.log("add note btn");
    notesPanelDisplay.insertAdjacentHTML("afterbegin", noteDisplay);
};
