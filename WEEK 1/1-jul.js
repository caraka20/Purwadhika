// arguments
function tambah() {
  hasil = 0;
  for (i = 0; i < arguments.length; i++) {
    hasil += arguments[i];
  }
  return hasil;
}
// console.log(tambah(1, 2, 3, 4, 5, 6, 7, 8, 9));

// rekrusif => function a yg memanggil function a
function cetakAngka(n) {
  if (n == 0) {
    return;
  }
  console.log(n);
  cetakAngka(n - 1);
}
// cetakAngka(10);

function factorial(n) {
  if (n == 0) return 1;
  return n * factorial(n - 1);
}
// console.log(factorial(5));

let fungsiExpression = function () {
  console.log("ini fungsion expression");
};
// fungsiExpression()

// manipulasi arr
// 1. menghapus arr
let arr = ["caraka", "wijaya", "hehe"];
arr[0] = undefined;
// console.log(arr);

// 2. menampilkan isi arr
let arr1 = ["caraka", "wijaya", "huehhehehe", "hahhaha"];
for (i = 0; i < arr1.length; i++) {
  // console.log(arr1[i])
}

//========================= METHOD ARR ===================================
// 1. JOIN => menggabungkan semua isi arr dan mengubahnya menjadi string
let arr2 = ["caraka", "wijaya", "hehehe", "wkwk"];
// console.log(arr2.join(' - '));

// 2.PUSH => menambah elemnt arr di akhir arr nya
let arr3 = ["aku", "seorang", "manusia"];
arr3.push("biasa", "saja");
// console.log(arr3);

// 3. POP => menghilangkan element terahir dalam sebuah arr
let arr4 = ["aku", "seorang", "manusia", "biasa"];
arr4.pop();
arr4.pop();
// console.log(arr4);

// 4. UNSHIFT => menambahkan element baru di awal arr tanpa menghilangkan arr [0]
let arr5 = ["aku", "seorang", "manusia", "biasa"];
arr5.unshift("pertama", "wkwk");
// console.log(arr5);

// 5. SHIFT => menghapus element diawal arr
let arr6 = ["aku", "seorang", "manusia", "biasa"];
arr6.shift();
arr6.shift();
// console.log(arr6);

// 6. SPLICE = untuk menyisipkan element arr ditengah tengah
let arr7 = ["aku", "seorang", "manusia", "biasa"];
// ===== splice(indexAwal, mauDihapusBrp, elementBaru1, elementBaru2, ...) =====
arr7.splice(2, 1, "splice1", "splice2");
// console.log(arr7);

// 7. SLICE = mengambil isi arr dari index ke berapa sampai berapa
let arr8 = ["aku", "seorang", "manusia", "biasa"];
// ============ slice(indexAwal,akhir) ============
let arrBaru = arr8.slice(1, 3);
// console.log(arrBaru);

// 8. forEach = untuk melakukan perulangan arr fungsinya sama seperti for, (khusus untuk arr)
let arr9 = ["caraka", "wijaya", "adalah", "manusia"];
arr9.forEach(function (n, i) {
  // console.log("orang ke " + (i + 1) + " adalah " + n);
});

// 9. map = sama dengan forEach, kalau map dia mengembalikan nilai arr, jdi hasil akhirnya dalam bentuk arr
let arr10 = [1, 2, 3, 5, 6, 7, 8, 4];
let tampil = arr10.map(function (n) {
  return n * 2;
});
// console.log(tampil.join(' - '));

// 10. sort = untuk mengurutkah nilai sebuah arr
let arr11 = [1, 2, 3, 6, 7, 5, 8, 4, 10, 20];
// console.log(arr11.join(' - '));
arr11.sort(function (a, b) {
  return a - b;
});
// console.log(arr11.join(' - '));

