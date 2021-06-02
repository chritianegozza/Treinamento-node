//criação de calculadora com swith

console.log(process.argv);

var operacao= process.argv [2];  
 var num1 = parseInt(process.argv[3]);  //comando parseInt converte string e numero
 var num2 = parseInt(process.argv[4]);

 var resultado = 0;

 switch (operacao) {
     case "soma":
         resultado = num1 + num2;
         break;
     case "subtracao":
         resultado = num1 - num2;
         break;
     case "multiplicacao":
         resultado = num1 * num2;
         break;
     case "divisao":
         resultado = num1 / num2;
         break;
     case "resto":
         resultado = num1 % num2;
         break;
     case "porcentagem":
         resultado = num1 * num2 / 100;
         break;
         default:
         resultado = 0;        
         
 }
 
  console.log(resultado);
# Treinamento-node//projeto de calculadora //
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
//arrays//

var carros = ["gol", "palio","uno"];
console.log(carros);

var primeiroCarro = carros[0];
var segundoCarro = carros[1];
var terceiroCarro = carros [2];

console.log("primeira posicao: " + carros[0]);
console.log("segunda posicao: " + carros[1]);
console.log("terceira posicao: " + carros[2]);

//Quando você deseja mudar um item da lista basta fazer igual a baixo//
carros[2] = "Argo";

console.log(carros[2]);
console.log(terceiroCarro);  //a posição continuou mostrado o uno//

//tamanho do arrays//
console.log("tamanho do arrays: " + carros.length);

// pegar o ultimo elemento do arrays //
console.log("ultimo elemento do arrays: " + carros[carros.length - 1])

//adicionar mais um carro//
carros[3] = "Sandero";
console.log("ultimo elemento do arrays: " + carros[carros.length - 1] );


//Adicionar mais um, mas sem saber a posição que ele irá ficar.//
carros[carros.length] = "fiat";
console.log("ultimo elemento do arrays: " + carros[carros.length -1]);


//adicionar um com posição maior do o numero de itens e não é bom fazer isso
//carros[10] = "polo";
//console.log(carros);//

//inserir na ultima posição correta//
carros.push("fusca")
console.log(carros);


//com numero//
carros.push(123);
console.log(carros);

//if/else  se e senao//
//quando a é maior que b//
var a = 10;
var b = 5;
if(a > b) {
    //condicao a ser executada caso seja verdadeiro
    console.log("a maior do que b");
}  else{
    //senao, executa codigo abaixo
    console.log("b maior do que a");
}

//quando b é maior que a//
var a = 10;
var b = 50;
if(a > b) {
    //condicao a ser executada caso seja verdadeiro
    console.log("a maior do que b");
}  else{
    //senao, executa codigo abaixo
    console.log("b maior do que a");
}

//quando tentamos fazer que é igual, mas não arrumamos o else dá erro//
var a = 50;
var b = 50;
if(a > b) {
    //condicao a ser executada caso seja verdadeiro
    console.log("a maior do que b");
}  else{
    //senao, executa codigo abaixo
    console.log("b maior do que a");
}

//quando o valor é igual usar else if mas não acontece nada//
var a = 50;
var b = 50;
if(a > b) {
    //condicao a ser executada caso seja verdadeiro
    console.log("a maior do que b");
}  else if(b < a) {
    //senao, executa codigo abaixo
    console.log("b maior do que a");
}

//versão igual corrigido//
var a = 50;
var b = 50;
if(a > b) {
    //condicao a ser executada caso seja verdadeiro
    console.log("a maior do que b");
}  else if(b < a) {
    //senao, executa codigo abaixo
    console.log("b maior do que a");
}  else {
    console.log("a e b sao iguais");
}


//versão igual outra forma de fazer o =//
var a = 50;
var b = 50;
if(a > b) {
    //condicao a ser executada caso seja verdadeiro
    console.log("a maior do que b");
}  else if(b < a) {
    //senao, executa codigo abaixo
    console.log("b maior do que a");
}  else if( b === a) {
    console.log("a e b sao iguais");
}

