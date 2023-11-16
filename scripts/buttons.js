function createButton(text, id) {
    const button = document.createElement('button');
    button.innerHTML = text;
    button.id = id;
    document.body.appendChild(button);
    return button;
}

function openNewWindow() {
    const newWindowButton = createButton("Abrir ventana", "window");
    const restartButton = createButton("Reiniciar", "restart");

    newWindowButton.addEventListener("click", () => {
        const nuevaVentana = "resizable=no";
        window.open("http://127.0.0.1:5500/templates/newWindow.html", "_blank", nuevaVentana);
    });

    restartButton.addEventListener("click", () => {
        window.location.href = "http://127.0.0.1:5500/index.html";
    });
}

openNewWindow();

