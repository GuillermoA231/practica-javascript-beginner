function ejercicio10() {
  let num;

  do {
    num = prompt("Ingresa un número:");
  } while (num.trim() === "" || isNaN(num));

  if (num % 2 === 0) {
    document.write("es divisible por 2.");
  } else if (num % 3 === 0) {
    document.write("es divisible por 3.");
  } else if (num % 5 === 0) {
    document.write("es divisible por 5.");
  } else if (num % 7 === 0) {
    document.write("es divisible por 7.");
  }
}