//para sempre executar//
var a = 50;
var b = 40;
if(a > b) {
    //condicao a ser executada caso seja verdadeiro
    console.log("a maior do que b");
}  else if(b < a) {
    //senao, executa codigo abaixo
    console.log("b maior do que a");
}  else {
    console.log("a e b sao iguais");
}
if (a> b){
    console.log("executar somente se a > b");
}
console.log("sempre executar");

//outros operadores //

var c = 30;
var d = 30;
if (c >= d){
    console.log(" c maior ou igual a d");

}

//menor = //
var c = 40;
var d = 30;
if (c >= d){
    console.log(" c maior ou igual a d");

}
if ( d <= c) {
    console.log("d menor ou igual a c");
}

// dois iguais 
//menor = //
var c = 40;
var d = 40;
if (c >= d){
    console.log(" c maior ou igual a d");

}
if ( d <= c) {
    console.log("d menor ou igual a c");
}

// para comparar ==//
var e = 10;
var f = 10; 
if (e == f) {
    console.log("e é igual a f")
}

//fazer virar string deu erro //
var e = 10;
var f = "10"; 
if (e == f) {
    console.log("e é igual a f")
}

//diferente//
var g = 10;
var h = "10";
if (g != h) {
    console.log("g diferente de h");
}

//diferente strings//
var g = 10;
var h = "11";
if (g!= h) {
    console.log("g diferente de h");
}

//comparação juntas//
var i = 4;
var j = 3;
var k = 5;
var l = 7
if ((i > j) && (l > k)) {
    console.log("i maior que j");
}

//k maior que o i//
var i = 4;
var j = 3;
var k = 8;
var l = 7
if ((i > j) && (l > k)) {
    console.log("i maior que j");
}



//operador ou//

var i = 4;
var j = 3;
var k = 8;
var l = 7
if ((i > j) && (l > k)) {
    console.log("i maior que j");
}
if ((i === j) || (k === l)) {  //operador logico ou //
    console.log(" um dos dois eram validos");
}


//quando é valido
var i = 4;
var j = 4;
var k = 8;
var l = 7
if ((i > j) && (l > k)) {
    console.log("i maior que j");
}
if ((i === j) || (k === l)) {  //operador logico ou //
    console.log(" um dos dois eram validos");
}

//quando tem outro if

var i = 4;
var j = 4;
var k = 5;
var l = 5
if ((i > j) && (l > k)) {
    console.log("i maior que j");
}
if ((i === j) || (k === l)) {  //operador logico ou //
    console.log(" um dos dois eram validos");
    if (k === 5){
        console.log("k igual a 5");
    }
}


// adicionando mais else

var i = 4;
var j = 3;
var k = 5;
var l = 5
if ((i > j) && (l > k)) {
    console.log("i maior que j");
}
if ((i === j) || (k === l)) {  //operador logico ou //
    console.log(" um dos dois eram validos");
    if (k === 5){
        console.log("k igual a 5");
    } else {
        if (k ===4) {

        } else if (k === 3){


        }
    }
}


//outro operador//

if (! (1 > 2)) {
    console.log("execute");
}


//boolenas
console.log(!(1 > 2));
if (!(1 > 2)) {  // ! operação de negaçao//
    console.log("execute");
}

//variavel //
var fruta = "";
var valor = 0;
if (fruta === "banana") {
    valor = 2;
} else if (fruta === "maca") {
    valor = 3;
} else if (fruta === "abacaxi") {
    valor = 4;
} else if (fruta === "melao") {
    valor = 5;
} else if (fruta === "mamao") {
    valor = 5.50;
} 
console.log("valor: " + valor);


// imprimiu ok//

var fruta = "abacaxi";
var valor = 0;
if (fruta === "banana") {
    valor = 2;
} else if (fruta === "maca") {
    valor = 3;
} else if (fruta === "abacaxi") {
    valor = 4;
} else if (fruta === "melao") {
    valor = 5;
} else if (fruta === "mamao") {
    valor = 5.50;
} 
console.log("valor: " + valor);



