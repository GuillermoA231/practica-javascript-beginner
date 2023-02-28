let frase = prompt("Introduce una frase:");
let vocales = "";

for (let i = 0; i < frase.length; i++) {
  let letra = frase.substring(i, i + 1);
  if ("AEIOUaeiou".indexOf(letra) !== -1) {
    vocales += letra + " ";
  }
}

document.write("Las vocales que aparecen en la frase son: " + vocales);