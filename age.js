export function age(){
    const fechaActual = new Date();
    const diaActual = fechaActual.getDate();
    const mesActual = fechaActual.getMonth() + 1; 
    const anioActual = fechaActual.getFullYear();

    let edad = anioActual - anioNacimiento;

    if (mesActual < mesNacimiento || (mesActual === mesNacimiento && diaActual < diaNacimiento)) {
        edad--;
    }

    document.write(`Tu <strong>edad</strong> es <strong>${edad}</strong> años`);
    document.write(`<br>`)
    document.write(`<br>`)
}