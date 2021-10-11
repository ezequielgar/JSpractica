//escribe un program q solicite 2 nros y muestre en pantalla el mayor
let num1 = parseInt(prompt("Ingrese un Nro"));
console.log("Numero seleccionado: " + num1);
document.write("<br>");

let num2 = parseInt(prompt("Ingrese 2° Nro"));
console.log("Numero 2° seleccionado: " + num2);
document.write("<br>");


/*Estructura if
if(condicion logica){
    todas las lineas de codigo si es true
}else
{
    linea de codigo si es false
}
*/
document.write("<br>");
if(num1 > num2) {
    document.write("El numero mayor es: " + num1);    
}
 else{
     if(num1 == num2){
         document.write("Los numeros son iguales")
     }
      else{

          document.write("El numero mayor es: " + num2);
      }
 }


document.write("<br>");

//condicion logica and (se escribe &&)
// condicion logica or (se escribe ||)