/* condição múltipla serve p/ trabalhar valores fixos/pontuais. 
    tem a possibilidade de trabalhar mais valores 
    Só funciona com inteiros e caracteres.

    switch(expressao) {
        case valor1:
            bloquinho1   // se n for satisfeito vai descendo
            break;       // obrigatório

        case valor2:
            bloquinho2
            break;

        case valor3:
            bloquinho3
            break;
            
        case valor3:
            bloquinho4
            break;
            
        default:
            break;
    }
*/

let agora = new Date() 
let diaSemana = agora.getDay()
// console.log(diaSemana)

switch(diaSemana) {
    case 0: 
        console.log('domingo')
        break;

    case 1: 
        console.log('segunda')
        break;

    case 2: 
        console.log('terça')
        break;

    case 3: 
        console.log('quarta')
        break;
    
    case 4: 
        console.log('quinta')
        break;

    case 5: 
        console.log('sexta')
        break;

    case 6: 
        console.log('sábado')
        break;

    default:
        console.log('[erro] dia inválido')
        break;
} 