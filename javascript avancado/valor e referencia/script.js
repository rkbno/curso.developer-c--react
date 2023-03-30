/*
function novoAluno (nome, idade){
    return{nome, idade}
}

let alunos = [ 
    novoAluno("Mario", 3),
    novoAluno("João", 5),
    novoAluno("Jose", 4),
    novoAluno("Marcia", 13)
]

function alunoDaquiA5anos(aluno){
    let novoAluno = aluno 
    novoAluno.idade += 5
    return novoAluno
    
}

console.log(alunos.map(alunoDaquiA5anos))
*/

let alunoA = ["breno", "joao", "igor"]

let alunoB = alunoA.slice()

alunoB.push("mecias")

let aluno = ["henrique", "maria", "expedito"]

let alunoC = [... aluno ]

alunoC.push("marcia")

let a = {nome: "breno", idade: 15}

let b = Object.assign({}, a)

b.idade = 25

let c = {nome: "breno", idade: 15}

let d = {...c}

d.idade = 25