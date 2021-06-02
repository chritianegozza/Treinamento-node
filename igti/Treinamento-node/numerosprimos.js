//numeros primos 

var numerosPrimos = [2, 3];

for (var numeroAtual = 4; numeroAtual < n; numeroAtual++) {
  var quantidadeDeDivisores = 0;

  for(var numeroMenor = 2; numeroMenor < numeroAtual; numeroMenor++) {
    if (numeroAtual % numeroMenor == 0) {
      quantidadeDeDivisores ++;
    }
  }

  if (quantidadeDeDivisores == 0) {
    numerosPrimos.push(numeroAtual);
  }
}

return numerosPrimos;
