//Definindo a Enum SearchResult
var SearchResult = {
			NotFound : 0,
			FoundExact : 1,
			FoundGreater: 2,
			FoundLess: 3
		}; 
		
//Definindo a Enum SearchType
var SearchType = {
			LessThan : 0,
			LessThanEquals : 1,
			Equals: 2,
			GreaterThanEquals: 3,
			GreaterThan: 4
		}

//Definindo a Classe de Retorno da Busca
class buscaResult {
	constructor (resultIndex, resultValue, searchResult){
		this.resultIndex = resultIndex;
		this.resultValue = resultValue;
		this.searchResult = searchResult;
	}
}


//Definindo o Método de Buscar Elemento
function buscaElemento(key, items, size, ascending, type){
	var retorno;
	var found = false;
	var index;
    items.sort(function(a, b){return a-b});
	switch (type){
			case SearchType.LessThan:
				//Encontrar o maior elemento que é menor a chave de busca (key).
				for (let i=0; i<size; i++){
					if (items[i]<key){
						found = true;
						index = i;
					}
				}
				if (found == false){
					retorno = new buscaResult(null, null,SearchResult.NotFound);
				}
				else{
					retorno = new buscaResult(index, items[index], SearchResult.FoundLess);
				}
			break;
			case SearchType.LessThanEquals:
				//Encontrar o maior elemento que é menor ou igual a chave de busca (key).
				for (let i=0; i<size; i++){
					if (items[i]<=key){
						found = true;
						index = i;
					}
				}
				if (found == false){
					retorno = new buscaResult(null, null,SearchResult.NotFound);
				}
				else{
					if (items[index]==key)
						retorno = new buscaResult(index, items[index], SearchResult.FoundExact);
					else{
						retorno = new buscaResult(index, items[index], SearchResult.FoundLess);
					}
				}
			break;
			case SearchType.Equals:
				//Encontrar o maior elemento que é igual a chave de busca (key).
				for (let i=0; i<size; i++){
					if (items[i]==key){
						found = true;
						index = i;
					}
				}
				if (found == false){
					retorno = new buscaResult(null, null,SearchResult.NotFound);
				}
				else{
					retorno = new buscaResult(index, items[index], SearchResult.FoundExact);
				}
			break;
			case SearchType.GreaterThan:
				for (let i=0; i<size; i++){
					if (items[i]>key){
						found = true;
						index = i;
						break;
					}
				}
				if (found == false){
					retorno = new buscaResult(null, null,SearchResult.NotFound);
				}
				else{
					retorno = new buscaResult(index, items[index], SearchResult.FoundGreater);
				}
			break;
			case SearchType.GreaterThanEquals:
				for (let i=0; i<size; i++){
					if (items[i]>=key){
						found = true;
						index = i;
						break;
					}
				}
				if (found == false){
					retorno = new buscaResult(null, null,SearchResult.NotFound);
				}
				else{
					if (items[index]==key)
						retorno = new buscaResult(index, items[index], SearchResult.FoundExact);
					else{
						retorno = new buscaResult(index, items[index], SearchResult.FoundGreater);
					}
				}
			break;
			
	}
	
	return retorno;
}



		
console.log("Qualidade e Teste");

//testando

var array_to_test = [2,4,6,8,9,10,16];

var retorno = buscaElemento(10, array_to_test, array_to_test.length, true, SearchType.GreaterThanEquals);

console.log("resultIndex " + retorno.resultIndex);
console.log("resultValue " + retorno.resultValue);
console.log("searchResult " + retorno.searchResult);
