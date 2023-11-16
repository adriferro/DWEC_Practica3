function randomNum() {
    const num = Math.random();
    const random = Math.floor(num * 101);

    // Crear un mensaje y agregarlo al cuerpo del documento
    const message = document.createElement('p');
    message.innerHTML = `Ejemplo número al azar entre 0 y 100: <strong>${random}</strong>`;
    document.body.appendChild(message);
}

randomNum();