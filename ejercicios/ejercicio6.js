function ejercicio6(){
  let num1 = 0;
  let num2 = 0;
  
  do {
    num1 = parseInt(prompt("Contame un número:"));
  } while (isNaN(num1));
  
  do {
    num2 = parseInt(prompt("tirame otro número bro:"));
  } while (isNaN(num2));
  
  if(num1 > num2){
    document.write("El número más fachero es: " + num1);
  } else if(num2 > num1){
    document.write("El número más grandote es: " + num2);
  } else {
    document.write("Los dos números son iguales guachin, fijate bien que pones");
  }
  
}