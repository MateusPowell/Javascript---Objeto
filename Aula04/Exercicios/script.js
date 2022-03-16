console.log("=== TESTE ===");

/**
 * Crie uma (ou mais) classe para representar
 * um app de banco
 * 
 * - Deverá ter diferenciação de cliente PJ e PF
 * 
 * Pense no que deve ou não ser tratado como herança
 * Pense no que deve ou não ser privado
 * Pense em outras coisas que façam sentido 
 * para um app de banco e que faça consiga implementar
 * 
 */

class Conta{
    #saldo
    constructor(conta, agencia, saldo){
        this.conta = conta
        this.agencia = agencia
        this.#saldo = saldo
    } 
    transfer(valor){
        if(valor <= this.#saldo){
            this.#saldo = this.#saldo - valor
            return `Seu saldo é de ${this.#saldo} e foi tranferido ${valor}`
        } else {
            return "não é possivel trasnferir"
        }
    } 
    saque(valor){
        if(valor <= this.#saldo){
            this.#saldo = this.#saldo - valor
            return `Seu saldo é de ${this.#saldo} e foi sacado ${valor}`
        } else {
            return "não é possivel sacar"
        }
    }
    set saldo(i){
        this.#saldo += i
    }
    get saldo(){
        return `Seu saldo é de ${this.#saldo}`
    }
}

class Pessoa extends Conta{    
    constructor ( conta, agencia, saldo){
        super(conta, agencia, saldo)
        this.conta = conta
        this.agencia = agencia
        this.saldo = saldo
    }
}

class PF extends Pessoa {
    #cpf
    constructor(nome, cpf, conta, agencia, saldo){
        super(cpf, conta, agencia, saldo)
        this.nome = nome        
        this.#cpf = cpf
    }
    get dados(){
        return `Seu nome é ${this.nome} seu CPF é ${this.#cpf}, sua conta é ${this.conta} agência ${this.agencia}`
    }
}   

class PJ extends Pessoa{
    #cnpj
    constructor(empresa, cnpj, cpf, conta, agencia, saldo){
        super(cpf, conta, agencia, saldo)
        this.empresa = empresa
        this.#cnpj = cnpj
    }
}
