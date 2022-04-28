function printDigits(num) {
    let lastDigit;
    let reversed = 0;
    let number = Math.abs(num);

    while(number != 0){
    lastDigit = number % 10;
    reversed = reversed * 10 + lastDigit;
    number = Math.floor(number / 10);
    }

    if(num < 0){
        return -1 * reversed;
    }
    return reversed;
}

console.log(printDigits(-6789))

