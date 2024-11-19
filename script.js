// Array's
let a = [
     {nome: "Ω",
     resposta: "Omega"},
     {nome: "Π",
     resposta: "Pi"},
     {nome: "Σ",
     resposta: "Sigma"},
     {nome: "Ξ",
     resposta: "Xi"},
    ];

let sorteados = []

let botões = [document.getElementById("button1"), document.getElementById("button2"), document.getElementById("button3")];

// Função p/gerar textos
function eText(id, text){
    let campo = document.getElementById(id);
    campo.innerHTML = text;
}

// Função inicial
function randomGenerator(){
    let i = Math.floor(Math.random() * a.length);
    let r = a[i];
    sorteados.push(r);
    console.log(sorteados); 
    eText("middle-char", `${r.nome}`);
    buttonShuffler(r);
}

// Função Embaralhar Botões
function buttonShuffler() {
}

// Função Verificar Resposta

function verifier(event) {
}

randomGenerator()