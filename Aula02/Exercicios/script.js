console.log("=== exercicio 1 ===");

// const aluno = {
//     nome: "Mateus",
//     p1: 5,
//     p2: 8,
//     media: 0,
//     get media() {
//         return (aluno.p1+p2)/2
//     }
// }

// console.log(aluno.media);
const soma = (a,b) => a+b;
const divi = (a,b) => b>0 ? a/b : NaN;
const resu = (operador,a,b) => operador(a,b);

const aluno = {
    nome: "Mateus",
    p1: "null",
    p2: "null",
    media: "null",
    set curso (i) {
        this.curso = i
    },
    set Nota1 (i) {
        this.p1 = i
    },
    set Nota2 (i) {
        this.p2 = i
    },    
    get Media(){
        if (0 < aluno.p1) { 
            media = resu(divi,resu(soma,this.p1,this.p2),2)
            return ` ${this.nome} a media no Curso de ${this.Curso} é de ${media} `}
        else{
            return "A Nota da p1 foi 0, não vai ser possivel fazer uma média"}
    }
}

aluno.Curso = "POO"
aluno.Nota1 = 0
aluno.Nota2 = 10

console.log(aluno.p1)
console.log(aluno.Media)

