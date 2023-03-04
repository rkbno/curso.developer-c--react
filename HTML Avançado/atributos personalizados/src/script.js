/*
let like = document.getElementById("like")

    like.addEventListener("click", function(){

        

        like.setAttribute("src", "src/imagens/deslike.avif") 

        like.cor = "Vermelho"
        
    })

  */

let lista = document.getElementById("lista")

lista.dataset.n = "4"

let num = parseInt(lista.dataset.n)

let conteudo = ""


for (let i = 0; i < num; i++){
    
    conteudo += "<li>" + i + "</li>"

}

lista.innerHTML = conteudo



// simplificar com boas praticas 