/*Crear una aplicación web que pida al usuario un número entero 
positivo. Si no es un número o no es
positivo, volveremos a pedir al usuario el número. 
La aplicación escribirá un triángulo con tantos
asteriscos como indique el usuario. 
Entre cada asterisco utilizar un espacio.
Ej: para el número 3
*
* *
* * *
*/

var n = parseInt(prompt("Introduce un número:"));

while (n < 0 || isNaN(n)) {
  n = parseInt(prompt("Debe de ser positivo y un número"));
}

for (var i = 1; i <= n; i++) {
  for (var t = 1; t <= i; t++) {
    document.write("* ");
  }
  document.write("<br>");
}
