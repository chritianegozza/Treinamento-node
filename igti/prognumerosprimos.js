//numeros primos 

//O aluno deverá criar um programa para informar se determinado número é primo ou não.

//numeros primos

// não é números primos

var numero = 10;
for (var i = 2; i < numero; i ++) {
    if(numero % i === 0){
      numeroPrimo = false;
       break;
    }
}
if (numeroPrimo) {
  console.log("O número " + numero + " é primo.");
} else {
  console.log("O número " + numero + " não é primo.");
}
//
