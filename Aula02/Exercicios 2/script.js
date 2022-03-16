console.log("=== exercicio 2 ===");
/*Crie uma classe CNH 
propriedades país e idade
que, por padrão, deve ser maior ou igual a 18
16 se for igual a US ou CA 
21 se corresponder a CH ou RU
Se o país for BR deve também ser informada a categoria da carteira (A, B, C, D, E, AB, AC, AD ou AE).*/
class CNH {
    constructor(pais,idade){
        this.pais = pais 
        this.idade = idade
    }
    habil () {
        if (this.pais == "CH" && this.pais == "RU") {
            console.log("A idade para tirar habilitação é de 21")
        } else if (this.pais == "US" && this.pais == "CA") {
            console.log("A idade para tirar habilitação é de 16")
        } else if (this.pais == "BR") {
            console.log("A idade para tirar habilitação é de 18")
            console.log("E podendo ser entre as categorias A, B, C, D, E, AB, AC, AD ou AE")
        }
    }   
}

const aluno1 = new CNH("BR",)
const aluno2 = new CNH("CH",)
const aluno3 = new CNH("US",)
const aluno4 = new CNH("CA",)
const aluno5 = new CNH("RU",)

console.log(aluno1)
console.log(aluno2)
console.log(aluno3)
console.log(aluno4)
console.log(aluno5)
