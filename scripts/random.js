function randomNum() {
    const random = Math.floor(Math.random() * 101);

    const message = document.createElement('p');
    message.innerHTML = `Ejemplo número al azar entre 0 y 100: <strong>${random}</strong>`;
    document.body.appendChild(message);
}

randomNum();