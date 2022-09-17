// Método call
function calculeIdade(anos) {
    return `Daqui a ${anos} anos, ${this.nome} terá ${this.idade + anos} anos de idade.`;
}
    
const pessoa1 = {
    nome: 'Rodrigo' ,
    idade: 22
}

const pessoa2 = {
    nome: 'Fátima' ,
    idade: 49
}

const pessoa4 = {
    nome: 'Pedro' ,
    idade: 9
}

const pessoa5 = {
    nome: 'Ana Julia' ,
    idade: 33
}

const animal = {
    nome: 'Bob' ,
    idade: 2 ,
    raca: "labrador"
}

console.log(calculeIdade.call(animal, 4))

// Método APPLY

function calculeIdade(anos) {
    return `Daqui a ${anos} anos, ${this.nome} terá ${this.idade + anos} anos de idade.`;
}
    
const pessoa6 = {
    nome: 'Matheus' ,
    idade: 16
}

const pessoa7 = {
    nome: 'Fabricio' ,
    idade: 36
}

const pessoa8 = {
    nome: 'Tiago' ,
    idade: 3
}

const pessoa9 = {
    nome: 'Ana' ,
    idade: 16
}

const animal2 = {
    nome: 'Sam' ,
    idade: 5 ,
    raca: "labrador"
}

console.log(calculeIdade.apply(animal2, [6])) 
console.log(calculeIdade.apply(pessoa7, [10])) 
