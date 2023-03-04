function ejercicio7(){
  let num1, num2, num3;
  
  do {
    num1 = parseInt(prompt("Introduce el primer número:"));
  } while (num1.trim() === "" || isNaN(num1));
  
  do {
    num2 = parseInt(prompt("Introduce el segundo número:"));
  } while (num2.trim() === "" || isNaN(num2));
  
  do {
    num3 = parseInt(prompt("Introduce el tercer número:"));
  } while (isNaN(num3));
  
  let numMayor = num1;
  if (num2 > numMayor) {
    numMayor = num2;
  }
  if (num3 > numMayor) {
    numMayor = num3;
  }
  
  document.write("El número mas grande es: " + numMayor);
  
}
