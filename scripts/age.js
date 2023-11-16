import { date } from "./prompts.js";

function ageNum() {
    const dateNow = new Date();

    const difference = dateNow.getTime() - date.getTime();

    const age = Math.floor(difference / (1000 * 60 * 60 * 24 * 365.25));

    const message = document.createElement('p');
    message.innerHTML = `Su <strong>edad</strong> es: <strong>${age}</strong> años`;
    document.body.appendChild(message);

    return age;
}

ageNum();