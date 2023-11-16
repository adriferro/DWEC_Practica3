function cosine(){
    const cosine180 = Math.cos(180 * Math.PI / 180);

    const message = document.createElement('p');
    message.innerHTML = `El <strong>coseno de 180</strong> grados es: ${cosine180}`;
    document.body.appendChild(message);
}

cosine()