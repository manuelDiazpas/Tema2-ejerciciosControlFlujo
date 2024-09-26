var n = parseInt(prompt("Introduce un número:"));

while (n < 0 || isNaN(n)) {
  n = parseInt(prompt("Debe de ser positivo y un número"));
}

for (var i = n; i > 0; i--) {
  for (var t = i; t > 0; t--) {
    document.write(`${t} `);
  }
  document.write("<br>");
}
