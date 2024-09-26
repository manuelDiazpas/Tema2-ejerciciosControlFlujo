/** 19. Se ingresan por teclado tres números,
 * si al menos uno de los valores ingresados es menor a 10,
 * imprimir en la página la leyenda ‘Alguno de los números
 * es menor a diez’
 */

var n1 = Number(prompt("Escribe un numero"));
var n2 = Number(prompt("Escribe otro numero"));
var n3 = Number(prompt("Escribe un ultimo numero"));

while (isNaN(n1) || isNaN(n2) || isNaN(n3)) {
  alert("No sirve");
  var n1 = Number(prompt("Escribe un numero"));
  var n2 = Number(prompt("Escribe otro numero"));
  var n3 = Number(prompt("Escribe un ultimo numero"));
}

if (n1 < 10 || n2 < 10 || n3 < 10) {
  document.write("Alguno de los números es menor a diez");
}
