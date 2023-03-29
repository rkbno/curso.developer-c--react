
function newGeneric(){
    console.log(this.sound)
}


let breno = {
    sound: "Sou bonito",
    speak: newGeneric
}

let felipe = {
    sound: "Eu sou aceitavel",
    speak: newGeneric
}

//breno.speak()
//felipe.speak()


let a = newGeneric.bind(breno)


a()
