/**Escribe un programa que pida por mensaje prompt un tipo de topping para comprar un helado. Los valores
serán: oreo/kitkat/brownie/lacasitos
Se tendrá que mostrar por pantalla el precio del helado de forma que:
1. El helado sin topping cuesta 1.90€.
2. El topping de oreo cuesta 1€.
3. El topping de kitkat cuesta 1.50€.
4. El topping de brownie cuesta 0.75€.
5. El topping de lacasitos cuesta 0.95€.
6. En caso de no disponer del topping solicitado por el usuario el programa escribirá por pantalla “No
tenemos este topping, lo sentimos” y a continuación informar del precio del helado sin ningun topping.
7. Si tiene el topping, el programa escribe por consola el precio del helado con el topping seleccionado. */

var topin = prompt(
  "Indique uno de los siguientes toppings: : oreo/kitkat/brownie/lacasitos"
).toLowerCase();

var helado = 1.9;
var total;

switch (topin) {
  case "oreo":
    total = helado + 1;
    document.write(`El helado le cuesta ${total} €`);
    break;
  case "kitkat":
    total = helado + 1.5;
    document.write(`El helado le cuesta ${total} €`);
    break;
  case "brownie":
    total = helado + 0.75;
    document.write(`El helado le cuesta ${total} €`);
    break;
  case "lacasitos":
    total = helado + 0.95;
    document.write(`El helado le cuesta ${total.toFixed(2)} €`);
    break;
  default:
    total = helado;
    document.write(
      `El helado le cuesta ${total} € al no haber seleccionado un topping existente`
    );
}
