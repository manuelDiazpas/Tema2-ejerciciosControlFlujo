/** 18. Pedir dos números al usuario y mostrar
 * todos los números que se encuentran entre ellos
 */

var n1 = Number(prompt("Escribe un numero"));
var n2 = Number(prompt("Escribe otro numero"));

while (isNaN(n1) || isNaN(n2)) {
  alert("No sirve");
  var n1 = Number(prompt("Escribe un numero"));
  var n2 = Number(prompt("Escribe otro numero"));
}

if (n1 < n2) {
  for (let i = n1; i <= n2; i++) {
    document.write(i + " ");
  }
} else {
  for (let i = n2; i <= n1; i++) {
    document.write(i + " ");
  }
}
