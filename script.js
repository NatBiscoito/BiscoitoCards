// Array dos caracteres
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

// Função para mudar o texto na tela
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

function buttonShuffler(correto) {
}

function verifier(event){
    let buttonClicked = event.target.innerHTML;
    if(buttonClicked === correto){
        return randomGenerator();
    }
} 

randomGenerator()