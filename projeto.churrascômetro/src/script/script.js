/* cada 1 pessoa adulta = 0.400 kg
   cada 1 pessoa adulta = 3 latas de cerveja
   cada 1 pessoa adulta = 0.400 L de refrigerante 
   cada 1 criança = 0.200 kg
   cada 1 criança = 0 latas de cerveja
   cada 1 criança = 1 L de refrigerante 
   equivalente a 1 hora
*/

var ad = document.getElementById("adulto")
var cr = document.getElementById("crianca")
var du = document.getElementById("duracao")


var resultado = document.getElementById("resultado")
var h = document.getElementById("h2")

function calcular (){
    

    let adulto = ad.value
    let crianca = cr.value
    let duracao = du.value 



    var carne = carnePP(duracao) * adulto + (carnePP(duracao) / 2 * crianca)
    var cerveja = cervejaPP(duracao) * adulto;
    var bebidas = bebidasPP(duracao) * adulto + (bebidasPP(duracao) / 2 * crianca)

    
    
    
    
    

    resultado.innerHTML = `<h2>${''} Você vai precisar de:</h2>`
    resultado.innerHTML += `<p>${carne / 1000} Kg de Carne</p>`
    resultado.innerHTML += `<p>${Math.ceil(cerveja / 350)} Latas de Cerveja</p>`
    resultado.innerHTML += `<p>${Math.ceil(bebidas / 2000)} Garrafas 2L de Bebidas</p>`

    
}




function carnePP(dr){
    if (dr >= 6){
        return 650
    } else{ 
        return 400
    }
}
function cervejaPP(dr){
    if (dr >= 6){
        return 2000
    }else {
        return 1200
    }
}
function bebidasPP(dr){
    if (dr >= 6){
        return 1500
    }else {
        return 800
    }
}

