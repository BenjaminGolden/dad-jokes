export const getDadJokes = () => {

    return fetch("http://localhost:8088/dadJokes")
    .then(response => response.json())
    .then(parsedResponse => {
        // do something with response here
        return parsedResponse;
    })
}