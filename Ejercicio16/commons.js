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

document.write("*".repeat(base) + "<br>");

for (let i = 0; i < altura - 2; i++) {
  document.write("*" + "&nbsp;&nbsp".repeat(base - 2) + "*" + "<br>");
}

if (altura > 1) {
  document.write("*".repeat(base));
}