//switch
var fruta = "pera";
var valor = 0;
if (fruta === "banana") {
    valor = 2;
} else if (fruta === "maca") {
    valor = 3;
} else if (fruta === "abacaxi") {
    valor = 4;
} else if (fruta === "melao") {
    valor = 5;
} else if (fruta === "mamao") {
    valor = 5.50;
} else {
    valor = 10;
}
//console.log("valor: " + valor);

// switch com case break//
switch (fruta){
    case "banana":
    valor = 2;
    break; //para parar o comando//
    case "maca":
    valor = 3;
    break;
    case "abacaxi":
    valor = 4;
    break;
    case "melao":
    valor = 5;
    break;
    case "mamao":
    valor = 5.50;
    break;
    default:
        valor = 10;
}
console.log("valor: " + valor);

//operador ternario
var x = 1;
var y = 2;
if(x > y) {
    console.log("x maior que y");
} else if (x < y) {
    console.log(" x menor que y");
}


//operador ternario outro exemplo//
var x = 1;
var y = 2;
var resultado = "";
if(x > y) {
     resultado = "x maior que y";
} else {
    resultado = " senao";
}
console.log(resultado);

//outro exemplo de ternario
var x = 1;
var y = 2;
var resultado = "";
if (x > y) {
    resultado = "x maior que y";
}else {
    resultado = "senao";
}
console.log(resultado);

resultado = x > y ? "x maior que y" : "senao";
console.log(resultado);

//Estruturas de repetição//
//for

for (var i = 0; i < 10; i++){
     console.log(i);
}

var carros = ["gol", "palio", "uno", "celta", "sandero"];

//do começo para o final do array
for (var i = 0; i <= carros.length; i++) {
    console.log(carros[i]);
}
//do fim para o inicio do arrays
for(var i = carros.length - 1; i>=0; i--) {  //menor = 
    console.log(carros[i]);
}


//while
var i = 0;
while(i < carros.length) {
    console.log(carros[i]);
    i++;
}

//laço infinito
while(true){
    console.log("olá");
}
    



var i = 0;
 while(i < 10) {
     console.log(carros[i]);
      if (carros[i] === "palio"){
          console.log("Encontrei o palio");
          break;
      }
     i++
 }


 var numeros = [1, 2 ,3 , 4, 5 , 6, 7, 8, 9 , 10];
 var i = 0;
 while (i < numeros.length){ ///numeros par para achar//
     var num = numeros[i];
     i++;
     if ( num % 2 === 0 ){
         console.log(num + " é par");
         continue;
     }

     console.log(num + " é impar");
     //...
 }

 //do while
var j = 30;
 do {
j++;
console.log(j);
 } while (j < 10);

 //For of
 for (var carro of carros){
     console.log(carro);

 }
 for (var i = 0; i < carros.length; i++) {
     console.log(carros[i]);
 }

// html 
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>treinamento nodejs</title>
</head>
<body>
    <script>
        console.log("olá mundo!");
        alert("teste de alerta");

        var a=1;
        var b=1;
        var total = a+b;
        console.log(total);

    </script>
</body>
</html>

//problemas do site project euler//

/*Se listarmos todos os números naturais abaixo de 10 que são múltiplos de 3 ou 5, obtemos 3, 5, 6 e 9. A soma desses múltiplos é 23.

Encontre a soma de todos os múltiplos de 3 ou 5 abaixo de 1000.*/

//Resposta: 233168

var multiplos = [];
for (var i = 0; i < 1000; i++) {
    if ((i % 3 === 0)|| (i % 5 === 0)) {
        multiplos.push(i);
        
    }
}
var sum = 0;
for (var i = 0; i < multiplos.length; i++){
    sum += multiplos[i];
}
console.log(sum);


//operadores logicos//

var soma = 4 + 2;
var subtracao = 5 - 3;
var multiplicacao = 5 * 4;
var divisao = 20 / 4;
var resto = 20 % 3;


