document.querySelector("#btnIngresarDatos").addEventListener("click", ingresarDatos);
document.querySelector("#btnConsutaCensos").addEventListener("click", consultaCensos);
document.querySelector("#btnReasignarPersonas").addEventListener("click", reasignarPersonas);
document.querySelector("#btnVisualizarEstadisticas").addEventListener("click", verInfoEstadistica);
document.querySelector("#btnCerrarSesion").addEventListener("click", cerrarSesion);

function ingresarDatos() {
  mostrar("#formRealizarCenso", "block");
  ocultar("#formMenuCensista", "none");
}

function consultaCensos() {
  mostrar("#formConsultarCensos", "block");
  ocultar("#formMenuCensista", "none");
}

function reasignarPersonas() {
  mostrar("#formReasignar", "block");
  ocultar("#formMenuCensista", "none");
}

function verInfoEstadistica() {
  mostrar("#formInfoEstadistica", "block");
  ocultar("#formMenuCensista", "none");
}

function cerrarSesion() {
  mostrar("#seleccioneUsuario", "block");
  ocultar("#formMenuCensista", "none");
}
