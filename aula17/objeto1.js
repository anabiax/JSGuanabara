
let pessoa = {
    nome: 'Fulaninha',
    sexo: 'f',
    altura: 1.57,
    peso: 60,
    emagrecer(p = 0) {
        console.log('emagreceu')
        this.peso -= p
    }
}

pessoa.emagrecer(2)
console.log(`${pessoa.nome} pesa ${pessoa.peso} kg`)