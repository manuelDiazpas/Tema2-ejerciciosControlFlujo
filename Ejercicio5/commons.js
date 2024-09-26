/**5. Escribir un programa que muestre por pantalla los número pares entre 0 y 100 */

document.write("<p>Los numeros pares son:</p>");
for (i = 0; i <= 100; i++) {
  if (i % 2 == 0) {
    document.write(`${i} `);
  }
}
