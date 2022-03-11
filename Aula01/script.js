// const pessoa = {
//     nome: "Jaque",
//     idade: 27,
//     cumprimentaPessoa (nome = "Fulano"){
//          return console.log("seja bem vindos: " + nome);
//     },    
// };

// const mensagem = pessoa.cumprimentaPessoa("Mateus");


// const counter = {
//     count: 0,
//     next: function () {
//         return this.count++;
//     },
// }
// counter.next()
// counter.next()
// counter.next()
// counter.next()

// console.log(counter.count);

// function show() {
//     console.log (this == window)
// }

// show()

// window.show()

// console.log(window)

// let carro = {
//     marca: "Hyundai",
//     getMarca: function() {
//         return this.marca;
//     }
// }
// console.log(carro.getMarca());

// let marca = carro.getMarca();
// console.log(marca);

// let marca1 = carro.getMarca.bind(carro);
// console.log(marca1())

// console.log(carro.getMarca.bind)

// chamada 

function Carro(placa, marca) {
    this.placa = placa;
    this.marca = marca;
}
// criar uma função dentro da funão construtora carro

Carro.prototype.getplaca = function () {
    return this.getplaca;
}

let carro1 = new Carro ("ddx2118", "bmw")

console.log(carro1)

