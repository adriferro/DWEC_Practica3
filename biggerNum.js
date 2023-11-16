export function biggerNumber(){
 
    function encontrarBiggerNumber(numbers) {
        let big = numbers[0];

        for (let i = 1; i < numbers.length; i++) {
            if (numbers[i] > big) {
                big = numbers[i];
            }
        }

        return big;
    }

    const numbers = [34, 67, 23, 75, 35, 19];
    const biggerNumber = encontrarBiggerNumber(numbers);

    const message = document.createElement('p');
    message.innerHTML = `El número mayor de <strong>(34, 67, 23, 75, 35, 19)</strong> es ${biggerNumber}`;
    document.body.appendChild(message);
}

biggerNumber()