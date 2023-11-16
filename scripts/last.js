import { name, surname } from "./prompts.js";

function lastA() {
    const fullName = (name + " " + surname).toLowerCase();

    const lastA = fullName.lastIndexOf('a') + 1;

    if (lastA === 0) {
        const message = document.createElement('p');
        message.innerHTML = "Tu nombre no contiene ninguna letra 'A'";
        document.body.appendChild(message);
    } else {
        const message = document.createElement('p');
        message.innerHTML = `<strong>La última letra 'A'</strong> de tu nombre está en la posición: <strong>${lastA}</strong>`;
        document.body.appendChild(message);
    }
}

lastA();