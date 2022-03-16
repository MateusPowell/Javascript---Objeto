console.log(" === Teste === ");

class restaurante {
    rest(cidade, delivery=false, pedidos=0) {
        this.cidade = cidade; 
        this.delivery = delivery;
        this.pedidos = pedidos;
        this.tempo = 10+2*this.pedidos
    }
    entregaPedido(cidadeCliente) {
        if(cidadeCliente != this,cidade) {
            return "Entrega não pode ser realizada"
        }

        this.pedidos += 1;
        this.tempo = 10+2*this.pedidos;

        return `tempo de entrega é de: ${tempo}`
    }
}

const churras = new rest("bauru", true, 1)

console.log(churras.entregaPedido("SP"))



// 11. Crie uma classe Restaurante com as propriedades cidade, delivery (verdadeiro ou falso), pedidosPendentes e tempo de entrega estimado (calculado com base nos pedidos pendentes, sendo 10 + 2 * pedidosPendentes em minutos). 

// Os restaurantes devem ser capazes de realizar entregas desde que o cliente esteja localizado na mesma cidade e, para isso, precisamos de um método entregaPedido que devolve como resultado se é possível realizar a entrega para um determinado cliente ou não e, em caso positivo, o tempo estimado de entrega