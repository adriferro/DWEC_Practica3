import { date } from "./prompts";

function seasonBirth() {
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const year = date.getFullYear();

    let season;
    if ((month === 3 && day >= 20) || (month > 3 && month < 6) || (month === 6 && day < 21)) {
        season = "Primavera";
    } else if ((month === 6 && day >= 21) || (month > 6 && month < 9) || (month === 9 && day < 23)) {
        season = "Verano";
    } else if ((month === 9 && day >= 23) || (month > 9 && month < 12) || (month === 12 && day < 22)) {
        season = "Otoño";
    } else {
        season = "Invierno";
    }

    const message = document.createElement('p');
    message.innerHTML = `Naciste un feliz día de <strong>${season}</strong> del <strong>${year}</strong>`;
    document.body.appendChild(message);
}

seasonBirth();