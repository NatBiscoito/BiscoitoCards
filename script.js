let a = [
    {nome: "Carro",
     resposta: "Automovel",},
    {nome: "Humano",
     resposta: "Especie",},
    {nome: "Nat",
     resposta: "Louca",},
    {nome: "Cachorro",
     resposta: "Especie",}
                          
];

let i = Math.floor(Math.random() * a.length);

let r = a[i];
console.log(r); 

let answer = prompt(`Um ${r.nome} é:`)

if(answer === r.resposta){
    alert("Adivinhou!")
}