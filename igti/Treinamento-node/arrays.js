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