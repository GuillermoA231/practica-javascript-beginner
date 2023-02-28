let num1 = parseInt(prompt("Introduce el primer número:"));
let num2 = parseInt(prompt("Introduce el segundo número:"));
let num3 = parseInt(prompt("Introduce el tercer número:"));
let numMayor = num1;
if (num2 > numMayor) {
  numMayor = num2;
}
if (num3 > numMayor) {
  numMayor = num3;
}

document.write("El número mas grande es: " + numMayor);
