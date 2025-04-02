class Animal {
    emiteSom(){
        console.log("O Animal fez barulho!")
    }
}

class Cachorro extends Animal{
    emitirSom(){
        console.log("AU!AU!AU");
    }
}

class Gato extends Animal{
    emitirSom(){
        super.emiteSom();
        console.log("MIAAAAAAUUUUUUU!");
    }
}

let animal1 = new Cachorro();
let animal2 = new Gato();
animal1.emiteSom();
animal2.emiteSom();