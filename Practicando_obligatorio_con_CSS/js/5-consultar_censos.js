document.querySelector("#btnBuscarCedula").addEventListener("click", buscarCedula);
document.querySelector("#btnVolverMenuCensista2").addEventListener("click", volverMenuCensista2);

function buscarCedula() {
  let pCensoPorValidar = document.querySelector("#pCensoPorValidar");
  pCensoPorValidar.innerHTML = `Las cédulas encontradas son...`;
}

function volverMenuCensista2() {
  mostrar("#formMenuCensista", "block");
  ocultar("#formConsultarCensos", "none");
}
