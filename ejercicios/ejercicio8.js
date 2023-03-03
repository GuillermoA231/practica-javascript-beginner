let num = parseInt(prompt("Introduce un número:"));


do {
  num = parseInt(prompt("Introduce un número:"));
} while (num.trim() === "" || isNaN(num));


if (num % 2 === 0) {
  document.write("El número " + num + " es divisible por 2");
} else {
  document.write("El número " + num + " no es divisible por 2");
}
