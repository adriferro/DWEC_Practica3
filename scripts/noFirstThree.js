import { name, surname } from "./prompts.js";

function noFirstThree() {
    const fullName = name + " " + surname;
    const noName = fullName.slice(3);

    const message = document.createElement('p');
    message.innerHTML = `Tu nombre <strong>menos las tres primeras letras</strong> sería: <strong>${noName}</strong>`;
    document.body.appendChild(message);
}

noFirstThree();