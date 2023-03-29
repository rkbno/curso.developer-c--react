let usuarios = ["Adriano", "Marcia", "José" ]


function inserirUsuario(nome){

    let promise = new Promise(function(resolve, reject){
        
        
        setTimeout(()=>{
            usuarios.push(nome)
            let error = false
            if(!error){
                resolve()
            }else{
                reject({msg:"error de qualquer coisa"})
            }
        }, 1000)
    })
    return promise
}
function listarUsuarios(){
    console.log(usuarios)
}
inserirUsuario("Breno").then(listarUsuarios)
