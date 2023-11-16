export function lastA(){
    let ultimaPosicion = -1

    for (let i = nombreCompleto.length - 1; i >= 0; i--) {
        if (nombreCompleto.charAt(i).toLowerCase() === 'a') {
            ultimaPosicion = i + 1;
            break; 
        }
    }

    if (ultimaPosicion !== -1) {
        document.write(`La <strong>última letra 'A'</strong> se encuentra en la posición <strong>${ultimaPosicion}</strong> del nombre`);
    } else {
        document.write("No se encontró la letra 'A' en el nombre.");
    }
    document.write(`<br>`)
    document.write(`<br>`)

}