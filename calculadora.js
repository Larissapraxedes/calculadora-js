const VISOR = document.getElementById('visor');


function  selecionarNumero (numero) {
  if (VISOR.innerHTML === '0') {
    VISOR.innerHTML = numero;
    return;
  }

  VISOR.innerHTML += numero;
}
