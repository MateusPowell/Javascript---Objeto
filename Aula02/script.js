console.log("==== TESTE ===")

// Televisao normal

/* const televisao = {
    canal: "null",
    volume: 0,
    ligada: false,
    ligar() {
        this.ligada = true;
        return "ligada"
    },
    desligar(){
        this.ligada = false
        return "desligada"
    },
    mudaDeCanal(i){
        this.canal = i 
    },
    aumentaVolume() {
        this.volume = this.volume+1;   
    },
    diminuiVolume(){
        this.volume = this.volume-1;
    }
}*/

// Televisao Construtora

/* function televisao (canal,volume,ligada=false){
    this.canal = canal,
    this.volume = volume,
    this.ligada = ligada
}

const assistindo = new televisao("20", 10,true)
const assistindo2= new televisao("20", 10)
console.log(assistindo)
console.log(assistindo2)*/

// televisao class

class televisao {

    constructor(canal, volume){
        this.canal = canal;
        this.volume = volume;
        this.ligado = false;        
    }
    ligar(){
        this.ligado = true
        console.log("ligada")
    }
    delisgar(){
        this.ligado = false
        console.log("desligada")
    }
    mudaDeCanal(i){
        this.canal = i 
    }
    aumentaVolume() {
        this.volume = this.volume+1; 
        console.log("volume " + this.volume)  
    }
    diminuiVolume(){
        this.volume = this.volume-1;        
        console.log("volume " + this.volume)
    }
}

const tele = new televisao(5,10)

