// arara
//arara

//ana
//ana

//carro
//orrac


/*criacao da variavel para armazenar a palavra
var palavraImvertida = " "; 
var palavra = "caminhao";
//console.log(palavra);
//palavra = "jabuti";
//console.log(palavra);*/


/*3 etapas do for: 
//1 - inicialização do contador (só é executado na primeira vez)
//2- comparação (condição para verificar se o codigo do for ainda deve ser executado)
//3- icnremento (incrementa o contado)
for (var i= 0; i < palavra.length; i++){  //i++ significa incremento
    palavraImvertida = palavraImvertida + palavra[i];
    
}
console.log(palavraImvertida);

//....


//012345
//arara*/

//2 exemplo
//01234
//carro
//4
//3
//2
//1
//0
var palavraImvertida = " "; 
var palavra = "carro"; 

for (var i = 4; i >= 0; i--){
    palavraImvertida = palavraImvertida + palavra[i];
}
console.log(palavraImvertida);



