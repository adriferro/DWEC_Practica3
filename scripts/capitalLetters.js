import { name, surname } from "./prompts.js"

function mayus() {
    const fullName = name + " " + surname;
    const mayusName = fullName.toUpperCase();

    const message = document.createElement('p');
    message.innerHTML = `Tu nombre todo en <strong>mayúsculas</strong> sería: <strong>${mayusName}</strong>`;
    document.body.appendChild(message);
}

mayus();