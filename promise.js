/*console.log('Primeiro Log')
console.log('Segundo Log')


setTimeout(() => {
console.log('Terceiro Log')
})
console.log('Quarto Log')
*/


function chamarPessoa(nome){
    setTimeout(() => {
        console.log(nome)
        return nome
    }, 1000)
}

const pesssoa = chamarPessoa('Amanda')

function imprimir(nome){
    console.log("Oi" + nome)
}

imprimir(pesssoa)