console.log("soma:  " + soma);
console.log("subtracao: " + subtracao);
console.log("multiplicacao: " + multiplicacao);
console.log("divisao: " + divisao);
console.log("resto: " + resto);


var num1 = 10;
var num2 = 50;
var resultado = (num2 + num1) / (8 + 2);
console.log("precendencia: " + resultado);

//variavel mais mais//

var incremento = 1;
incremento = incremento + 1;
incremento++;
console.log("incremento: " + incremento);

var atribuicaoComAdicao = 5;
atribuicaoComAdicao += 6; // o mesmo que a = a + 6//
console.log("atribuicao com adicao: " + atribuicaoComAdicao);

var decremento = 5;
decremento = decremento - 1;
decremento--;
console.log("decremento: " + decremento);

var atribuicaoComSubtracao =  10;
//o mesmo que atribuicaoComSubtracao = atribucaoComSubstracao - 4;//
atribuicaoComSubtracao -= 4;
console.log("atribuicao com subtracao: " + atribuicaoComSubtracao);

var atribuicaoComMultiplicacao = 4;
//o mesmo que atribuicaoComMultiplicacao = atribuicaoComMultiplicacao * 5//
atribuicaoComMultiplicacao *= 5;
console.log("atribuicao com multiplicacao: " + atribuicaoComMultiplicacao);


var atribuicaoComDivisao = 20;
// o mesmo que atribuicaoComDivisao = atribuicaoComDivisao /4 //
atribuicaoComDivisao /= 4;
console.log("atribuicao com divisao: " + atribuicaoComDivisao);

var a = 4
var b = 3;
var adicaoIncrementoPosterior  = a + b++;
console.log("adicao incremento posterior: " + adicaoIncrementoPosterior);

var adicaoIncrementoAnterior  = a + ++b;
console.log("adicao incremento anterior: " + adicaoIncrementoAnterior);

var c = 5;
var d = 6;
var subtracaoDecrementoPosterior = c +  d--;
console.log("substracao com decremento posterior: " + subtracaoDecrementoPosterior);

var subtracaoDecrementoAnterior = c + --d;
console.log("subtracao com decremento anterior: " + subtracaoDecrementoPosterior);


//aula tipos de variavies js//

var numero = 10;
var decimal = 10.54
var string = "texto teste ";
var stringAspasSimples = 'texto de teste aspas simples';
var stringAspasDuplas = "texto de teste aspas duplas";
var booleanoVerdadeiro = true;
var booleanoFalso = false;
var variavelNaoDefinida;
var variavelnulla = null;


//aqui voce ira imprimir a variavel aqui//
console.log(numero);
console.log(decimal);
console.log(string);
console.log(stringAspasSimples);
console.log(stringAspasDuplas);
console.log(booleanoVerdadeiro);
console.log(booleanoFalso);
console.log(variavelNaoDefinida);
console.log(variavelnulla);


//variavel para mostra a mudança de texto para numero //

var mudancaTipo =1;
console.log(mudancaTipo);
var mudancaTipo = "Troquei de numero para texto";
console.log(mudancaTipo);

//comando typeof para ver o tipos de variaveis//
console.log(typeof(numero));
console.log(typeof(decimal));
console.log(typeof(string));
console.log(typeof(stringAspasSimples));
console.log(typeof(stringAspasDuplas));
console.log(typeof(booleanoVerdadeiro));
console.log(typeof(booleanoFalso));
console.log(typeof(variavelNaoDefinida));
console.log(typeof(variavelnulla));


//aulas de variavieis//

//declarado variaveis//

var abacate = 2;
var banana = 3;
//declaracao variavel da soma//
var totalFrutasSacola = abacate + banana;
//comelCase fazer com letra maiucusla s minuscula//
//trocando valor da variavel abacate//
abacate = 5;
//somando novamente//
totalFrutasSacola = abacate +banana;
//cuidado em não usar palavra reservada = return, var, menu, cade, continue, break//
console.log(totalFrutasSacola);

//comentários//
