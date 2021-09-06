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