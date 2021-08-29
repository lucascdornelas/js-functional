/* Callback */
function exec(fn, e1, e2){
    if(typeof fn === 'function')
        return fn(e1, e2)
}

function somarNoTerminal(e1, e2){
    console.log(e1 + e2);
}

function subtrairNoTerminal(e1, e2){
    console.log(e1 - e2);
}

exec(somarNoTerminal, 56, 38);
exec(subtrairNoTerminal, 182, 27);


const fs = require('fs');
const path = require('path');

const caminho = path.join(__dirname, 'users.txt');

const printLine = (err, content) => {
    if(!err){
        console.log(content.toString());
    }else {
        throw err;
    }
}

fs.readFile(caminho, {}, printLine);