// 11. filter = mencari nilai pada arr dan mengembalikannya dalam bentuk arr
let arr12 = [1, 2, 3, 6, 7, 5, 8, 4, 10, 20];
let baru = arr12.filter(function (n) {
  return n > 5;
});
// console.log(baru);

// 12. find = mencari nilai pada arr dan mengembalikannya dan tidak dalam bentuk arr dan hanya mengembalikan 1 nilai pertama
let arr13 = [1, 2, 3, 6, 7, 5, 8, 4, 10, 20];
let baru1 = arr12.find(function (n) {
  return n > 5;
});
// console.log(baru1);

// menampilkan jumlah length pd arr
let arr14 = ["caraka", "wijaya", "hehehe", "hahhaha"];
let indexArr = arr14.map((nama) => {
  return nama.length;
});
// console.log(indexArr);

// for of = fungsinya sama dengan forEach dan for biasa, dan  akan menghasilkan isi arr. dan ini tidak akan dpt indexnya
const mhs = ["caraka", "wijaya", "hehehe"];
for (const n of mhs) {
  // console.log(n);
}

// for in = properti pada object. looping untuk object, ini bisa menghasilkan index
const mhs2 = {
  nama: "caraka",
  umur: 22,
  email: "carakawijaya2001@gmail.com",
};
for (n in mhs2) {
  // console.log(mhs2[n]);
}

//closure = merupakan kombinasi antara function dan lingkungan leksial
// didalam function tersebut/sebuah function ketika memiliki akses ke parent scope nya, meskipun parent scopenya
// sudah selesai di eksekusi/ function me return function
/*
kenapa menggunakan closure ?
1. membuat function factori
2. membuat method pribadi
3. 
*/

// lexical scope
function init() {
  let nama = "caraka"; //local var
  function tampilNama() {
    //inner function (closure)
    // let nama = 'wijaya' // kalo ada var nama disini maka tampilNama() bukan disebut closure
    console.log(nama);
  }
  tampilNama();
}
// init()

function init1() {
  // let nama = 'caraka' //local var
  return function (nama) {
    //inner function (closure)
    console.log(nama);
  };
}
let panggil = init1();
// panggil('wijaya')

function ucapkanSalam(waktu) {
  return function (nama) {
    console.log(`halo ${nama}, selamat ${waktu}`);
  };
}
let selamatPagi = ucapkanSalam("pagi");
let selamatSiang = ucapkanSalam("Siang");
let selamatMalam = ucapkanSalam("Malam");
// console.dir(selamatPagi)
// selamatPagi('rafa')
// console.log(ucapkanSalam("Pagi")('raka'));

// menampilkan berapa x function itu berjalan dengan closure
function add() {
  let angka = 0;
  return function () {
    return ++angka;
  };
}
let a = add();
// console.log(a());
// console.log(a());
// console.log(a());

// higher order function
/*
dfinisi = function yg beroperasi pada function lain baik itu digunakan dalam argumen
maupun sebagai return value/ function yg memiliki parameter callback(parameternya berupa function juga).
kenapa higher order function?
*/
function kerjakanTugas(matakuliah, selesai) {
  //kerjakanTugas disebut higher oreder function, selesai disebut callback
  console.log(`tugas ${matakuliah} sedang dikerjakan`);
  selesai();
}
function selesai() {
  console.log(`tugas telah selesai`);
}
// kerjakanTugas('pemrograman', selesai)

function hitung(params, aksi) {
  for (let i = 1; i <= params; i++) {
    aksi(i);
  }
}
// hitung(10, console.log);

// destructuring assigment 
/*
pengertian : merupakan sebuat expression/sintaks pada js yg membuat kita dapat 'membongkar' nilai arr atau properti pd object
kedalam variable yg terpisah.
*/
const coba3 = ['satu','dua','tiga']
const [b,c,d] = coba3
// console.log(b);
// console.log(c);
// console.log(d);

// concat => sama seperti push tetapi tidak merubah arr sebelumnya, mennggabungkan 2 arr menjadi 1