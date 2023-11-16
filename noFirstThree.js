export function noFirstThree(){
    const nombreSinTresLetras = nombreCompleto.substring(3); 
    document.write(`Tu nombre completo <strong>menos las tres primeras letras</strong> es <strong>${nombreSinTresLetras}</strong>`);
    document.write(`<br>`)
    document.write(`<br>`)
}