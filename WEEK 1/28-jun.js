console.log("======================================================");
let age = 16;
if (age >= 17) {
  console.log("sudah punya KTP");
} else {
  console.log("belum punya KTP");
}

let warna = "merah";
if (warna == "merah") {
  console.log("you must stop");
} else if (warna == "kuning") {
  console.log("you must prepare");
} else if (warna == "hijau") {
  console.log("you must go");
} else {
  console.log("invalid color");
}

const grade = "a";
if (grade == "A") {
  console.log("aaaa");
} else if (grade == "B") {
  console.log("bbb");
}

// switch case
let state = "green";
switch (state) {
  case "red":
    console.log("you must stop");
    break;
  case "yellow":
    console.log("you must prepare");
    break;
  case "green":
    console.log("you must go");
    break;
  default:
    console.log("invalid color");
    break;
}

let nilai = 79;
switch (true) {
  case nilai >= 90 && nilai <= 100:
    console.log("A");
    break;
  case nilai >= 80 && nilai <= 89:
    console.log("B");
    break;
  default:
    console.log("tidak");
    break;
}

console.log("=================PERULANGAN=================");
// let i = 1
for (let i = 1; i <= 3; i++) {
  console.log(`langkah for ke => ${i}`);
}
// console.log(`diluar loop => ${i}`)

let a = 1;
while (a <= 3) {
  console.log(`ini while ke => ${a}`);
  a++;
}

let b = 1;
do {
  console.log(`do while ke ${b}`);
  b++;
} while (b <= 3);

for (let c = 1; c <= 5; c++) {
  if (c == 5 || c == 3) continue;
  console.log(c);
}

console.log("==================PSEUDO==================");
/*
    DEFINE i EQUALS TO 1
    WHILE i LESS OR EQUALS TO 5 THEN
    IF i EQUALS to 5 AND i EQUALS TO 3
    THEN CONTINUE
    PRINT i
    SET i EQUALS i PLUS 1
*/

console.log("=============LATIHAN=============");

// 1 Write a code to convert celsius to fahrenheit.
let derajatC = 20;

let derajatF = (9 / 5) * derajatC + 32;
console.log(derajatF);

// 2 Write a code to check whether the number is odd or even
let angka = 10;
for (i = 1; i <= angka; i++) {
  if (i % 2 == 0) {
    console.log(i, "termasuk bilangan genap");
  } else if (i % 2 == 1) {
    console.log(i, "termasuk bilangan ganjil");
  }
}

// 3 Write a code to check whether the number is prime number or not
var angka2 = 29;
var bilangan = 0;

for (let i = 1; i <= angka2; i++) {
  if (angka2 % i == 0) {
    bilangan++;
  }

  // console.log(i);
}
if (bilangan == 2) {
  console.log(angka2, "adalah bilangan prima");
} else {
  console.log(angka2, "bukan bilangan prima");
}

// coba coba
let isPrima = true;
let angkaa = 10;
for (let i = 2; i < angkaa; i++) {
  if (angkaa % i === 0) {
    isPrima = false;
    break;
  }
}

console.log(isPrima);

/* 4 Write a code to find the sum of the numbers 1 to N.
Example : 5 → 1 + 2 + 3 + 4 + 5 = 15 */
var angka3 = 15;
var hasil = 0;
for (let i = 1; i <= angka3; i++) {
  hasil += i;
}
console.log(hasil + " adalah hasil penjumlahan 1 sampai " + angka3);

// 5 Write a code to find factorial of a number.
let angka4 = 5;
let factorial = 1;
for (let i = angka4; i > 0; i--) {
  factorial = factorial * i;
}
console.log(factorial, "adalah factorial dari", angka4);

// 6. Write a code to print the first N fibonacci numbers
let angka5 = 5;
let N = 0;

for (let i = 0; i <= angka5; i++) {
  N = N + i;
}
console.log(N, "adalah penjumlahan tiap angka dari 0 ke", angka5);

// 0 + 1 + 1 + 2 + 3 + 5 + 8
let cekFibonaci = 7;
let result = [0, 1];

for (let i = 1; i <= cekFibonaci; i++) {
  result.push(result[i] + result[i - 1]);
}
console.log(result);

let fn = 0;
let sn = 1;
let resultTemp = 0;
let resultT = "0,1";

for (let i = 2; i < 10; i++) {
  resultTemp = fn + sn;
  fn = sn;
  sn = resultTemp;

  resultT += "," + resultTemp;
}
console.log(resultT);

let nama = "dimas";
let aman = "";
for (let i = nama.length - 1; i >= 0; i--) {
  aman += nama[i];
}
console.log(aman);

////////////////////////////
var bintang = "";

for (var i = 0; i < 5; i++) {
  for (var j = 0; j <= i; j++) {
    bintang += "* ";
  }
  bintang += "\n";
}
console.log(bintang);

////////////////////////////
var bintangg = "";

for (var i = 5; i > 0; i--) {
  for (var j = 0; j < i; j++) {
    bintangg += "* ";
  }
  bintangg += "\n";
}
console.log(bintangg);


////////////////////////////
var bintanggg = "";
for (var i = 5; i > 0; i--) {
  for (var j = 5; j > 0; j--) {
    if (j <= i) {
      bintanggg += "*";
    } else {
      bintanggg += " ";
    }
  }
  bintanggg += "\n";
}

console.log(bintanggg);
