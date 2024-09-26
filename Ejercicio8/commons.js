/**8. Crear una página que pida al usuario un número a través de un cuadro de lectura. Mostrar con una ventana
alert si el valor introducido es un número o no. */

var n = prompt("Introduce un número:");

if (n >= 0 || n <= 0) {
  alert("Es un número");
} else {
  alert("No es un número");
}
