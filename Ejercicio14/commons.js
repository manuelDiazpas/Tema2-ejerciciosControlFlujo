/**Realizar la carga del lado de un cuadrado, mostrar por pantalla 
 * el perímetro del mismo 
 * (El perímetro de un cuadrado se calcula multiplicando 
 * el valor del lado por cuatro)

 */

var n1 = Number(prompt("Escribe la medida del lado de un cuadrado"));

while (isNaN(n1)) {
  alert("No sirve");
  var n1 = Number(prompt("Escribe la medida del lado de un cuadrado"));
}

n1 = n1 * 4.0;

document.write("El perímetro del cuadrado es: " + n1);
