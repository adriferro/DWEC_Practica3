import { helloName } from "./hello.js";
import { lengthName } from "./length.js";
import { firstA } from "./first.js";
import { lastA } from "./last.js";
import { noFirstThree } from "./noFirstThree.js";
import { capitalLetters } from "./capitalLetters.js";
import { age } from "./age.js";
import { season } from "./season.js";
import { cosine } from "./cos.js";
import { biggerNumber } from "./biggerNum.js";
import { randomNumber } from "./random.js";

export let name;
export let surname;
export let date; 

window.addEventListener("load",logIn);
    
function logIn(){

    document.write("<h1 style='font-weight: bold;'>PRÁCTICA 3 - DWEC</h1>");
    document.write("<hr style='border: 1px solid black;' />");
    document.write(`<br>`)

    function inputDate(){
        let date1 = prompt("Introduzca su fecha de nacimiento en formato (dd/mm/yyyy):")

        if(!date1){
            alert("El campo no puede estar vacío.")
            inputDate()
        } else if(!/^\d{2}\/\d{2}\/\d{4}$/.test(date1)){
            alert("Fecha en formato incorrecto.")
            inputDate()
        } else{
            let partedDate = date1.split('/')
            let day = parseInt(parts[0])
            let month = parseInt(parts[1])
            let year = parseInt(parts[2])


            if(isNaN(day)||isNaN(month)||isNaN(year)||day===0||month===0){
                alert("Fecha no válida.")
            }else{
                date= new Date(year, month-1, day)

                if (isNaN(date.getTime())){
                    alert("Fecha no válida.")
                    inputDate()
                }
            }
        }
    }

    func
}


helloName();
lengthName();
firstA();
lastA();
noFirstThree();
capitalLetters();
age();
season();
cosine();
biggerNumber();
randomNumber();
