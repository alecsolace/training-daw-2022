window.onload = function (e) {
  console.log("documento cargado");

  // document.getElementsByTagName('h1')[0].innerText = 'Changed from JS!!'

  /* * Cambiar el título del segundo h2 */
  let h2s = document.getElementsByTagName("h2");
  h2s[1].innerHTML = "New text for the second h2";

  /* * Seleccionar el elemento con id == username */
  let username = document.getElementById("username");

  /* * Cambiar el color de todos los .first que estén dentro de un artículo */
  let firsts = document.querySelectorAll("article .first");
  for (const element of firsts) {
    element.style.color = "blue";
  }

  /* * Seleccionar todos lo elementos li con class == item */
  let items = document.querySelectorAll("li.item");

  /* * Seleccionar todos lo buttons dentro de class == buttons */
  let buttons = document.querySelectorAll(".buttons button");

  /* Cambiar el código de fondo del primer párrafo */
  let firstParagraph = document.querySelector("p");
  firstParagraph.style.backgroundColor = "red";

  /* Cambiar el color de frente (forecolor) de los elementos buttons dentro de class == buttons */
  for (const button of buttons) {
    button.style.color = "green";
  }
};
