/* 

FUNÇÕES: são ações executadas assim que são chamadas/automatizadas ou em decorrência de algum evento.

uma função pode receber parâmetros e retornar um resultado.

function acao(parâmetro) {
    return resultado
}
acao(5)  // irá disparar a execução da função lá de cima

*/


function parImpar(n) {
    if(n % 2 == 0) {
        console.log('o valor é par')
    } else {
        console.log('o valor é ímpar')
    }
}

let resultado = parImpar(14)
// ou console.log(parimpar(223))


