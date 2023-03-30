function notaAluno(nome, nota){
    return { nome, nota }
}

let alunos = [
    notaAluno("Breno", 9),
    notaAluno("Breno", 10),
    notaAluno("Breno", 3),
    notaAluno("Breno", 5),
]

function notaTotalAlunos(total, aluno){
        return total + aluno.nota /4
}
 


console.log(alunos.reduce(notaTotalAlunos, 0))