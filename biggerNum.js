export function biggerNumber(){
 
    function encontrarMayorNumero(numeros) {
        let mayor = numeros[0];

        for (let i = 1; i < numeros.length; i++) {
            if (numeros[i] > mayor) {
                mayor = numeros[i];
            }
        }

        return mayor;
    }

    const numeros = [34, 67, 23, 75, 35, 19];
    const mayorNumero = encontrarMayorNumero(numeros);
    document.write(`El número mayor de <strong>(34, 67, 23, 75, 35, 19)</strong> es ${mayorNumero}`);
    document.write(`<br>`)
    document.write(`<br>`)
}