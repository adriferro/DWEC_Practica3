export function lastA(){
    let lastPosition = -1

    for (let i = allName.length - 1; i >= 0; i--) {
        if (allName.charAt(i).toLowerCase() === 'a') {
            lastPosition = i + 1;
            break; 
        }
    }

    if (lastPosition !== -1) {
        document.write(`La <strong>última letra 'A'</strong> se encuentra en la posición <strong>${lastPosition}</strong> del nombre`);
    } else {
        document.write("No se encontró la letra 'A' en el nombre.");
    }
    document.write(`<br>`)
    document.write(`<br>`)

}