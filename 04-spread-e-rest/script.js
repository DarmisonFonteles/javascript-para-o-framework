class Transporte {
  constructor() {
    this.terrestre = true;
  }
  andar() {
    console.log("andou");
  }
}

class Carro extends Transporte {
  constructor(cor, portas) {
    super();
    this.cor = cor;
    this.portas = portas;
  }
}

const carro = new Carro("vermelho", 4);

const cloneCarro = { ...carro };

console.log(carro);
console.log(cloneCarro);