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