document.querySelector("#btnEliminarDatosInv").addEventListener("click", eliminarDatosInv);
document.querySelector("#btnVolverMenuInvitado2").addEventListener("click", volverMenuInvitado2);

function eliminarDatosInv() {
  let pEliminarDatos = document.querySelector("#pEliminarDatos");
  pEliminarDatos.innerHTML = `Datos eliminados`;
}

function volverMenuInvitado2() {
  mostrar("#formMenuInvitado", "block");
  ocultar("#formEliminarDatos", "none");
}
