document.querySelector("#btnBuscarCedulaInvitado").addEventListener("click", buscarCedula);
document.querySelector("#btnVolverMenuUsuarios2").addEventListener("click", volverMenuUsuarios2);

function buscarCedula() {
  mostrar("#formMenuInvitado", "block");
  ocultar("#formAccesoInvitado", "none");
}

function volverMenuUsuarios2() {
  mostrar("#seleccioneUsuario", "block");
  ocultar("#formAccesoInvitado", "none");
}
