/*1. Crear una página que pida una nota a través de un cuadro de entrada de texto (prompt) :
1. Escribir en pantalla si es mayor o igual que 5, es decir, si ha aprobado.
2. Escribir en pantalla si ha aprobado o ha suspendido.*/

let nota = prompt("Introduce una nota");

nota >= 5 ? document.write("Ha aprobado") : document.write("Ha suspendido");
