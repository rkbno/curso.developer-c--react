// // var idade = 17
// // var pode = " "


// // if( idade >= 18 && idade <=65 ) {
// //     pode = "Pode"
// // }
// // else if (idade > 65)  {
// //     pode = "não pode"
// // } else {
// //     pode = "Não pode"
// // }
    
// // console.log(idade)
// // console.log(pode)
    
// // switch (pode) {
// //     case "Pode":
// //         console.log("Qual bebida deseja?")
// //         break;
// //     case "não pode": 
        

// //         console.log("Porquê causa problemas na sua idade")
// //         break;
// //         case "Não pode": 
        
// //         console.log("Espere mais um tempo")
// //         break;  
// //     default :
// //         console.log("ERRO 404")    
// //         break;
// // }

// // var alunos = ["Arnaldo", "Breno", "Camila", 
// //               "Diana", "Eduarda", "Fabio", "Gabriel", "Pedro"];

              
// // for (var aluno of alunos) {
// //     console.log(aluno)
// // }

// function media(n1, n2) {

//     var nota1 = n1;
//     var nota2 = n2;
//     var media = (nota1 + nota2) / 2;
    
//     // console.log(media);

//     return media;
// };


// var resultado1 = media (5, 10);
// var resultado2 = media (10, 8);
// var resultado3 = media (3, 9);
// var resultado4 = media (5, 1);

// console.log(resultado1 + ", " + resultado2 + ", " + resultado3 + " e " + resultado4)



// var media = function (n1, n2) {
// 	return(n1 + n2) / 2; 
// }

// var m = media(3, 6);
 
// 	console.log(m);

var alunos = ["Pedro", "Miguel", "Breno"]
var notaA = [4, 7, 6]
var notaB = [5, 5, 8]

function media (n1, n2) {
	return (n1 + n2) / 2
}

function passou (media) {

	if (media >= 7){
		return "Aprovado"
	}else{
		return "Reprovado"
	}
}

for (var txt in alunos) {
	var nota1 = notaA[txt]
	var nota2 = notaB[txt]
	var m = media(nota1, nota2)

	console.log(alunos[txt] + " - " + nota1 + 
	" - " + nota2 + " - " + m + " - " + passou(m))
} 