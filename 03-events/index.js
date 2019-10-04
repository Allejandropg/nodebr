const EventEmitter = require('events')
class MeuEmissor extends EventEmitter {

}
const meuEmissor = new MeuEmissor();
const nomeEvento = 'usuario:click'
meuEmissor.on(nomeEvento, function (click){
    console.log('um usuario clicou', click)
})
/* meuEmissor.on(nomeEvento,'na barra de rolagem')
meuEmissor.on(nomeEvento,'no ok')

let count = 0
setInterval(()=>{
    console.log(nomeEvento,'no ok'+(count++))
},1000) */

/* const  stdin = process.openStdin()
stdin.addListener('data', function (value){
    console.log(`Você digitou:  ${value.toString().trim()}`)
}) */

const  stdin = process.openStdin()
function main(){
    return new Promise(function (resolve, reject){
        stdin.addListener('data', function (value){
            // console.log(`Você digitou:  ${value.toString().trim()}`)
            return resolve(value)
        })
    });
}

main().then(function(result){
    console.log('resultado:',result.toString())
})