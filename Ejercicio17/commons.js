/** 17. Solicitar un número del 1 al 10
 * y mostrar la tabla de multiplicar de dicho número
 */

var numero = Number(prompt("Escribe un numero"));

while (isNaN(numero)) {
  alert("No sirve");
  var numero = Number(prompt("Escribe un numero"));
}

for (let i = 1; i < 11; i++) {
  document.write(`${numero} x ${i} = ${numero * i}`);
  document.write("<br>");
}
