let alvos = [];
let pontuacao = 0;

function setup() {
  createCanvas(1500, 1000);
  criarAlvo();
}

function draw() {
  background(220);
  
  // Atualiza e exibe os alvos
  for (let i = alvos.length - 1; i >= 0; i--) {
    alvos[i].atualizar();
    alvos[i].exibir();
  }
  
  // Exibe a pontuação
  textSize(24);
  text("Pontuação: " + pontuacao, 10, 30);
}

function mousePressed() {
  // Verifica se o mouse está sobre um alvo e o remove se clicado
  for (let i = alvos.length - 1; i >= 0; i--) {
    if (alvos[i].estaClicado()) {
      alvos.splice(i, 1);
      pontuacao++;
      criarAlvo();
    }
  }
}

function criarAlvo() {
  let x = random(width - 50);
  let y = random(height - 50);
  let raio = random(20, 50);
  let cor = color(random(255), random(255), random(255));
  let alvo = new Alvo(x, y, raio, cor);
  alvos.push(alvo);
}

class Alvo {
  constructor(x, y, raio, cor) {
    this.x = x;
    this.y = y;
    this.raio = raio;
    this.cor = cor;
  }
  
  exibir() {
    fill(this.cor);
    ellipse(this.x, this.y, this.raio * 2, this.raio * 2);
  }
  
  atualizar() {
    // atualize a lógica do alvo aqui, se necessário
  }
  
  estaClicado() {
    return dist(this.x, this.y, mouseX, mouseY) < this.raio;
  }
}
