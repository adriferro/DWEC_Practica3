export function age(){
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth() + 1; 
    const ageBorn = date.getFullYear();

    let ageResult = age - ageBorn;

    if (month < monthBorn || (month === monthBorn && day < dayBorn)) {
        ageResult--;
    }

    document.write(`Tu <strong>edad</strong> es <strong>${ageResult}</strong> años`);
    document.write(`<br>`)
    document.write(`<br>`)
}