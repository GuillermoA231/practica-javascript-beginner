let nombreUsuario;

do {
  nombreUsuario = prompt("Por favor, introduce tu nombre(40 caracteres maximo):");
} while (nombreUsuario.trim() === "" ||nombreUsuario.length > 40 || !isNaN(nombreUsuario));

if (nombreUsuario) {
  document.write("Hola " + nombreUsuario);
} else {
  document.write("No ingresaste ningún nombre D:");
}
