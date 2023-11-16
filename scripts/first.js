import { name, surname } from "./prompts.js";

function firstA() {
    let count = 0;

    const fullName = (name + " " + surname).toLowerCase();

    for (let i = 0; i < fullName.length; i++) {
        const char = fullName[i];
        count++;

        if (char === 'a') {
            const message = document.createElement('p');
            message.innerHTML = `<strong>La primera letra 'A'</strong> de tu nombre está en la posición: <strong>${count}</strong>`;
            document.body.appendChild(message);
            break;
        }
    }

    if (count === fullName.length) {
        const message = document.createElement('p');
        message.innerHTML = "Tu nombre no tiene ninguna 'A'";
        document.body.appendChild(message);
    }
}

firstA();