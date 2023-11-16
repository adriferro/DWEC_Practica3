export function season(){
    let seasonBorn = '';

    if (monthBorn >= 1 && monthBorn <= 12) {
        if (monthBorn >= 3 && monthBorn <= 5) {
            seasonBorn = 'Primavera';
        } else if (monthBorn >= 6 && monthBorn <= 8) {
            seasonBorn = 'Verano';
        } else if (monthBorn >= 9 && monthBorn <= 11) {
            seasonBorn = 'Otoño';
        } else {
            seasonBorn = 'Invierno';
        }

        document.write(`Naciste un feliz dia de <strong>${seasonBorn}</strong> del año <strong>${ageBorn}</strong>`);
    } else {
        document.write('El mes de nacimiento ingresado no es válido.');
    }
    document.write(`<br>`)
    document.write(`<br>`)
}