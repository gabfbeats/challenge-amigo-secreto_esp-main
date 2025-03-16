//Declaración de Array encargado de almacenar los amigos ingresados.
let amigos = [];
//Función utilizada para que al oprimir la tecla enter los amigos sean ingresadosa a la lista.
document.getElementById('amigo').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      agregarAmigo()
    }
});
//Función encargada de activar nuevamente el cursor al ingresar amigos a la lista.
function enfocarInput(){
    document.getElementById('amigo').focus();
}
//Función para eliminar el texto que se encuentre en el input.
function resetearInput(){
    document.querySelector("#amigo").value = "";
}
//Función para reiniciar la lista de amigos ingresados.
function resetearLista(){
    amigos.length = 0;
    document.getElementById('listaAmigos').innerHTML = "";
    document.getElementById('resultado').innerHTML = "";
    resetearInput();
    enfocarInput();
}
//Función para ingresar amigos a la lista.
function agregarAmigo() {
  let nombreAmigo = document.getElementById("amigo").value;
  if (nombreAmigo.trim() === "") {
    alert("Por favor, inserte un nombre.");
  } else {
    amigos.push(nombreAmigo);
    resetearInput();
    mostrarListaAmigo();
    enfocarInput();
  }
}
//Función para mostrar los amigos ingresados en la lista correspondiente.
function mostrarListaAmigo() {
  let listaAmigos = document.querySelector("#listaAmigos");
  listaAmigos.innerHTML = "";
  for (let index = 0; index < amigos.length; index++) {
    const element = amigos[index];
    let listaHTML = document.createElement("li");
    listaHTML.textContent = element;
    listaAmigos.appendChild(listaHTML);
  }
}
//Función para tomar un nombre de la lista y mostrarlo como amigo sorteado.
function sortearAmigo() {
  let cantidadAmigos = amigos.length;
  if (cantidadAmigos === 0) {
    alert("Por favor, inserte un nombre antes de sortear");
  } else {
    let indiceAmigo = Math.floor(Math.random() * cantidadAmigos);
    let resultadoHTML = document.querySelector("#resultado");
    resultadoHTML.innerHTML = amigos[indiceAmigo];
  }
}