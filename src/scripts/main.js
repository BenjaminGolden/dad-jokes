import { getDadJokes } from "./data/DataManager.js"
import { jokesList } from "feed/jokelist.js"

/**
 * Main logic module for what should happen on initial page load for DadJokes
 */

//Get a reference to the location on the DOM where the app will display

// let navElement = document.querySelector("nav");
// let entryElement = document.querySelector(".entryForm")


const showDadJokes = () => {
    const jokeElement = document.querySelector(".jokeList");
    getDadJokes().then((allJokes)=> {
        jokeElement.innerHTML = jokesList(allJokes);
    })
}
/*
    This function performs one, specific task.

    1. Can you explain what that task is?
    2. Are you defining the function here or invoking it?
*/
const startDadJokes = () => {
	// jokeElement.innerHTML = ""
    showDadJokes;
}
// Are you defining the function here or invoking it?
startDadJokes();