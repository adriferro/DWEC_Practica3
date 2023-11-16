function newWindow() {
    const windowButton = document.createElement('button');
    windowButton.innerHTML = "Abrir ventana";
    windowButton.id = "window";
    document.body.appendChild(windowButton);

    const restartButton = document.createElement('button');
    restartButton.innerHTML = "Reiniciar";
    restartButton.id = "restart";
    document.body.appendChild(restartButton);
}

newWindow();

const ventana = document.getElementById("window");

ventana.addEventListener("click", () => {
    const nuevaVentana = "resizable=no";

    window.open("http://127.0.0.1:5500/templates/nueva-ventana.html", "_blank", nuevaVentana);
});

const restart = document.getElementById("restart");

restart.addEventListener("click", () => {
    window.location.href = "http://127.0.0.1:5500/index.html";
});
