function decimalPlaces(num) {
  var match = (''+num).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
  if (!match) { return 0; }
  return Math.max(
       0,
       // Number of digits right of decimal point.
       (match[1] ? match[1].length : 0)
       // Adjust for scientific notation.
       - (match[2] ? +match[2] : 0));
}

var vTotal  = 53.20;
var qtdTotal = 2432;
var valorUnitario = vTotal/qtdTotal;

var inteiroDivisao = Math.trunc(valorUnitario); 


var restoDivisao = vTotal%qtdTotal;


var divisaoInversa = qtdTotal/vTotal; 

console.log("vTotal= " + vTotal);
console.log("qtdTotal= " + qtdTotal);
console.log("valorUnitario= " + valorUnitario);
console.log("inteiroDivisao= " + inteiroDivisao);
console.log("restoDivisao= " + restoDivisao);

console.log("divisaoInversa= " + divisaoInversa);


console.log("inversoDaDivisaoInversa= " + 1/divisaoInversa);

var valorGota = valorUnitario;
var qtdGota = qtdTotal;

console.log("Qtd de Casas deciamais de valorGota= " + decimalPlaces(valorGota));

//Transformando em 2 casas demais 
//2 = decimalPlaces(valorGota) - x
//var x = decimalPlaces(valorGota) - 2;
//var temp = Math.pow(10, x); //Valor que vai ser multiplicado
//var qtdParticoes = qtdTotal/temp;

//console.log("Candidato a Particao " + qtdParticoes + " particoes de " + temp + " a um valor de " + temp*valorGota); 
var qtdDeParticoesInteirasEncontradas = 0;

for (let i=999; i!=1; i--){
	var qtdParticoes = qtdTotal /i;
	
	// if (decimalPlaces(qtdParticoes) == 0){
		// console.log("Candidato a Particao " + qtdParticoes + " particoes de " + i + " a um valor de " + i*valorGota); 
	// }
	if (decimalPlaces(i*valorGota) <= 2 && decimalPlaces(qtdParticoes) == 0){
		console.warn("Candidato a Particao " + qtdParticoes + " particoes de " + i + " a um valor de " + i*valorGota);
		console.log("Prova Real=> Qtd Total: " + qtdTotal +  " possui valor de " + valorUnitario*qtdTotal );
		console.log("Prova Real=> Qtd Total Paticionado: " + i*qtdParticoes +  " possui valor de " + i*qtdParticoes*valorUnitario );
		qtdDeParticoesInteirasEncontradas++;
	}
	else{
		//console.error("Candidato a Particao " + qtdParticoes + " partcições de " + i + " a um valor de " + i*valorGota + " não atendeu as condições");
	}
}

console.warn("Quantidade Partições Inteiras Encontradas= " + qtdDeParticoesInteirasEncontradas);

	
for (let i=999; i!=1; i--){
	var qtdParticoes = qtdTotal /i;
	
	// if (decimalPlaces(qtdParticoes) == 0){
		// console.log("Candidato a Particao " + qtdParticoes + " particoes de " + i + " a um valor de " + i*valorGota); 
	// }
	if (decimalPlaces(i*valorGota) <= 2 && decimalPlaces(qtdParticoes) <= 3 && decimalPlaces(qtdParticoes) != 0 ){
		console.warn("Candidato a Particao " + qtdParticoes + " particoes de " + i + " a um valor de " + i*valorGota);
		console.log("Prova Real=> Qtd Total: " + qtdTotal +  " possui valor de " + valorUnitario*qtdTotal );
		console.log("Prova Real=> Qtd Total Paticionado: " + i*qtdParticoes +  " possui valor de " + i*qtdParticoes*valorUnitario );
		qtdDeParticoesInteirasEncontradas++;
	}
	else{
		//console.error("Candidato a Particao " + qtdParticoes + " partcições de " + i + " a um valor de " + i*valorGota + " não atendeu as condições");
	}
}


