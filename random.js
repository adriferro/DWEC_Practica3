export function randomNumber(){
    function generarNumeroAzar() {
        return Math.floor(Math.random() * 101); 
    }

    const numeroAzar = generarNumeroAzar();
    document.write(`El número aleatorio entre 0 y 100 es: <strong>${numeroAzar}</strong>`);
}