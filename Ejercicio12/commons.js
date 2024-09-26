/**12. Dada una cadena mostrarla al revés por pantalla
Ej: “Hoy es viernes” mostrar: ”senreiv se yoH”
 */

var frase = prompt("Escribe una frase");

var reverse = "";

for (i = frase.length - 1; i >= 0; i--) {
  reverse += frase.charAt(i);
}

document.write(reverse);
