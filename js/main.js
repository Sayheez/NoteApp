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
const addNoteBtn = document.querySelector(".note-form input[type='submit']");


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
});

/* Functions */
// close note form
const closeNoteForm = () => {
    backgroundDrop.classList.add("hidden");
    noteForm.classList.add("hidden");
};



// Display all notes

