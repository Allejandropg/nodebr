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

const usuarioPromise = obterUsuario()
usuarioPromise
    .then(function(usuario){
        return obterTelefone(usuario.id)
                .then(function resolverTelefone(result){
                    return {
                        usuario: {
                            nome: usuario.nome,
                            id: usuario.id
                        },
                        telefone: result
                    }
                })
    })
    .then(function(resultado){
        const endereco = obterEnderecoAsync(resultado.usuario.id);
        return endereco.then(function resolverEndereco(result){
            return {
                usuario: resultado.usuario,
                telefone: resultado.telefone,
                endereco: result
            }
        })
    })
    .then(function(resultado){
        console.log(`
            Nome: ${resultado.usuario.nome}
            Endereco: ${resultado.endereco.rua}, ${resultado.endereco.numero}
            Telefone: (${resultado.telefone.ddd}) ${resultado.telefone.telefone}
        `)
    }).catch(function(error){
        console.log('deu ruim',error)
    });

/* obterUsuario(function resolverUsuario(error, usuario){
    if(error){
        console.error('DEU RUIM no USUARIO',error)
        return;
    }
    obterTelefone(usuario.id,function resolverTelefone(error1,telefone){
        if(error1){
            console.error('DEU RUIM no TELEFONE',error1)
            return;
        }
        obterEndereco(usuario.id,function resolverEndereco(error2,endereco){
            if(error1){
                console.error('DEU RUIM no TELEFONE',error1)
                return;
            }
            console.log(`
                Nome:${usuario.nome},
                Endereco: ${endereco.rua}, ${endereco.numero},
                Telefone: (${telefone.ddd}) ${telefone.telefone}
            `)
        })
    })
}); */