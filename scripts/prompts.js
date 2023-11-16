// Adrián Fernández Rodríguez
// https://github.com/adriferro/DWEC_Practica3.git

export let name;
export let surname;
export let date;

function inputName() {
    name = prompt("Introduzca su nombre:");

    if (name === "") {
        alert("El campo no puede estar vacío.");
        inputName();
    } else if (!/^[\p{L}\s]+$/u.test(name)) {
        alert("Nombre inválido.");
        inputName();
    }
}


function inputSurname() {
    surname = prompt("Introduzca sus apellidos:");

    if (surname === "") {
        alert("El campo no puede estar vacío.");
        inputSurname();
    } else if (!/^[\p{L}\s]+$/u.test(surname)) {
        alert("Apellidos inválidos.");
        inputSurname();
    }
}

function dateInput() {
    let insertDate = prompt("Introduzca su fecha de nacimiento en formato (dd/mm/aaaa):");

    if (!insertDate) {
        alert("El campo no puede estar vacío.");
        dateInput();
    } else if (!/^\d{2}\/\d{2}\/\d{4}$/.test(insertDate)) {
        alert("Formato incorrecto.");
        dateInput();
    } else {
        let parts = insertDate.split('/');
        let day = parseInt(parts[0]);
        let month = parseInt(parts[1]);
        let year = parseInt(parts[2]);

        if (isNaN(day) || isNaN(month) || isNaN(year) || day === 0 || month === 0 || year === 0) {
            alert("Fecha inválida.");
            dateInput();
        } else {
            date = new Date(year, month - 1, day);

            if (isNaN(date.getTime())) {
                alert("Fecha inválida.");
                dateInput();
            }
        }
    }
}

inputName();
inputSurname();
dateInput();
