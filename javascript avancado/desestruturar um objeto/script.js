var aluno = {
    matricula: 3545,
    nome: "Marcos",
    telefone: 988862417,
    cidade: "Barra do Piraí"
}
var aluno1 = {
    matricula: 3599,
    nome: "João",
    telefone: 988862417,
    cidade: "Barra do Piraí"
}
var aluno2 = {
    matricula: 3599,
    nome: "João",
    telefone: 988862417,
    cidade: "Barra do Piraí"
}

var {matricula, ...resto} = aluno
console.log(resto)
var alunos = [aluno, aluno1, aluno2]

var [ marcos, ... outros] = alunos

console.log(outros)