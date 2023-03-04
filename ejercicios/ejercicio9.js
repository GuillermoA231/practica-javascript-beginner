function ejercicio9() {
  let frase;
  let vocales = "";
  do {
    frase = prompt("Introduce una frase:");
    frase = frase.trim();
  } while (
    frase === null ||
    frase === "" ||
    frase.trim() === "" ||
    !isNaN(frase)
  );

  for (let i = 0; i < frase.length; i++) {
    let letra = frase.substring(i, i + 1);
    if ("AEIOUaeiou".indexOf(letra) !== -1) {
      vocales += letra + " ";
    }
  }
  if (vocales === "") {
    document.write("La frase: '" + frase + "' No contiene vocales.");
  } else {
    document.write("Las vocales que aparecen en la frase son: " + vocales);
  }
}
