
function speakGeneric(){
    console.log(this.sound)
}

let dog = {
    sound: "Au au",
    speak: speakGeneric
    }    


let cat = {
    sound: "Miau",
    speak: speakGeneric
    }    


//dog.speak()
//cat.speak()

let bindedFunction = speakGeneric.bind(dog)

bindedFunction()