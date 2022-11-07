let checked = false;
window.onload = function () {
  let submit = document.getElementById("submit");
  submit.disabled = !checked;

  let opciones = document.getElementById("opciones");
  opciones.style.display = "none";
  console.log(document.main_form.elements);

  console.log(document.getElementById("pregunta_si").value);
  console.log("Checked ", document.getElementById("pregunta_si").checked);

  document.getElementById("pregunta_si").onchange = changeValue;
  document.getElementById("pregunta_no").onchange = changeValue;
};

//El botón enviar solo debe estar habilitado si se han marcado los 2 checks
function enableButton() {
  checked =
    document.querySelector("#condiciones:checked") !== null &&
    document.querySelector("#privacidad:checked") !== null;
  if (checked) {
    let submit = document.getElementById("submit");
    submit.disabled = !checked;
  }
}

function showOptions() {
  let si = document.querySelector("#pregunta_si");
  let opciones = document.getElementById("opciones");
  if (si.checked) {
    opciones.style.display = "show";
  } else {
    opciones.style.display = "none";
  }
}

function changeValue(e) {
  console.log("changed" + e.target.value);
}
