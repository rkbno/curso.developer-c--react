
function mudar(){
    let q = document.getElementById("quadrado")
    let h = document.getElementById("h1")
    let btn = document.getElementById("botao")

    h.style.backgroundColor = "red"

    h.style.visibility = "visible"
    
    setTimeout(() => {        
        q.style.backgroundColor = "green"
        
    }, 1000)
}




