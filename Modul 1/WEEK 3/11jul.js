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
/*

*/
function cek(arr) {
    let hasil = []
    for (let i = 0; i < arr.length; i++) {
        let tampung = arr[i]
        for (let j = (i+1); j < arr.length; j++) {
            if (tampung < arr[j]) {
                tampung = tampung

            } else if (tampung > arr[j]) {
                tampung = arr[j]

            }
        }
        hasil.push(tampung)
    }
    return hasil
}

console.log(cek([1,4,5,2,7,9,3,8]));


class PlaylistMusic {
    constructor(...playList) {
        this.playList = playList
        this.index = 0
        // console.log(playList);
    }

    play(){
        return console.log(`memainkan music pertama dengan judul ${this.playList[0].title}`);
    }

    next(){
        if (this.index == this.playList-1) {
            this.index = this.playList
        } else {
            this.index++
        }
        return console.log(`memainkan music ke ${this.index + 1} berjudul ${this.playList[this.index].title}`);
    }

    prev(){
        if (this.index == 0) {
            this.index = 0
        } else {
            this.index--
        }
        return console.log(`memainkan music ke ${this.index + 1} berjudul ${this.playList[this.index].title}`);
    }

    shuffle(){ //random index
        var nilaiRandom = Math.ceil(Math.random() * this.playList.length - 1)
        this.index = nilaiRandom
        return console.log(`memainkan music random ke ${this.index + 1} berjudul ${this.playList[this.index].title}`)
    }
    
}

class Music{
    constructor(title, author){
        this.title = title
        this.author = author
    }
}

const music1 = new Music('pertama','aaa2')
const music2 = new Music('kedua','bbb2')
const music3 = new Music('ketiga','ccc2')
const music4 = new Music('keempat','ddd2')

const satu = new PlaylistMusic(music1,music2,music3,music4)
console.log(satu);
satu.play()
satu.next()
satu.next()
satu.prev()
satu.shuffle()
satu.next()
satu.next()
satu.prev()