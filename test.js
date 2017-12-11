//Definindo Os Testes


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


