// ini comment sebaris
/*
ini
comment
multi baris
*/

console.log("hello world");



// variable
var name = "nama"
name = "rian"
console.log(name);

// template literal
let namaLengkap = `
carakka
wijaya
`
console.log(namaLengkap);


let age = 10
console.log(age);
age = 23
console.log(age);

const PI = 3.14
// const PI = 17

console.log(PI);

let nama = "caraka"
console.log(nama[0],"\n" + nama[1]);

let bigInt = 767742934297n
console.log(typeof bigInt);

let single = false
let eliteGlobal = true
console.log(single, "", eliteGlobal);

let myDate = new Date()
console.log(myDate.getMonth() + 1);
console.log(myDate.getFullYear());


// operator
let num1 =  10
let num2 =  20
let result = 0

let add =  num1 + num2
let min = num2 - num1
let kali = num1 * num2
let bagi = num2 / num1
let modulus = num2 % num1

console.log(add);
console.log(min);
console.log(kali);
console.log(bagi);
console.log(modulus);


console.log(1+1+'1');
console.log('1'+1+1);


result += num1
console.log(result);

result -= num2
console.log(result);

result *= num1
console.log(result);

result /= num2
console.log(result);

result **= 2
console.log(result);

result %= 2
console.log(result);

let isOk = true
console.log(!isOk);



// DEFINE panjang equals to 10
// SET lebar equals to 20
let panjang = 10
let lebar = 20

// 1. SET area equals to panjang multiplication lebar
// 2. SET keliling equals to panjang addition panjang addition lebar addition lebar
// COMPUTE luas
// luas equals to panjang MULTIPLY lebar
// PRINT luas
let area = panjang * lebar
let keliling = panjang + panjang + lebar + lebar


// 3. 
// SET jariJari equals to 50
// SET diameter equals to jariJari Multiplication 2
// SET kelilingLingkaran equals to 3.14 multiplication diameter
// SET area equals to 3.14 multiplication jariJari multiplication jariJari
let jariJari = 50
let diameter = jariJari * 2
let kelilingLingkaran = 3.14 * diameter
let luasLingkaran = 3.14 * jariJari * jariJari


// 4.
// SET alas equals to 20
// SET tinggi equals to 10
let alas = 20
let tinggi = 10

let miring 
miring =  (alas**2) + (tinggi**2)
console.log(miring, 'cm');



// SET tanggal1 equals to new date ('2023-06-20')
// SET tanggal2 equals to new date ('2023-06-10')
let tanggal1 = new Date('2023-08-27')
let tanggal2 = new Date('2023-06-22')

let day1 = tanggal1
let day2 = tanggal2
// console.log(day1);

// SET selisih equals to Math.abs(tanggal1 - tanggal2)
let tanggal = (day1 - day2) / (24*3600*1000)
console.log(Math.abs(tanggal),'hari');



let day = 1000;
  
const year = Math.floor(day / 365);
console.log(year, 'tahun');

const month = Math.floor((day - (year * 365)) /30 )
console.log(month, 'bulan');

const tgl = Math.floor((day - 365) % 30)
console.log(tgl, 'hari');













