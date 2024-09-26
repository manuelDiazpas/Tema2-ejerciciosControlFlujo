/**13. Calcular y mostrar la media de 3 números leídos por el teclado.
 *  Si el promedio es mayor o igual a 7
    mostrar por pantalla ‘Promocionado’
 */

var n1 = parseInt(prompt("Escribe un numero"));
var n2 = parseInt(prompt("Escribe otro numero"));
var n3 = parseInt(prompt("Escribe un ultimo numero"));

while (isNaN(n1) || isNaN(n2) || isNaN(n3)) {
  alert("No sirve");
  var n1 = parseInt(prompt("Escribe un numero"));
  var n2 = parseInt(prompt("Escribe otro numero"));
  var n3 = parseInt(prompt("Escribe un ultimo numero"));
}

var final = (n1 + n2 + n3) / 3;

document.write("La media es: " + final.toFixed(2));
