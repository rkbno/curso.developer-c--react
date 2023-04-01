function notaAluno(nome, nota){
    return {nome, nota}
}
let alunos = [
    notaAluno("Breno", 9),
    notaAluno("Ely", 10),
    notaAluno("Eduarda", 6),
    notaAluno("Carla", 4),
    notaAluno("Geovana", 5),
    notaAluno("Mickaela", 2),
    notaAluno("Renata", 7),
    notaAluno("Aline", 8),
    notaAluno("Maria", 5)
]

let universitarios = [
    notaAluno("Breno2", 9),
    notaAluno("Ely2", 10),
    notaAluno("Eduardo", 6),
    notaAluno("Carlos", 4),
    
]
function Reprovados(aluno){
    return aluno.nota < 7
}
function Aprovados(aluno){
    return aluno.nota >= 7
}
console.log(alunos.filter(Aprovados))