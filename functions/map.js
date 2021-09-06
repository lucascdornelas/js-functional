/*
    Map:

    [1, 2, 3].map(fn)
    fn => Função callback que possui a lógica de transformação

    Ex.: Função que transforma um elemento em seu quadrado
    fn = element => Math.pow(element, 2)
    
    Resultado:     [1, 2, 3].map(fn) === [1, 4, 9]

    Ex.: Função que transforma uma string em seu primeiro carácter
    fn = string => element[0]
    
    Resultado: ["Lucas", "Cota", "Dornelas"].map(fn) === ["L", "C", "D"]

*/

const carrinho = [
    { nome: "Caneta", qtd: 10, preco: 7.99 },
    { nome: "Impressora", qtd: 0, preco: 649.50 },
    { nome: "Caderno", qtd: 4, preco: 27.10 },
    { nome: "Lapis", qtd: 3, preco: 5.82 },
    { nome: "Tesoura", qtd: 1, preco: 19.20 }
]

const getNome = element => element.nome;

const nomes = carrinho.map(getNome);
console.log("Nomes: ", nomes);

const getTotal = element => element.qtd * element.preco;

const totais = carrinho.map(getTotal);
console.log("Totais: ", totais);


/* Implementação da função map */
Array.prototype.meuMap = function(fn) {
    const mapped = []

    for(let i = 0; i < this.length; i++){
        mapped.push(fn(this[i], i, this));
    }

    return mapped;
}


const nomesMeuMap = carrinho.meuMap(getNome);
console.log("Nomes: ", nomesMeuMap);

const totaisMeuMap = carrinho.meuMap(getTotal);
console.log("Totais: ", totaisMeuMap);