/*
Variáveis simples só conseguem armazenar UM VALOR por vez.

Variáveis compostas devem ser capazes de armazenar vários valores em uma mesma estrutura.

*/

// array e vetor são a mesma coisa
// índice são as key, isto é, as posições dentro de um array
// Cada elemento é composto por seu valor e uma chave de identificação.
let automoveis = [5, 8, 4, 3, 9]
automoveis[3] = 6 // coloque o valor 6 na posição 3, ou seja, o valor é sobrescrito.
automoveis.push(7) // se eu quiser acrescentar exatamente numa posição o valor 7. Ele cria o elemento e adiciona o valor.
automoveis.length
automoveis.sort() // coloca os elementos de forma crescente, isto é, ordenada.

console.log(automoveis.sort())
console.log(automoveis[5])
console.log(automoveis.indexOf(3)) // buscar um valor lá dentro

if(automoveis.indexOf(3) == -1) {
    console.log('o valor n foi encontrado')
} else {
    console.log(`o vetor tem ${automoveis.length} posições e o valor 7 encontra-se na posição ${automoveis.indexOf(7)}.`)
}

/* 
FORMA TRADICIONAL DE ESCRITA
for (let auto = 0; auto <= automoveis.length; auto++) {
    console.log(`a posição ${auto} tem o valor ${automoveis[auto]}`)
}
*/

//LEITURA: p/ cada posição dentro[EM] de automoveis eu vou mostrar o automoveis[auto]
for(let auto in automoveis) {
    console.log(`a posição ${auto} tem o valor ${automoveis[auto]}.`)
}