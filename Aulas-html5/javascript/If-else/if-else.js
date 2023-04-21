var nome = prompt('Nome do aluno:');
var idade = prompt('Idade do Aluno:');
var nota1 = prompt('Dgite a 1ª nota:');
var nota2 = prompt('Dgite a 2ª nota:');
var nota3 = prompt('Dgite a 3ª nota:');
var nota4 = prompt('Dgite a 4ª nota:');

var notaGeral = nota1 + nota2 + nota3 + nota4;

var media = 7



if(notaGeral >= media){
  document.write('O ', nome,  ', Passou de ano, com a nota:', notaGeral );
}
else {
  document.write('O aluno', nome, 'Não passou de ano, sua nota foi;', notaGeral);
}