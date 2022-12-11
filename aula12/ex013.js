let agora = new Date()
let hora = agora.getHours() // pegar hora atual do sistema que está rodando meu script
console.log(`agora são ${hora} horas.`)

if(hora >= 0 && hora < 6) {
    console.log('madrugada')
} else {
    if (hora > 6 && hora <= 12) {
        console.log('manhã')
    } else if (hora > 13 && hora <= 18) {
        console.log('tarde')
    } else {
        console.log('noite')
    }
}