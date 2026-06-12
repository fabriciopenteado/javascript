function somar() {
  const num1 = Number(prompt("Digite o primeiro número"));
  const num2 = Number(prompt("Digite o segundo número"));
  const soma = num1 + num2;
  alert(`O resultado da soma é ${soma}`);
}
//somar();

function multiplicar() {
  const num1 = Number(prompt("Digite o primeiro número"));
  const num2 = Number(prompt("Digite o segundo número"));
  const mult = num1 * num2;
  alert(`O resultado da multiplicação é ${mult}`);
}

function subtracao() {
  const num1 = Number(prompt("Digite o primeiro número"));
  const num2 = Number(prompt("Digite o segudo número"));
  const sub = num1 - num2;
  alert(`O resultado da subtração é ${sub}`);
}

function divisao() {
  const num1 = Number(prompt("Digite o primeiro número"));
  const num2 = Number(prompt("Digite o segudo número"));
  const div = num1 / num2;
  alert(`O resultado da divisão é ${div}`);
}

function somarImputs() {
  console.log("somarImput");
  const num1 = Number(document.querySelector("#num1_soma").value);
  const num2 = Number(document.querySelector("#num2_soma").value);
  console.log(num1, num2);
}
