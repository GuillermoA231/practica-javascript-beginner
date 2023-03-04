function ejercicio5(){
    let num1 = 0;
    let num2= 0;
    
    do {
        num1 = parseInt(prompt("Introduce el primer número:"));
    } while (num1.trim() === "" ||isNan(num1));
    
    do {
        num2 = parseInt(prompt("Introduce el segundo número:"));
    } while (num2.trim() === "" ||isNan(num2));
    
    document.write("El resultado es: " + (num1 + num2));
}