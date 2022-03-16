console.log(" === Teste === ");

class Animal {
    constructor(especie){
        this.especie = especie 
    }
}

// Extentendo a classe pessoa de animal

class Pessoa extends Animal {
    constructor(nome,idade,especie = "homo sapiens sapiens"){
    super(especie)
    this.nome = nome,
    this.idade = idade
    }
    imprimeDados(saudacao){
        return `${saudacao}, ${this.nome} tem ${this.idade} anos.`
    }
}

class Cidadao extends Pessoa {
    constructor(nome,idade,cpf,rg){
        super(nome, idade)
        this.cpf = cpf
        this.rg = rg
    }
}

const joao = new Pessoa("joao", 22)
console.log(joao)

const jaque = new Cidade ("Carlos", 24, 0000,545454)
console.log(jaque)
