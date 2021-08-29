// function declaration
function welcome(name) {
    return `welcome ${name}!`;
}

console.log(welcome("Lucas"));

// function expression
const welcome2 = function (name) {
    return `welcome2 ${name}`
}

console.log(welcome2("Lucas"));

// function run function callback
function runCallback(fn) {
    if (typeof fn === 'function')
        fn();
}

function callback(){
    console.log("callback");
}

runCallback(callback);

// function return
function pow(b){
    return function (e) {
        return Math.pow(b, e);
    }
}
console.log(pow(2)(8));

// Desafio:
// a) somar(3)(4)(5)

function somar(e1) {
    return function (e2) {
        return function (e3){
            return e1 + e2 + e3;
        }
    }
}

console.log(somar(1)(2)(3));

// b) calcular(e1)(e2)(fn)
function calcular(e1){
    return function(e2) {
        return function(fn) {
            if (typeof fn === 'function')
                return fn(e1, e2);
        }
    }
}

function sum(e1, e2) {
    return e1 + e2;
}

function mul(e1, e2) {
    return e1 * e2;
}

console.log(calcular(2)(8)(sum)); // 10
console.log(calcular(2)(8)(mul)); // 16

// Arrow function
const welcomeAnonymous = () => console.log("Welcome anonymous");

welcomeAnonymous();