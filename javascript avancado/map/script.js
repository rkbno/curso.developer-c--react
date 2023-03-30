function novoAluno (nome, idade){
    return{nome, idade}
}

let alunos = [ 
    novoAluno("Mario", 3),
    novoAluno("João", 5),
    novoAluno("Jose", 4),
    novoAluno("Marcia", 13)
]

let jogadores = [ 
    novoAluno("Breno", 23),
    novoAluno("Jó", 53),
    novoAluno("Jordan", 43),
    novoAluno("Marcelo", 26)
]

function nomeIdade(aluno){
    return aluno.nome + " tem " + aluno.idade + " anos."
}

console.log(jogadores.map(nomeIdade))

