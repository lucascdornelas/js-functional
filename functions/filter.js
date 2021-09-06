/*
    Filter:

    [6, 5, 7, 3, 9, 10].filter(fn)
    fn => Função callback que possui a lógica de filtração

    Ex.: Função que filtra elementos maiores ou igual à 7.
    fn = element => element >= 7
    
    Resultado:     [6, 5, 7, 3, 9, 10].filter(fn) === [7, 9, 10]

*/

const carrinho = [
    { nome: "Caneta", qtd: 10, preco: 7.99 },
    { nome: "Impressora", qtd: 0, preco: 649.50 },
    { nome: "Caderno", qtd: 4, preco: 27.10 },
    { nome: "Lapis", qtd: 3, preco: 5.82 },
    { nome: "Tesoura", qtd: 1, preco: 19.20 }
]

const qtdNaoNula = item => item.qtd > 0;

const carrinhoValido = carrinho.filter(qtdNaoNula)
console.log("Carrinho válido: ", carrinhoValido);



/* Implementação da função filter */
Array.prototype.meuFilter = function(fn) {
    const filtered = []

    for(let i = 0; i < this.length; i++){
        if(fn(this[i], i, this)){
            filtered.push(this[i]);
        }
    }

    return filtered;
}


const carrinhoValidoMeuFilter = carrinho.meuFilter(qtdNaoNula)
console.log("Carrinho válido: ", carrinhoValidoMeuFilter);