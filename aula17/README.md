### próximos passos

-> estudar o paradigma funcional e ponderar sobre suas diferenças de POO; <br>

-> functions (arrow functions, callbacks, funções anônimas, iife) 
<br>
Em JS, funções são objetos. E objetos podem ser passados como parâmetros. 
<br>
-> Modularização;
<br>
-> Expressões regulares;
<br>
-> JSON;
<br>
-> AJAX;
<br>
-> NodeJS
<br>
->jQuery;
<br>

Arrow functions -> 
function(() => {
    console.log('na na na')
});

<br>

Callback -> recebe outra função como parâmetro e a chama dentro de si.
        function print(callback) {  
            callback();
        }
Quando usar: quando o código deve ser executado DEPOIS que algo acontece e de modo ñ sequencial. Isso é chamado de programação assíncrona.
Callbacks garantem que uma função não seja executada antes que uma tarefa seja concluída, mas logo depois dessa tarefa ser concluída.

<br>

Função anônima(s/ nome) -> definir uma função diretamente dentro de outra função em vez de chamá-la.
<br>

OBJETO é + abrangente do que o Array
let fulaninho = {
    nome: 'Ana',
    sexo: 'f',
    altura: 1,57,
    function(p) {
        
    }
}