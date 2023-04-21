var nome = prompt('Digite seu nome: ');
var altura = prompt('Digite dua altura em "cm": ');
var peso = prompt('Digite seu peso: ');


// Abaixo é o tratamento de string para Float
altura = parseFloat(altura);
peso = parseFloat(peso);

//Conversão de altura em centimento para metros
var alturaM = altura / 100;
 alturaM = alturaM * alturaM;

 // Calculo de IMC
var _M = peso / alturaM;

// Teste de condicionais para classificar o IMC
var classificacao ='';

if(_M < 16){
  classificacao = ' Baixo peso muito grave';
 } 

 else if(_M >= 16 && _M <= 16.99){
  classificacao = ' Baixo peso grave' 
 } 

 else if(_M >= 17 && _M <= 18.49){
  classificacao = ' Baixo peso';
 }

  else if(_M >= 18.50 && _M <= 24.99){
  classificacao = ' Peso normal';
 } 

 else if(_M >= 25 && _M <= 29.99){
  classificacao = 'Sobrepeso';
 } 

 else if(_M >= 30 && _M <= 34.99){classificacao = ' Obesidade grau I';

} 

 else if(_M >= 35 && imc <= 39.99){
  classificacao = ' Obesidade grau II';
}
 else if(_M > 40){
  classificacao = ' Obesidade grau III';
 }
 
document.write(nome, ' possui indece de massa corporal: ', _M, ' sendo classificado como ', classificacao )

 
