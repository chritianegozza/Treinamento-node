//projeto de calculadora //
//soma
var operacao= "soma";//você mudando a expressão operacao  soma //
var num1 = 4;
var num2 = 3;
var resultado = 0;

if(operacao === "soma"){
  resultado = num1 + num2;
} else if (operacao === "subtracao"){
    resultado = num1 - num2;
} else if (operacao === "multiplicacao"){
    resultado = num1 * num2;
 } else if (operacao === "divisao") {
    resultado = num1 / num2;

 }
 console.log(resultado);

 //subtraçao//
 var operacao= "subtracao"; //outro exemplo conta de menos /
var num1 = 4;
var num2 = 3;
var resultado = 0;

if(operacao === "soma"){
  resultado = num1 + num2;
} else if (operacao === "subtracao"){
    resultado = num1 - num2;
} else if (operacao === "multiplicacao"){
    resultado = num1 * num2;
 } else if (operacao === "divisao") {
    resultado = num1 / num2;

 }
 console.log(resultado);

 //multiplicação//
 var operacao= "multiplicacao";// conta de multiplicação
var num1 = 4;
var num2 = 3;
var resultado = 0;

if(operacao === "soma"){
  resultado = num1 + num2;
} else if (operacao === "subtracao"){
    resultado = num1 - num2;
} else if (operacao === "multiplicacao"){
    resultado = num1 * num2;
 } else if (operacao === "divisao") {
    resultado = num1 / num2;

 }
 console.log(resultado);

 //divisão
 var operacao= "divisao"; //divisão 
 var num1 = 4;
 var num2 = 3;
 var resultado = 0;
 
 if(operacao === "soma"){
   resultado = num1 + num2;
 } else if (operacao === "subtracao"){
     resultado = num1 - num2;
 } else if (operacao === "multiplicacao"){
     resultado = num1 * num2;
  } else if (operacao === "divisao") {
     resultado = num1 / num2;
 
  }
  console.log(resultado);
 

//resto
var operacao= "resto"; //resto 
 var num1 = 5;
 var num2 = 2;
 var resultado = 0;
 
 if(operacao === "soma"){
   resultado = num1 + num2;
 } else if (operacao === "subtracao"){
     resultado = num1 - num2;
 } else if (operacao === "multiplicacao"){
     resultado = num1 * num2;
  } else if (operacao === "divisao") {
     resultado = num1 / num2;
 } else if (operacao === "resto") {
     resultado = num1 % num2;
 }
  console.log(resultado);
 
//porcentagem
var operacao= "porcentagem"; //porcentagem 
 var num1 = 500;
 var num2 = 20;
 var resultado = 0;
 if(operacao === "soma"){
   resultado = num1 + num2;
 } else if (operacao === "subtracao"){
     resultado = num1 - num2;
 } else if (operacao === "multiplicacao"){
     resultado = num1 * num2;
  } else if (operacao === "divisao") {
     resultado = num1 / num2;
 } else if (operacao === "resto") {
     resultado = num1 % num2;
 } else if (operacao === "porcentagem") {
     resultado = num1 * num2 / 100;
 }
  console.log(resultado);
 
//calculadora sem mudar o codigo fonte
console.log(process.argv);

var operacao= process.argv [2];  
 var num1 = parseInt(process.argv[3]);  //comando parseInt converte string e numero
 var num2 = parseInt(process.argv[4]);

 var resultado = 0;

 if(operacao === "soma"){
   resultado = num1 + num2;
 } else if (operacao === "subtracao"){
     resultado = num1 - num2;
 } else if (operacao === "multiplicacao"){
     resultado = num1 * num2;
  } else if (operacao === "divisao") {
     resultado = num1 / num2;
 } else if (operacao === "resto") {
     resultado = num1 % num2;
 } else if (operacao === "porcentagem") {
     resultado = num1 * num2 / 100;
 }
  console.log(resultado);