import { name, surname } from "./prompts.js";

function noFirstThree() {
    const fullName = name + " " + surname;
    const noThree = fullName.slice(3);

    const message = document.createElement('p');
    message.innerHTML = `Tu nombre <strong>menos las tres primeras letras</strong> sería: <strong>${noThree}</strong>`;
    document.body.appendChild(message);
}

noFirstThree();