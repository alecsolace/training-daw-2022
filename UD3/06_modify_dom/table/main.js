let index = 1;
function onClick() {
  let tbody = document.getElementsByTagName("tbody")[0];

  let tr = document.createElement("tr");
  let td = document.createElement("td");
  td.innerText = index;
  tr.appendChild(td);

  td = document.createElement("td");
  td.innerText = "Example";
  tr.appendChild(td);

  td = document.createElement("td");
  td.innerText = "Surname";
  tr.appendChild(td);

  td = document.createElement("td");
  td.innerHTML = `<a href="http://localhost/edit/${index}">Acción</a>`;
  tr.appendChild(td);

  tbody.appendChild(tr);
  console.log(`Added row #${index}`);
  index++;

  /*
   * Revisar, entender y comprender el código proporcionado
   * Hacer que el ID se autoincremental (mediante una variable)
   * Añadir una columna “Acciones” en el HTML
   * Añadir, a los datos que se incluyen cada que se pulsa el botón, un enlace a la url ‘http://localhost/edit/id’
   */
}
