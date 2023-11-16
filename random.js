export function randomNumber(){
    function generateNumberRandomly() {
        return Math.floor(Math.random() * 101); 
    }

    const numberRandom = generateNumberRandomly();
    document.write(`El número aleatorio entre 0 y 100 es: <strong>${numberRandom}</strong>`);
}