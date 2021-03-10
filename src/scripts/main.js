// import { getDadJokes } from "./data/DataManager.js"
// //import { jokesList } from "./feed/jokelist.js"

// const showDadJokes = () => {
//     const jokeElement = document.querySelector(".jokeList");
//     getDadJokes().then((allJokes)=> {
//         jokeElement.innerHTML = jokesList(allJokes);
//     })
// }

// const startDadJokes = () => {
	
//     return showDadJokes;
// }
// startDadJokes();

const getDadJokes = () => {

    return fetch ("https://icanhazdadjoke.com",{
        method:"GET",
        headers: {
            "Accept": "application/json"
        }
    })
}
console.log(getDadJokes);
getDadJokes();

const applicationElement = document.querySelector("main");