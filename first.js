export function firstA(){
    let position = -1 

    for (let i = 0; i < allName.length; i++) {
        if (allName.charAt(i).toLowerCase() === 'a') {
            position = i + 1; 
            break; 
        }
    }

    if (position !== -1) {
        document.write(`La <strong>primera letra 'A'</strong> se encuentra en la posición <strong>${position}</strong> del nombre`)
    } else {
        document.write("No se encontró la letra 'A' en el nombre.")
    }
    document.write(`<br>`)
    document.write(`<br>`)
}