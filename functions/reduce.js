/*
    Reduce:

    [3, 2, 1, -3, 4, 7].reduce(fn, i)
    fn => Função callback que possui uma lógica redutora
    i => Dado inicial

    Ex.: Função que soma os elementos de um array
    fn = (acc, elem) => acc + elem;
    
    Resultado:     [3, 2, 1, -3, 4, 7].reduce(fn, 0) === 14
*/

const carrinho = [
    { nome: "Caneta", qtd: 10, preco: 7.99 },
    { nome: "Impressora", qtd: 0, preco: 649.50 },
    { nome: "Caderno", qtd: 4, preco: 27.10 },
    { nome: "Lapis", qtd: 3, preco: 5.82 },
    { nome: "Tesoura", qtd: 1, preco: 19.20 }
]

const getTotais = item => item.qtd * item.preco;
const getTotal = (acc, elem) => acc + elem

const total = carrinho.map(getTotais).reduce(getTotal);

console.log("Total R$ " + total.toFixed(2));

/* 
    Desafio: 
    1. elementos frágeis
    2. quantidade e preco
    3.1 Totais
    3.2 Media dos totais
*/

const carrinho2 = [
    { nome: "Caneta", qtd: 10, preco: 7.99, fragil: true },
    { nome: "Impressora", qtd: 1, preco: 649.50, fragil: true },
    { nome: "Caderno", qtd: 4, preco: 27.10, fragil: false },
    { nome: "Lapis", qtd: 3, preco: 5.82, fragil: false },
    { nome: "Tesoura", qtd: 1, preco: 19.20, fragil: true }
]

const getFrageis = item => item.fragil
const getTotais2 = item => {
    return { qtd: item.qtd, preco: item.preco, total: item.qtd * item.preco }
}
const getMedia = (acc, elem, index, array) => acc + (elem.total / array.length);

// 1
const frageis = carrinho2.filter(getFrageis);
console.log("Frageis ", frageis);

//2
const totais = carrinho2.map(getTotais2);
console.log("Totais: ", totais);

//3 
const media = totais.reduce(getMedia, 0)
console.log("Media: R$ ", media)


