function notaAluno(nome, nota){
    return {nome, nota} 
}

let alunos = [
    notaAluno("Breno", 9),
    notaAluno("Gustavo", 5),
    notaAluno("Gabriel", 7),
    notaAluno("Maria", 3), 
]

function totalNotas(aluno){
    if(aluno.nota < 7)
    return aluno.nome + " tirou a nota " + aluno.nota + " e reprovou."
    else 
    return aluno.nome + " tirou a nota " + aluno.nota + " e passou."
    
}

console.log(alunos.map(totalNotas))
