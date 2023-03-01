/* cada 1 pessoa adulta = 0.400 kg
   cada 1 pessoa adulta = 3 latas de cerveja
   cada 1 pessoa adulta = 0.400 L de refrigerante 
   cada 1 criança = 0.200 kg
   cada 1 criança = 0 latas de cerveja
   cada 1 criança = 1 L de refrigerante 
   equivalente a 1 hora
*/

let adul = document.getElementById("adulto")
let crian = document.getElementById("crianca")
let durac = document.getElementById("duracao")


let resultado = document.getElementById("resultado")

function calcular (){
    

    let ad = adul.value
    let cr = crian.value
    let dr = durac.value 



    let carne = carnePP(dr) * ad + (carnePP(dr) / 2 * cr)
    let cerveja = cervejaPP(dr) * ad;
    let bebidas = bebidasPP(dr) * ad + (bebidasPP(dr) / 2 * cr)



    resultado.innerHTML = `<p>${carne / 1000} Kg de Carne</p>`

    resultado.innerHTML += `<p>${Math.ceil(cerveja / 1000)} Latas de Cerveja</p>`

    resultado.innerHTML += `<p>${Math.ceil(bebidas / 1000)} Garrafas 2L de Bebidas</p>`

    
}

function carnePP(dr){
    if (dr >= 6){
        return 650
    }else {
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

