import { date } from "./prompts.js";

function ageNum() {
    const currentDate = new Date();

    const timeDiff = currentDate.getTime() - date.getTime();

    const age = Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 365.25));

    const message = document.createElement('p');
    message.innerHTML = `Su <strong>edad</strong> es: <strong>${age}</strong> años`;
    document.body.appendChild(message);

    return age;
}

ageNum();