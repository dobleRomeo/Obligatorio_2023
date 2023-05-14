document.querySelector("#btnGuardarCensoInvitado").addEventListener("click", guardarCensoInv);
document.querySelector("#btnVolverMenuInvitado").addEventListener("click", volverMenuInvitado);

function guardarCensoInv() {
  let pGuardarCensoInv = document.querySelector("#pGuardarCensoInv");
  pGuardarCensoInv.innerHTML = `Censo guardado`;
}

function volverMenuInvitado() {
  mostrar("#formMenuInvitado", "block");
  ocultar("#formEditarDatos", "none");
}
