//Definindo Os Testes

/* 
Teste funcional para verificar se retorna o valor encontrado, na posição correta e no tipo de busca LessThan
*/
function test1(){
	var array_to_test = [2,4,6,8,9,10,16];
	var retorno = buscaElemento(10, array_to_test, array_to_test.length, true, SearchType.LessThan);
	
	console.log(retorno);
	if (retorno.resultIndex == 4 && retorno.resultValue == 9 && retorno.searchResult==SearchResult.FoundLess){
		return true;
	}
	else{
		return false;
	}
}

/* 
Teste funcional para verificar se retorna o valor encontrado, na posição correta e no tipo de busca LessThanEquals
*/
function test2(){
	var array_to_test = [2,4,6,8,9,10,16];
	var retorno = buscaElemento(10, array_to_test, array_to_test.length, true, SearchType.LessThanEquals);
	
	console.log(retorno);
	if (retorno.resultIndex == 5 && retorno.resultValue == 10 && retorno.searchResult==SearchResult.FoundExact){
		return true;
	}
	else{
		return false;
	}
}

/* 
Teste funcional para verificar retorna o valor encontrado, na posição correta e no tipo de busca Equals
*/
function test3(){
	var array_to_test = [2,4,6,8,9,10,16];
	var retorno = buscaElemento(10, array_to_test, array_to_test.length, true, SearchType.Equals);
	
	console.log(retorno);
	if (retorno.resultIndex == 5 && retorno.resultValue == 10 && retorno.searchResult==SearchResult.FoundExact){
		return true;
	}
	else{
		return false;
	}
}

/* 
Teste funcional para verificar se retorna o valor encontrado, na posição correta e no tipo de busca GreaterThanEquals
*/
function test4(){
	var array_to_test = [2,4,6,8,9,10,16];
	var retorno = buscaElemento(10, array_to_test, array_to_test.length, true, SearchType.GreaterThanEquals);
	
	console.log(retorno);
	if (retorno.resultIndex == 5 && retorno.resultValue == 10 && retorno.searchResult==SearchResult.FoundExact){
		return true;
	}
	else{
		return false;
	}
}

/* 
Teste funcional para verificar se retorna o valor encontrado, na posição correta e no tipo de busca GreaterThan
*/
function test5(){
	var array_to_test = [2,4,6,8,9,10,16];
	var retorno = buscaElemento(10, array_to_test, array_to_test.length, true, SearchType.GreaterThan);
	
	console.log(retorno);
	if (retorno.resultIndex == 6 && retorno.resultValue == 16 && retorno.searchResult==SearchResult.FoundGreater){
		return true;
	}
	else{
		return false;
	}
}

/* 
Testando o comportamento nos limites de uma partição de equivalência para verificar se retorna null quando o elemento não é encontrado no tipo de busca GreaterThan
*/
function test6(){
	var array_to_test = [2,4,6,8,9,10,16];
	var retorno = buscaElemento(16, array_to_test, array_to_test.length, true, SearchType.GreaterThan);
	
	console.log(retorno);
	if (retorno.resultIndex == null && retorno.resultValue == null && retorno.searchResult==SearchResult.NotFound){
		return true;
	}
	else{
		return false;
	}
}

/* 
Testando o comportamento nos limites de uma partição de equivalência para verificar se retorna null quando o elemento não é encontrado no tipo de busca LessThan
*/
function test7(){
	var array_to_test = [2,4,6,8,9,10,16];
	var retorno = buscaElemento(2, array_to_test, array_to_test.length, true, SearchType.LessThan);
	
	console.log(retorno);
	if (retorno.resultIndex == null && retorno.resultValue == null && retorno.searchResult==SearchResult.NotFound){
		return true;
	}
	else{
		return false;
	}
}

/* 
Testando o comportamento nos limites de uma partição de equivalência para verificar se retorna o valor correto, na posicao correta e no tipo de busca LessThanEquals
*/
function test8(){
	var array_to_test = [2,4,6,8,9,10,16];
	var retorno = buscaElemento(2, array_to_test, array_to_test.length, true, SearchType.LessThanEquals);
	
	console.log(retorno);
	if (retorno.resultIndex == 0 && retorno.resultValue == 2 && retorno.searchResult==SearchResult.FoundExact){
		return true;
	}
	else{
		return false;
	}
}

/* 
Testando o comportamento nos limites de uma partição de equivalência para verificar se retorna o valor correto, na posicao correta e no tipo de busca GreaterThanEquals
*/
function test9(){
	var array_to_test = [2,4,6,8,9,10,16];
	var retorno = buscaElemento(16, array_to_test, array_to_test.length, true, SearchType.GreaterThanEquals);
	
	console.log(retorno);
	if (retorno.resultIndex == 6 && retorno.resultValue == 16 && retorno.searchResult==SearchResult.FoundExact){
		return true;
	}
	else{
		return false;
	}
}

/* 
Teste funcional para verificar se retorna null se o valor não foi encontrado no tipo de busca Equals
*/
function test10(){
	var array_to_test = [2,4,6,8,9,10,16];
	var retorno = buscaElemento(5, array_to_test, array_to_test.length, true, SearchType.Equals);
	
	console.log(retorno);
	if (retorno.resultIndex == null && retorno.resultValue == null && retorno.searchResult==SearchResult.NotFound){
		return true;
	}
	else{
		return false;
	}
}

var resultArea = document.getElementById("result");

//Testando
if (test1())
	resultArea.innerHTML += "Teste 1 passou <br>"
else
	resultArea.innerHTML += "Teste 1 falhou <br>"

if (test2())
	resultArea.innerHTML += "Teste 2 passou <br>"
else
	resultArea.innerHTML += "Teste 2 falhou <br>"

if (test3())
	resultArea.innerHTML += "Teste 3 passou <br>"
else
	resultArea.innerHTML += "Teste 3 falhou <br>"

if (test4())
	resultArea.innerHTML += "Teste 4 passou <br>"
else
	resultArea.innerHTML += "Teste 4 falhou <br>"

if (test5())
	resultArea.innerHTML += "Teste 5 passou <br>"
else
	resultArea.innerHTML += "Teste 5 falhou <br>"
	
if (test6())
	resultArea.innerHTML += "Teste 6 passou <br>"
else
	resultArea.innerHTML += "Teste 6 falhou <br>"
	
if (test7())
	resultArea.innerHTML += "Teste 7 passou <br>"
else
	resultArea.innerHTML += "Teste 7 falhou <br>"

if (test8())
	resultArea.innerHTML += "Teste 8 passou <br>"
else
	resultArea.innerHTML += "Teste 8 falhou <br>"

if (test9())
	resultArea.innerHTML += "Teste 9 passou <br>"
else
	resultArea.innerHTML += "Teste 9 falhou <br>"

if (test10())
	resultArea.innerHTML += "Teste 10 passou <br>"
else
	resultArea.innerHTML += "Teste 10 falhou <br>"