/**
 * 00 - Obter um usuario
 * 01 - Obter o numero de telofone de um usuario a partir do ID
 * 02 - Obter o endereco do usuario pelo ID
 */
// importamos um módulo interdo do nodejs
util = require('util')
const obterEnderecoAsync = util.promisify(obterEndereco)
function obterUsuario(callback) {
    //quando der algum problema -> reject(ERRO)
    // quando der success -> RESOLV
    return new Promise(function resolvePromise(resolve, reject) {
        setTimeout(() => {
            return resolve({
                id: 1,
                nome: 'Aladin',
                dataNascimento: new Date()
            })
        }, 1000)
    })
}

function obterTelefone(idUsuario){
    return new Promise(function resolvePromise(resolve, reject){
        setTimeout(() => {
            return resolve({
                telefone:'1199002',
                ddd: 11
            })
        },2000);
    })
}


function obterEndereco(idUsuario,callback){
    return new Promise(function resolvePromise(resolve, reject){
        setTimeout(() => {
            return resolve({
                rua:'dos bobos',
                numero: 0
            })
        },2000);
    })

}

main()
// 1o passo adicionar a palavra async -> automaticamente ela retornará uma Promise
async function main(){
    try {
        const usuario = await obterUsuario()
        /* const telefone = await obterTelefone(usuario.id)
        const endereco = await obterEnderecoAsync(usuario.id) */
        const resultado = await Promise.all(
            obterTelefone(usuario.id),
            obterEnderecoAsync(usuario.id)
        )//assim é executada com uma melhor performace a função
        const endereco = resultado[1]
        const telefone = resultado[0]
        console.log(`
            Nome: ${usuario.nome}
            Endereco: ${endereco.rua}, ${endereco.numero}
            Telefone: (${telefone.ddd}) ${telefone.telefone}
        `)
    } catch (error) {
        console.error("DEU RUIM",error)
    }
}