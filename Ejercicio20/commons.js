/** 20. De un operario se conoce su sueldo y los años de antigüedad.
 * Se pide confeccionar un programa que lea los datos de entrada e informe:
a) Si el sueldo es inferior a 500 y su antigüedad es igual 
o superior a 10 años, otorgarle un aumento del 20%, 
mostrar el sueldo a pagar.
b) Si el sueldo es inferior a 500 pero su antigüedad es menor a 10 años, 
otorgarle un aumento de 5 %.
c) Si el sueldo es mayor o igual a 500 mostrar el sueldo en la página 
sin cambios
 */

var sueldo = Number(prompt("Escribe su sueldo"));
var antig = Number(prompt("Escribe sus años de antiguedad"));

while (isNaN(sueldo) || isNaN(antig)) {
  alert("No sirve");
  var sueldo = Number(prompt("Escribe un numero"));
  var antig = Number(prompt("Escribe otro numero"));
}

if (sueldo < 500 && antig >= 10) {
  sueldo = sueldo + sueldo * 0.2;
  document.write("Su sueldo es de " + sueldo + " €");
} else if (sueldo < 500 && antig < 10) {
  sueldo = sueldo + sueldo * 0.05;
  document.write("Su sueldo es de " + sueldo + " €");
} else if (sueldo >= 500) {
  document.write("Su sueldo es de " + sueldo + " €");
}
