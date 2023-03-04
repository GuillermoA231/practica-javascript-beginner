function ejercicio5(){
    let num1 = 0;
    let num2= 0;
    
    do {
        num1 = parseInt(prompt("Introduce el primer número:"));
    } while (isNaN(num1));
    
    do {
        num2 = parseInt(prompt("Introduce el segundo número:"));
    } while (isNaN(num2));
    
    document.write("El resultado es: " + (num1 + num2));
}