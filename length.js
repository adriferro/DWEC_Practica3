import { name, surname } from "./prompts.js"

function lengthName(){
    const fullName = (name + " " + surname);

    const message = document.createElement('p');
    message.innerHTML = `Tu nombre completo (nombre y apellidos) tiene <strong>${fullName.length}</strong> caracteres, incluidos espacios`;
    document.body.appendChild(message);
}

lengthName()