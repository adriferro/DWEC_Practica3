//

export let name;
export let surname;
export let date;

function inputName() {
    name = prompt("Por favor, introduzca su nombre");

    if (name === "") {
        alert("El campo no puede estar vacío");
        inputName();
    } else if (!/^[\p{L}\s]+$/u.test(name)) {
        alert("Nombre inválido");
        inputName();
    }
}


function inputSurname() {
    surname = prompt("Por favor, introduzca sus apellidos");

    if (surname === "") {
        alert("El campo no puede estar vacío");
        inputSurname();
    } else if (!/^[\p{L}\s]+$/u.test(surname)) {
        alert("Apellidos inválidos");
        inputSurname();
    }
}

function dateInput() {
    let dateStr = prompt("Por favor, introduzca su fecha de nacimiento dd/mm/aaaa");

    if (!dateStr) {
        alert("El campo no puede estar vacío");
        dateInput();
    } else if (!/^\d{2}\/\d{2}\/\d{4}$/.test(dateStr)) {
        alert("Formato incorrecto");
        dateInput();
    } else {
        let parts = dateStr.split('/');
        let day = parseInt(parts[0]);
        let month = parseInt(parts[1]);
        let year = parseInt(parts[2]);

        if (isNaN(day) || isNaN(month) || isNaN(year) || day === 0 || month === 0 || year === 0) {
            alert("La fecha no es válida");
            dateInput();
        } else {
            date = new Date(year, month - 1, day);

            if (isNaN(date.getTime())) {
                alert("Fecha no válida");
                dateInput();
            }
        }
    }
}

inputName();
inputSurname();
dateInput();
