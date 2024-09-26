/**Escribe un programa que solicite por pantalla un tipo de motor: los valores permitidos son 1,2,3 y 4
1. Si el tipo de motor es 0, mostrar un mensaje indicando “No hay establecido un valor definido para el
tipo de bomba”.
2. Si el tipo de motor es 1, mostrar un mensaje indicando “La bomba es una bomba de agua”.
3. Si el tipo de motor es 2, mostrar un mensaje indicando “La bomba es una bomba de gasolina”.
4. Si el tipo de motor es 3, mostrar un mensaje indicando “La bomba es una bomba de hormigón”.
5. Si el tipo de motor es 4,mostrar un mensaje indicando “La bomba es una bomba de pasta alimenticia”.
6. Si no se cumple ninguno de los valores anteriores mostrar el mensaje “No existe un valor valido para
tipo de bomba” */

var motor = parseInt(prompt("Indique un tipo de motor (1,2,3,4)"));

switch (motor) {
  case 0:
    document.write(
      "No hay establecido un valor definido para el tipo de bomba"
    );
    break;
  case 1:
    document.write("La bomba es una bomba de agua");
    break;
  case 2:
    document.write("La bomba es una bomba de gasolina");
    break;
  case 3:
    document.write("La bomba es una bomba de hormigón");
    break;
  case 4:
    document.write("La bomba es una bomba de pasta alimenticia");
  default:
    document.write("No existe un valor valido para tipo de bomba");
}
