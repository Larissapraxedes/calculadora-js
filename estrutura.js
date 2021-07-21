let nome = "chico";
let idade = 42;
let cidade = "Fortaleza";
let status = true;
let saldo_bancario = -987.12;


function carregarDados() {
  document.getElementById('nome').innerHTML += nome;
  document.getElementById('cidade').innerHTML += cidade;
  document.getElementById('idade').innerHTML += idade;
  document.getElementById('status').innerHTML += status;
  document.getElementById('saldo').innerHTML += saldo_bancario;
}
