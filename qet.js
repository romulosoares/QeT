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
class ResultType{

	constructor (resultIndex, resultValue, searchResult){
		this.resultIndex = resultIndex;
		this.resultValue = resultValue;
		this.searchResult = searchResult;

	}
}


//Definindo o Método de Buscar Elemento
function buscaElemento(key, items, size, ascending, type){
	let retorno;

	switch (type){
			case type.LessThan:
				//Encontrar o maior elemento que é menor a chave de busca (key).
				items.sort();
				let found = false;
				let index;
				for (let i=0; (i<size && found!=true); i++){
					if (items[i]<key){
						found == true;
					}
				}

				if (found == false){
					retorno = new Result(null, null,SearchResult.NotFound);
				}
				else{
					retorno = new Result(i, items[i], SearchResult.FoundLess);
				}
			break;
			case type.LessThanEquals:
				//Encontrar o maior elemento que é menor ou igual a chave de busca (key).
				items.sort();
				let found = false;
				let index;
				for (let i=0; (i<size && found!=true); i++){
					if (items[i]<=key){
						found == true;
					}
				}
				if (found == false){
					retorno = new Result(null, null,SearchResult.NotFound);
				}
				else{
					if (items[i]==key)
						retorno = new Result(i, items[i], SearchResult.Equals);
					else{
						retorno = new Result(i, items[i], SearchResult.LessThan);
					}
				}
			break;
			case type.Equals:
				//Encontrar o maior elemento que é igual a chave de busca (key).
				items.sort();
				let found = false;
				let index;
				for (let i=0; (i<size && found!=true); i++){
					if (items[i]==key){
						found == true;
					}
				}
				if (found == false){
					retorno = new Result(null, null,SearchResult.NotFound);
				}
				else{
					retorno = new Result(i, items[i], SearchResult.Equals);
				}
			break;
			case type.GreaterThanEquals:
				items.sort();
				let found = false;
				let index;
				for (let i=0; (i<size && found!=true); i++){
					if (items[i]>key){
						found == true;
					}
				}
				if (found == false){
					retorno = new Result(null, null,SearchResult.NotFound);
				}
				else{
					retorno = new Result(i, items[i], SearchResult.GreaterThan);
				}
			break;
			case type.GreaterThan:
				items.sort();
				let found = false;
				let index;
				for (let i=0; (i<size && found!=true); i++){
					if (items[i]>=key){
						found == true;
					}
				}
				if (found == false){
					retorno = new Result(null, null,SearchResult.NotFound);
				}
				else{
					if (items[i]==key)
						retorno = new Result(i, items[i], SearchResult.Equals);
					else{
						retorno = new Result(i, items[i], SearchResult.GreaterThanEquals);
					}
				}
			break;
			
	}
	
	return retorno;
}



		
console.log("Qualidade e Teste");

