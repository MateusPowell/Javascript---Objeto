console.log("==== TESTE ===")

const televisao = {
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
}