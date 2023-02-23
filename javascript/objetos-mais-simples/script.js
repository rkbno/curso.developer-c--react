
function criarAluno(nome, n1, n2){
         return {
            nome: nome,
             nota1: n1,
             nota2: n2,
             media: function () {
                return (this.nota1 + this.nota2) / 2
                }
            }   
        }     
        
// function aluno(nome, n1, n2){
    
//     this.nome = nome
//     this.nota1 = n1
//     this.nota2 = n2 

//     this.media = function (){
//         return (this.nota1 + this.nota2) / 2
//     }
// }


var turma = [
    criarAluno("Igor", 3, 2.5),
    criarAluno("Breno", 9, 7)
]

    //    var a = new aluno ("Igor", 8, 7) 
    
    //    console.log(a)
    //    console.log(a.media())

// var aluno = turma[0]


turma.forEach (function (elemento) {
    console.log(elemento)
})

for ( var aluno of turma){
    console.log(aluno.nome + " - " + aluno.media())
}
