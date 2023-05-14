document.querySelector("#btnIniciarSesion").addEventListener("click", iniciarSesion);
document.querySelector("#btnVolver").addEventListener("click", volverMenuUsuarios);

function iniciarSesion() {
  mostrar("#formMenuCensista", "block");
  ocultar("#formIniciarSesion", "none");
}

function volverMenuUsuarios() {
  mostrar("#formRegistrarse", "block");
  ocultar("#formIniciarSesion", "none");
}
