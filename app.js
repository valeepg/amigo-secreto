let listaAmigos = [];
let input = document.getElementById("amigo");
let listaHTML = document.getElementById("listaAmigos");
let resultadoHTML = document.getElementById("resultado");

function esNombreValido(nombre) {
  // Verifica que no esté vacío, que tenga letras y que no contenga solo números
  const soloLetras = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;
  return soloLetras.test(nombre.trim());
}

function agregarAmigo() {
  let nombre = input.value.trim();
  nombre = capitalizarNombre(nombre);

  if (nombre === "") {
    alert("Por favor, ingresa un nombre.");
    input.value = '';
    return;
  }

  if (!esNombreValido(nombre)) {
    alert("El nombre debe contener solo letras.");
    input.value = '';
    return;
  }
  let existe = listaAmigos.some(amigo => amigo.toLowerCase() === nombre.toLowerCase());
  if (existe) {
    alert("Este nombre ya fue ingresado. Por favor, ingrese otro.");
    input.value = '';
    return;
  }

  listaAmigos.push(nombre);
  actualizarLista();
  input.value = "";
  input.focus();
}
function capitalizarNombre(nombre) {
  return nombre.charAt(0).toUpperCase() + nombre.slice(1).toLowerCase();
}


function actualizarLista() {
  listaHTML.innerHTML = "";

  listaAmigos.forEach((nombre, index) => {
    const li = document.createElement("li");
    li.textContent = `${index + 1}. ${nombre}`;
    listaHTML.appendChild(li);
  });
}

function sortearAmigo() {
  if (listaAmigos.length === 0) {
    alert("Agrega al menos un nombre antes de sortear.");
    return;
  }
  if (listaAmigos.length === 1) {
    alert("Agrega más de un nombre para sortear.");
    return;
  }
  

  let indice = Math.floor(Math.random() * listaAmigos.length);
  let nombreSorteado = listaAmigos[indice];

  resultadoHTML.innerHTML = `<li>🎉 El amigo secreto es: <strong>${nombreSorteado}</strong></li>`;
}

function reiniciarJuego() {
  if (!confirm("¿Estás seguro de que quieres reiniciar todo?")) {
    return;
  }

  listaAmigos = [];
  input.value = "";
  listaHTML.innerHTML = "";
  resultadoHTML.innerHTML = "";
  input.focus();
}

