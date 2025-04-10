class Funcionario {
    _nome;
    _matricula;
    _anoAdimissao;
    _endereco;

    constructor(nome, matricula, anoAdimissao ,endereco) {
        this._nome = nome;
        this._matricula= matricula;
        this._anoAdimissao= anoAdimissao;
        this._endereco = endereco;
    }

    receberSalario(valor){
        return `${this._nome} recebeu R$ ${valor}`;
    }

    TempoEmpresa(anoAtual){
        return anoAtual - this.anoAdimissao;
    }

    baterponto(){
        return `Ponto registrado para ${this._nome}`
    }
}

class Gerente extends Funcionario{
    constructor(nome, matricula, anoDeAdimissao ,endereco){
    super(nome, matricula, anoDeAdimissao ,endereco);
    }
    receberSalario(valor) {
        let total = valor + (valor * 0.2);
        return `${this.getNome()} recebu um bonus de R$${total}}`;
    }
    autorizarDespesa(valor) {
        if(valor > 1000) {
            return `Despa de R$ ${valor} autorizada por ${this.getNome()}`;
        } else {
            return `Despa de R$ ${valor} não precisa de autorização ou codigo invalido`;
        }
    }
}

class OperadorDeCaixa extends Funcionario{
    constructor(nome, matricula, anoDeAdimissao ,endereco){
    super(nome, matricula, anoDeAdimissao ,endereco);
    }
    fecharCaixa(valortotal) { 
        return `${this.getNome()} fechou o caixa com o valor de  R$${valorTotal}.`;
    }
}

class Estagiario extends Funcionario{
    constructor (nome, matricula, anoDeAdimissao ,endereco){
        super(nome, matricula, anoDeAdimissao ,endereco)
    }

}

let funcionario = new Funcionario("João Silva", "12345", 2015, "Rua A, 123");
funcionario1.mostrarDados()