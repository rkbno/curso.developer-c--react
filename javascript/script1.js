// var idade = 17
// var pode = " "


// if( idade >= 18 && idade <=65 ) {
//     pode = "Pode"
// }
// else if (idade > 65)  {
//     pode = "não pode"
// } else {
//     pode = "Não pode"
// }
    
// console.log(idade)
// console.log(pode)
    
// switch (pode) {
//     case "Pode":
//         console.log("Qual bebida deseja?")
//         break;
//     case "não pode": 
        

//         console.log("Porquê causa problemas na sua idade")
//         break;
//         case "Não pode": 
        
//         console.log("Espere mais um tempo")
//         break;  
//     default :
//         console.log("ERRO 404")    
//         break;
// }

// var alunos = ["Arnaldo", "Breno", "Camila", 
//               "Diana", "Eduarda", "Fabio", "Gabriel", "Pedro"];

              
// for (var aluno of alunos) {
//     console.log(aluno)
// }

function media(n1, n2) {

    var nota1 = n1;
    var nota2 = n2;
    var media = (nota1 + nota2) / 2;
    
    // console.log(media);

    return media;
};


var resultado1 = media (5, 10);
var resultado2 = media (10, 8);
var resultado3 = media (3, 9);
var resultado4 = media (5, 1);

console.log(resultado1 + ", " + resultado2 + ", " + resultado3 + " e " + resultado4)