/*
REPETIÇÕES IN JS -> laços e iterações
 se a condição for VERDADEIRA ele vai voltar e executar novamente fazendo looping
 qnd for quebrado o fluxo seguirá o fluxo natural

// enquanto a condição for verdadeira...
function comerPizza() {
    while(temFatia()){
        comerFatia()
    }
}

*/
// estrutura de repetição com teste lógico no início
var c = 1
while (c <= 6) {
    console.log(`passo ${c}`)
    c++ 
}

// estrutura de repetição com teste lógico no final
let a = 1
//faça enquanto
do {
    console.log(`passe ${a}`)
    a++
} while (a <= 10)

