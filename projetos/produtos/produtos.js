import { BancoDeDados } from "./BancoDeDados.js";

const ul = document.getElementById("listaProdutos");
const produtos = BancoDeDados.buscarTodos();

if(produtos.length === 0) {
    ul.innerHTML = '<li>Nenhum produto cadastrado!</li>'
} else {
    produtos.forEach(p => {
        const li = document.createElement("li");
        let texto = `${p.nome} - R$${p.preco} - Validade: ${p.validade}`
        li.textContent = texto;

        ul.appendChild(li);
    });
}
