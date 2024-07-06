//Variables
let numeroSecreto = 0;
let intento = 1;
let listaNumerosSorteados = [];
let numeroMaximo = 10;
let klk = 1

//Función Actual  para agregar parrafos y titulo
function asignarTextoElemento(elemento, texto) {
  let elementoHTML = document.querySelector(elemento);
  elementoHTML.innerHTML = texto;
  return;
}

//Esta función es de los intentos
function verificarIntento() {
  let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);


  //Esta condición me compara los numeros y me arroja mensajes segun mi respuesta
  if (numeroDeUsuario === numeroSecreto) {
    asignarTextoElemento(
      "p",
      `Acertaste el numero en ${intento} ${intento === 1 ? "vez" : "veces"}`
    );
    document.getElementById("reiniciar").removeAttribute("disabled");
  } else {
    //El usuario no acerto
    if (numeroDeUsuario > numeroSecreto) {
      asignarTextoElemento("p", "El numero secreto es menor");
    } else {
      asignarTextoElemento("p", "El numero secreto es mayor");
    }

    intento++;
    limpiarCaja();
  }
  return;
}

//Esta función es para generar el numero secreto
function generarNumeroSecreto() {
  let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;


  //si ya sorteamos todos los numeros
  if (listaNumerosSorteados.length == numeroMaximo) {
    asignarTextoElemento("p", "Ya se sortearon todos los numeros");
  } else {
    //si el numero generado esta incluido en la lista

    if (listaNumerosSorteados.includes(numeroGenerado)) {
      return generarNumeroSecreto();
    } else {
      listaNumerosSorteados.push(numeroGenerado);
      return numeroGenerado;
    }
  }
}

//En esta funcion existe otras funciones
function condicionesIniciales() {
  asignarTextoElemento("h1", "Juego del numero secreto!");
  asignarTextoElemento("p", `Indica un numero del 1 al ${numeroMaximo}`);
  numeroSecreto = generarNumeroSecreto();
  intento = 1;
  return;
}

//Reiniciar juego
function reiniciarJuego() {
  //limpiar caja
  limpiarCaja();

  //Indicar mensaje de intervalo
  //Generar el numero aleartorio
  //Inicializar el numero intentos
  condicionesIniciales();

  //Deshabilitar el boton del nuevo juego
  document.querySelector("#reiniciar").setAttribute("disabled", "true");
}

//función para que se limpie la caja de respuesta
function limpiarCaja() {
  document.querySelector("#valorUsuario").value = "";
}
condicionesIniciales();
