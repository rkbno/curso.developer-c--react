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
 
function soma(total, aluno){
    return total + aluno.nota
}


console.log(alunos.reduce(soma, 0 ))
console.log(alunos.reduce(notaTotalAlunos, 0))