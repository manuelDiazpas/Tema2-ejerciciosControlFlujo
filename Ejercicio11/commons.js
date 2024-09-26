/**11. Crear una aplicación web en la que se pida el nombre, los apellidos, el salario (número con decimales) y la
edad de una persona(un número entero). Suponemos que los datos están correctamente.
La página indicará el nombre y apellidos, edad y el salario según lo siguiente:
- si el salario es mayor de 2000 euros, no cambiará
- si el salario está entre 1000 y 2000:
  1. si además la edad es mayor de 45 años, se sube un 3%.
  2. si además la edad es menor de 45 o igual, se sube un 10%
- si el salario es menor de 1000
  1. los menores de 30 años cobrarán exactamente 1100 euros
  2. si la edad es de 30 a 45 años, el salario sube un 3%
  3. A los mayores de 45 sube un 15%
 */

var nom = prompt("Introduce tu nombre:");
var ap = prompt("Introduce tus apellidos:");
var sal = Number(prompt("Introduce tu salario:"));
var ed = parseInt(prompt("Introduce tu edad:"));

if (sal >= 1000 && sal <= 2000) {
  if (ed > 45) {
    sal = sal + sal * 0.03;
  } else {
    sal = sal + sal * 0.1;
  }
} else if (sal < 1000) {
  if (ed < 30) {
    sal = 1100;
  } else if (ed >= 30 && ed <= 45) {
    sal = sal + sal * 0.03;
  } else {
    sal = sal + sal * 0.15;
  }
}

document.write(
  "El trabajador " +
    nom +
    " " +
    ap +
    ", de edad " +
    ed +
    " anyos, tiene un salario de " +
    sal +
    " €"
);
