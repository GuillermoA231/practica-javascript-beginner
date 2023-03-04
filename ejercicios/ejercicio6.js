function ejercicio6(){
  let num1 = 0;
  let num2 = 0;
  
  do {
    num1 = parseInt(prompt("Contame un número:"));
  } while (num1.trim() === "" || isNaN(num1));
  
  do {
    num2 = parseInt(prompt("tirame otro número bro:"));
  } while (num2.trim() === "" || isNaN(num2));
  
  if(numero1 > numero2){
    document.write("El número más fachero es: " + numero1);
  } else if(numero2 > numero1){
    document.write("El número más grandote es: " + numero2);
  } else {
    document.write("Los dos números son iguales guachin, fijate bien que pones");
  }
  
}