document.querySelector("#btnEditarDatos").addEventListener("click", editarDatos);
document.querySelector("#btnEliminarDatos").addEventListener("click", eliminarDatos);
document.querySelector("#btnListaCensados").addEventListener("click", verListaCensados);
document.querySelector("#btnSalir").addEventListener("click", salir);

function editarDatos() {
  mostrar("#formEditarDatos", "block");
  ocultar("#formMenuInvitado", "none");
}

function eliminarDatos() {
  mostrar("#formEliminarDatos", "block");
  ocultar("#formMenuInvitado", "none");
}

function verListaCensados() {
  mostrar("#formListaCensados", "block");
  ocultar("#formMenuInvitado", "none");
}

function salir() {
  mostrar("#seleccioneUsuario", "block");
  ocultar("#formMenuInvitado", "none");
}
