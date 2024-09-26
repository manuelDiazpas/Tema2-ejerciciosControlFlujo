/** Pedir la base y la altura y mostrar una 
 * figura con asteriscos en los lados de un rectángulo.
 Eje: base 6 y altura 3
* * * * * *
*         *
* * * * * *

 */

var base = Number(prompt("Escribe la base de un rectangulo"));
var altura = Number(prompt("Escribe la altura de un rectangulo"));

while (isNaN(base) || isNaN(altura)) {
  alert("No sirve");
  var base = Number(prompt("Escribe la base de un rectangulo"));
  var altura = Number(prompt("Escribe la altura de un rectangulo"));
}

for (i = 0; i < base; i++) {
  document.write("*");
}

document.write("<br>");

for (i = 0; i < altura; i++) {
  if (i == 0 || i == altura - 1) {
    document.write("*");
  }
  if (i == altura - 1) {
    break;
  }
  document.write("_");
}
