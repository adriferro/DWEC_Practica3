export function firstA(){
    let posicion = -1 

    for (let i = 0; i < nombreCompleto.length; i++) {
        if (nombreCompleto.charAt(i).toLowerCase() === 'a') {
            posicion = i + 1; 
            break; 
        }
    }

    if (posicion !== -1) {
        document.write(`La <strong>primera letra 'A'</strong> se encuentra en la posición <strong>${posicion}</strong> del nombre`)
    } else {
        document.write("No se encontró la letra 'A' en el nombre.")
    }
    document.write(`<br>`)
    document.write(`<br>`)
}