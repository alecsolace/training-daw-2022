window.onload = function (e) {
  console.log("documento cargado");

  // document.getElementsByTagName('h1')[0].innerText = 'Changed from JS!!'
  /**
   * Cambiar el título del segundo h2
   * Seleccionar el elemento con id == username
   * Cambiar el color de todos los .first que estén dentro de un artículo
   * Seleccionar todos lo elementos li con class == item
   * Seleccionar todos lo buttons dentro de class == buttons
   * Cambiar el código de fondo del primer párrafo
   * Cambiar el color de frente (forecolor) de los elementos buttons dentro de class == buttons
   */
  document.querySelectorAll("h2")[1].innerHTML("TEST");
  document.getElementById("username");
  document.querySelectorAll("li .item");
  document.querySelectorAll("button .buttons");
};
