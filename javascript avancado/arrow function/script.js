//let dobro = x => 2 * x

let dobro = function (x){
    return (2 * x)
}



let numero = {
    x: 8,
    d: dobro
}

numero.d(3)

//console.log(numero.d())