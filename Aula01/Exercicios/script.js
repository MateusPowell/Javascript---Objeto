console.log("=== TESTE ===")

function aluno(nome, idade, email, matricula, curso) {
    this.nome = nome, 
    this.idade = idade, 
    this.email = email,
    this.matricula = matricula,
    this.curso = curso
}

aluno.prototype.getCurso = function () {
    return this.curso;
}

const aluno1 = new aluno(
    "Mateus",
    27,
    "mateus@gmail.com",
    "123456789",
    "POO"
);

console.log(aluno1);
console.log(aluno1.getCurso());