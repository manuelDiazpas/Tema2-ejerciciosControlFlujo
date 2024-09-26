/**
 * 2. Crear una página que pida un número entre 0 y 23:
1. Si no está entre esos valores, volver a preguntar el número.
2. Si es correcto:
1. Escribir por pantalla “Buenos días” si el valor está entre 6 y 11
2. Escribir por pantalla “Buenas tardes” si el valor está entre 12 y 20
3. Escribir por pantalla “Buenas noches” si el valor está entre 21 y 6
*/

var num = Number(prompt("Introduce un número entre el 0 y el 23"));

while (num < 0 || num > 23) {
  num = Number(prompt("Número no valido. Pruebe de nuevo"));
}

if (num > 5 && num <= 11) {
  document.write("Buenos días");
} else if (num > 11 && num <= 20) {
  document.write("Buenas tardes");
} else {
  document.write("Buenas noches");
}
