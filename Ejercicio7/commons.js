/**7. Escribir un programa que muestre por pantalla los 50 número impares a partir de un número dado por el
usuario */

const LIMIT = 50;

var n = parseInt(prompt("Introduce un número:"));
var i = 0;
document.write("<p>Los 50 primeros números impares de ese número son: </p>");
do {
  if (n % 2 != 0) {
    document.write(n + " ");
    i++;
  }
  n++;
} while (i <= LIMIT);
