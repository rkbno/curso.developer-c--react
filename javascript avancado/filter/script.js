function novoAluno (nome, idade){
    return{nome, idade}
}
let alunos = [ 
    novoAluno("Mario", 23),
    novoAluno("João", 53),
    novoAluno("Jose", 43),
    novoAluno("Marcia", 13)
]
let jogadores = [ 
    novoAluno("Breno", 23),
    novoAluno("Jó", 53),
    novoAluno("Jordan", 43),
    novoAluno("Marcelo", 26)
]
function temMenos30(aluno){
    return aluno.idade < 30
}
function temMais30(aluno){
    return aluno.idade > 30
}
console.log(jogadores.filter(temMais30))