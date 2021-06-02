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