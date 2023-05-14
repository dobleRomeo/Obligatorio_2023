document.querySelector("#btnRegistrarse").addEventListener("click", registrarCensista);
document.querySelector("#btnYaRegistrado").addEventListener("click", abrirIniciarSesion);
document.querySelector("#btnVolverMenuUsuarios").addEventListener("click", volverMenuUsuarios);

function registrarCensista() {
  let pRegistro = document.querySelector("#pRegistro");
  pRegistro.innerHTML = `Usuario registrado correctamente`;
}

function abrirIniciarSesion() {
  mostrar("#formIniciarSesion", "block");
  ocultar("#formRegistrarse", "none");
}

function volverMenuUsuarios() {
  mostrar("#seleccioneUsuario", "block");
  ocultar("#formRegistrarse", "none");
}
