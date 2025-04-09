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

    reberSalario(){

    }

    TempoEmpresa(){

    }

    baterponto(){

    }
}

class Gerente {
    constructor(nome, matricula, anoDeAdimissao ,endereco){
    super(nome, matricula, anoDeAdimissao ,endereco);
    }
}

class OperadorDeCaixa {
    constructor(nome, matricula, anoDeAdimissao ,endereco){
    super(nome, matricula, anoDeAdimissao ,endereco);
    }
}

class Estagiario {
    constructor (nome, matricula, anoDeAdimissao ,endereco){
        super(nome, matricula, anoDeAdimissao ,endereco)
    }
}

let funcionario = new Funcionario("João Silva", "12345", 2015, "Rua A, 123");
funcionario1.mostrarDados()