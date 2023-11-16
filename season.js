export function season(){
    let estacion = '';

    if (mesNacimiento >= 1 && mesNacimiento <= 12) {
        if (mesNacimiento >= 3 && mesNacimiento <= 5) {
            estacion = 'Primavera';
        } else if (mesNacimiento >= 6 && mesNacimiento <= 8) {
            estacion = 'Verano';
        } else if (mesNacimiento >= 9 && mesNacimiento <= 11) {
            estacion = 'Otoño';
        } else {
            estacion = 'Invierno';
        }

        document.write(`Naciste un feliz dia de <strong>${estacion}</strong> del año <strong>${anioNacimiento}</strong>`);
    } else {
        document.write('El mes de nacimiento ingresado no es válido.');
    }
    document.write(`<br>`)
    document.write(`<br>`)
}