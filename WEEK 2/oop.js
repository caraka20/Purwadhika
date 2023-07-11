// //function declaration
// function bikinObject(nama,email) {
//     let mhs = {}
//     mhs.nama = nama;
//     mhs.email = email
//     return mhs
// }
// let mhs3 = bikinObject('caraka','wijaya')
// console.log(mhs3);

// let obj = {}
// obj.halo = function () {
//     console.log('halo');
// }
// obj.halo()

// // function constructor
// function Mhs(nama,noHp,email) {
//     this.nama = nama;
//     this.noHp = noHp;
//     this.email = email

// }
// let mhs2 = new Mhs('caraka','999','crk')
// console.log(mhs2);

// function hai () {
//     console.log('hai');
// }
// new hai()


console.log('==============EXERCISE==============');
let obb = {
    mhs : function Test(nama,email,age,score) {
        let siswa = {}
        siswa.nama = nama
        siswa.email = email
        siswa.age = age
        siswa.score = score
        return siswa
    }
}
    let mhs5 = obb.mhs('caraka','carakawijaya@gmail.com',20,80)
    let mhs6 = obb.mhs('haekal','haekal@gmail.com',21,85)
    let mhs7 = obb.mhs('raf','raf@gmail.com',19,83)
    let mhs8 = obb.mhs('anggoro','anggoro@gmail.com',25,75)
    let mhs9 = obb.mhs('rubani','rubani@gmail.com',22,79)

function orang(siswa1,siswa2,siswa3) {
    siswa = {
        siswa1,
        siswa2,
        siswa3
    }
    console.log(siswa);
}
let siswas = orang(mhs5,mhs6,mhs7)
console.log(siswas);

// function hitung(siswa) {
//     score = {
//         highest : 1,
//         lowest : 2,
//         average : 2
//     }
//     age = {
//         highest : 1,
//         lowest : 2,
//         average : 2
//     }
    // function hitungScore() {
    //     this.score.average = (siswa.siswa1.score + siswa.siswa2.score + siswa.siswa3.score)/3
    //     this.score.highest = function name(params) {
            
    //     }
    // }
// }





let arang = [
    {
        nama : 'caraka',
        age : 22,
        score : 80
    },
    {
        nama : 'wijaya',
        age : 26,
        score : 79
    },
    {
        nama : 'random',
        age : 18,
        score : 85
    }
]

function getNilai(param) {
    let score = {}
    score.highest = 0
    score.lowest = 0
    score.avg = 0

    


    return param
}

console.log(getNilai(arang));

class Employee {
    constructor() {
        this.name
    }

    getName() {
        return this.name
    }

    setName(name) {
        if(name){
            this.name = name
        } else {
            console.log('john doe');
        }
    }
}
var dimas = new Employee()
dimas.setName()
dimas.getName()
console.log(dimas);


class Product {
    constructor(){
        this.productName;
        this.price
    }

    getProductName(){
        return this.productName
    }

    setProductName(productName){
        this.productName = productName
    }
}

class Book extends Product {
    constructor() {
        super()
        this.author
    }

    getAuthor(){
        return this.author
    }

    setAuthor(author){

        this.author = author
    }
}

const book1 = new Book()
book1.setProductName('how to make money')
book1.setAuthor('dimas')
// book1.getProductName()
console.log(book1);

class Transaction {
    constructor(){
        this.total
        this.products
        this.cart = []
    }

    addToCart(pick) {

    }
}


console.log('============== MATERI OOP ==============');
// constructor function
function Person () {
    this.nama = ''
    this.email = 'caraka@gmail.com'
    this.sayHello = function(name){
        console.log(`hallo ${name}, nama saya ${this.nama}`);
    }
}
const raka = new Person() //ini namanya object
const haekal = new Person()

raka.nama = 'caraka'
haekal.umur = 20

// raka.sayHello('haekal')
// console.log(raka);
// console.log(haekal);

// parameter pada function constructor
function Siswa (firstName,lastName) {
    this.firstName = firstName;
    this.lastName = lastName
    this.sayHello = function (nama) {
        console.log(`halo ${nama} saya ${firstName}`);
    }
}
const halo = new Siswa('manusia','biasa')
// halo.sayHello('haekal')


// constructor inheritance
function Employees (firstName) {
    this.firstName = firstName
    this.sayHello = function(name) {
        console.log(`hallo ${name} saya ${this.firstName}`);
    }
}
function Manager (firstName, lastName) {
    this.lastName = lastName
    Employees.call(this,firstName) //buat ngekopi kode yg ada di cunstructor lain ke cunstructor yg kita mau
}

const haekal1 = new Manager ('caraka', 'wijaya')
// console.log(haekal1);

// prototipe inheritance, ini akan masuk di prototipe nya, dan bukan nambah ke object nya.
Manager.prototype.run = function () {
    console.log(`go run ${this.firstName}`);
}
Manager.prototype.sayBye = function () {
    console.log('say good bye');
}


// Class
class Mahasiswa {
    constructor(firstName) {
        //isi properti yg dibutuhkan
        this.firstName = firstName
    }
    sayHello = function (nama) {
        console.log(`hallo nama saya ${nama} mahasiswa ${this.firstName} ${this.lastName}`);
    }
}

class CalonMahasiswa extends Mahasiswa {
    constructor(firstName, lastName){
        super(firstName)
        this.lastName = lastName
    }
}

const caraka = new Mahasiswa('caraka')
const haekal2 = new CalonMahasiswa('haekal','anggoro')

caraka.sayHello('haekal')
haekal2.sayHello('lalalla')
// console.log(caraka);



