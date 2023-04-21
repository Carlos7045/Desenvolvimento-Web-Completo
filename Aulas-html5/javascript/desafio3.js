
var numero1 = prompt('Digite um numero:');
var operacao = prompt('Qual operação você deseja realizar:');
var numero2 = prompt('Digite outro numero:');

// *** Tratamento das string para Int ***


function calc(numero1, numero2, operacao){

  numero1 = parseFloat(numero1);
  numero2 = parseFloat(numero2);

  var resultado = 0;

  if (operacao == soma){
    resultado = numero1 + numero2;

  }
  if (operacao == subtracao){
    resultado = numero1 - numero2;
  }
  return resultado;
}
document.write('O resultado é: ' + calc(numero1, numero2, operacao))


