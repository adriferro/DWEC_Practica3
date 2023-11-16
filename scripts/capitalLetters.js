import { name, surname } from "./prompts.js"

function capitalLetter() {
    const fullName = name + " " + surname;
    const capLetName = fullName.toUpperCase();

    const message = document.createElement('p');
    message.innerHTML = `Tu nombre todo en <strong>mayúsculas</strong> sería: <strong>${capLetName}</strong>`;
    document.body.appendChild(message);
}

capitalLetter();