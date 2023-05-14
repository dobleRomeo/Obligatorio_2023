document.querySelector("#btnReasignar").addEventListener("click", reasignarPersona);
document.querySelector("#btnVolverMenuCensista3").addEventListener("click", volverMenuCensista3);

function reasignarPersona() {
  let pReasignacion = document.querySelector("#pReasignacion");
  pReasignacion.innerHTML = `Reasignado correctamente`;
}

function volverMenuCensista3() {
  mostrar("#formMenuCensista", "block");
  ocultar("#formReasignar", "none");
}
