class Animal {
    constructor (name, age, isAnimal) {
        this.name = name
        this.age = age
        this.isAnimal = isAnimal
    }
}

class Rabbit extends Animal {
    constructor(name, age, isAnimal) {
        super(name, age, isAnimal)
    }

    eat(){
        if (this.isAnimal === true) {
        return `${this.name} sedang makan` //is animal true
        }
    }
}

class Eagle extends Animal {
    constructor (name, age, isAnimal) {
        super (name, age, isAnimal)
    }

    fly(){
        if (this.isAnimal === false) {
            return `${this.name} sedang terbang` //is animal false
        }
    }
}
    
const myRabbit = new Rabbit ('labi', 2, true)
const myAgle = new Eagle ('Elo', 4, true)

// console.log(myRabbit.eat());
// console.log(myAgle.fly());



console.log('===== ALGORITH =====');
