console.log("=== TESTE ===");
// EXERCICIO 1

// class perfil {
//     #tema
//     #avatar
//     constructor(nome){
//         this.nome = nome
//         this.#tema = "dark" 
//         this.#avatar = ""
//     }
//     set setTema(tema){
//         let isvalid = tema == "light" || tema == "dark" 
//         this.#tema = isvalid ? tema : this.#tema
//         isvalid ? tema : console.log("Este tema não é Válido")
//     }
//     get tema(){
//         return this.#tema 
//     }
//     set setAvatar (avatar) {
//         let isurl = /^https/.test(avatar) || /^http/.test(avatar) ? true : false
//         this.#avatar = isurl ? avatar : this.#avatar
//         isurl ? avatar : console.log("Está URL não é Válida")
//     }
// }

// const thiom = new perfil("thiom")

// EXERCICIO 2 
// class SmartWatch {
//     #pedometro
//     constructor(pedometro){
//         this.#pedometro = 0
//     }
//     set passos(passo){
//         this.#pedometro += passo        
//     }
//     get resetOnMidnight() {      
//         this.#pedometro = 0
//         console.log("Dia resetado")
//         }
// }

// const dia1 = new SmartWatch();

// EXERCICIO 3
/*classe Veiculo 
propriedades rodas (1 a n),
usaCombustivel (true/false), 

classe Carro (tipoDecombustivel: 'gasolina', 'álcool', 'flex') que herda de Veiculo

Bicicleta (infantil: true/false - tem que ter mais que 2 rodas) que também herda as características de Veiculo.*/

class veiculo {
    constructor(rodas,usaCombustivel){
        this.rodas = rodas >= 1 ? rodas : this.rodas="Não válido"
        this.usaCombustivel = usaCombustivel === false || usaCombustivel === true ? usaCombustivel : "Ah"
    }
}

class carro extends veiculo {
    constructor(rodas,usaCombustivel,tipoDecombustivel){
        super(rodas,usaCombustivel);
        this.tipoDecombustivel = tipoDecombustivel == "gasolina" || tipoDecombustivel == "álcool" || tipoDecombustivel == "flex" ? tipoDecombustivel : "Combustivel não Válido"
    }
}

class bicicleta extends veiculo {
    constructor(rodas, usaCombustivel, infantil){
        super(rodas,usaCombustivel);
        this.infatil = infantil === true && rodas>2 ? infantil : false 
    }
}

let car = new carro(4,true,"gasolina")
let car1 = new carro(3,false,"flex")
let car2 = new carro(18,"dois","álcool")
let car3 = new carro(0,true,"biscoito")

console.log(car)
console.log(car1)
console.log(car2)
console.log(car3)

let bici = new bicicleta(2,false,true)
let bici1 = new bicicleta(3,false,true)
let bici2 = new bicicleta(1,false,true)
let bici3 = new bicicleta(0,true,false)

console.log(bici)
console.log(bici1)
console.log(bici2)
console.log(bici3)