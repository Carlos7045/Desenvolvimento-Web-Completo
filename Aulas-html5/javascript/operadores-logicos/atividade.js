var nome = prompt('Digite seu nome:')
var idade = prompt('Digite sua idade')


if (idade >= 0 && idade < 15) {
  document.write(nome, 'É Criança');
}
if (idade >= 15 && idade < 30 ) {
  document.write(nome, ' É jovem');
}
if (idade >= 30 && idade < 60 ) {
  document.write(nome, ' É Adulto');
}
if (idade > 60) {
  document.write(nome, ' É idoso');
}

Questão 1
var idade = prompt('Digite a idade');

if(idade >= 0 && idade < 15){
 alert('Criança');
}

if(idade >= 15 && idade < 30){
 alert('Jovem');
}

if(idade >= 30 && idade < 60){
 alert('Adulto');
}

if(idade >= 60){
 alert('Idoso');
} 

