let usuarios = ["Adriano", "Marcia", "José" ]


function inserirUsuario(nome, qualquerCoisa){

    setTimeout(() => {
        usuarios.push(nome)
        qualquerCoisa()
    }, 5000)
    
}


function listarUsuarios(){
    console.log(usuarios)
}


inserirUsuario("Breno", listarUsuarios)

