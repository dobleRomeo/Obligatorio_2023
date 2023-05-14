function mostrar(selector, display) {
  let seccion = document.querySelector(selector);
  seccion.style.display = display;
}

function ocultar(selector, display) {
  let seccion = document.querySelector(selector);
  seccion.style.display = display;
}

document.querySelector("#btnCensista").addEventListener("click", abrirMenuCensista);
document.querySelector("#btnInvitado").addEventListener("click", abrirMenuInvitado);

function abrirMenuCensista() {
  mostrar("#formRegistrarse", "block");
  ocultar("#seleccioneUsuario", "none");
}

function abrirMenuInvitado() {
  mostrar("#formAccesoInvitado", "block");
  ocultar("#seleccioneUsuario", "none");
}
