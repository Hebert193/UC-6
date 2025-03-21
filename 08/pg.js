var prompt = require('prompt-sync')();
let clientes = ["Ana", "Carlos", "Gabriel", "Joao", "Maria"];

// Entrada de Dados
let nomeInformado = prompt("Informe o nome do cliente que deseja buscar: ");

//// BUSCA LINEAR COM FUNÇÕES NATIVAS
function buscarCliente(nome) {
    let encontrado = false;

    clientes.forEach((cliente, i) => {
        if(cliente === nome) {
            console.log('Cliente encontradao na posição ' + i);
            encontrado = true;
        }
    });

    if (!encontrado) {
        console.log("Cliente não encontrado.");
    }
}

//console.log(buscarCliente(nomeInformado));

//// BUSCA COM FUNÇÃO NATIVA
console.log(clientes.indexOf(nomeInformado))

// Busca linear com estrutura de dados
function buscarlinear(array, valor) {
    for(let i = 0; i < array.length; i++) {
        if(array[i] === valor) {
            return i ;
        }
    }
    return -1; //retorna o padrao -1 ao não eoncontrado o elemento
};

console.log(buscarlinear(clientes, nomeInformado));