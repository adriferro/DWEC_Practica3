import { name } from "./prompts.js"

function helloName(){
    const message = document.createElement('p');
    message.innerHTML = `Buenos días <strong>${name}</strong>`;
    document.body.appendChild(message);
}

helloName()
