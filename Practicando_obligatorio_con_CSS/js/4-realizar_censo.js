document.querySelector("#btnGuardarCenso").addEventListener("click", guardarCenso);
document.querySelector("#btnVolverMenuCensista").addEventListener("click", volverMenuCensista);

function guardarCenso() {
  let pGuardarCenso = document.querySelector("#pGuardarCenso");
  pGuardarCenso.innerHTML = `Censo guardado correctamente`;
}

function volverMenuCensista() {
  mostrar("#formMenuCensista", "block");
  ocultar("#formRealizarCenso", "none");
}
