
function somar2numeros (numero1, numero2) {

var soma = numero1 + numero2

return soma
}

numero1 = prompt('Digite o primeuro numero para somar:');
numero2 = prompt('Digite o segundo numero para somar:');

numero1 = parseInt(numero1)
numero2 = parseInt(numero2)
var soma = somar2numeros(numero1, numero2)

document.write('A soma dos dois numeros é:', soma);