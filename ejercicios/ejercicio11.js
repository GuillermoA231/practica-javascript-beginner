let num = prompt("Introduce un numero:");
let divisor = '';
if (num % 2 === 0) {
    divisor = '2';
} else if(num % 3 === 0){
    divisor = '3';
} else if(num % 5 === 0){
    divisor = '5';
} else if(num % 7 === 0){
    divisor = '7';
}

if (divisor != '') {
    document.write(`El número ${num} es divisible por ${divisor}`);
}