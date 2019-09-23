/**
 * 00 - Obter um usuario
 * 01 - Obter o numero de telofone de um usuario a partir do ID
 * 02 - Obter o endereco do usuario pelo ID
 */

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

function obterTelefone(idUsuario,callback){
    setTimeout(() => {
        return callback(null,{
            telefone:'1199002',
            ddd: 11
        })
    },2000);
}


function obterEndereco(idUsuario,callback){
    setTimeout(() => {
        return callback(null,{
            rua:'dos bobos',
            numero: 0
        })
    },2000);

}

obterUsuario()

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