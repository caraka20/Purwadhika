console.log('======== QUIZ PLUS MINUS ========');
arr = [-4, 3, -9, 0, 4, 1]

function plusMinus(arr) {
    // Write your code here
    let positif = 0
    let negatif = 0
    let nol = 0
    let result = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0 ) {
            positif++
        } else if (arr[i] < 0) {
            negatif++
        } else if (arr[i] == 0) {
            nol++
        }
    }
    let post = positif/arr.length
    let neg = negatif/arr.length
    let noll = nol/arr.length
    result.push(post.toFixed(6))
    result.push(neg.toFixed(6))
    result.push(noll.toFixed(6))


    return arr
}
// console.log(plusMinus(arr));
// let aa='0.5000'
// console.log(parseInt(aa));
const stringArray = ['0.500000', '0.333333', '0.166667'];
const numberArray = stringArray.map(parseFloat);
console.log(numberArray); // Output: [0.5, 0.333333, 0.166667]


console.log('\n');
console.log('======== QUIZ Sales by Match ========');
/*
mencari bilangan yg sama,
kalo ada yg sama, dihitung ada berapa jumlah nya, misal angka 10 total ada 4, berarti total itu nanti dibagi 2.
setelah itu bikin result dengan nilai total
*/

function countOccurrences(ar) {
    let test = ar
    let sama = 0

for ( let i = 0; i < ar.length; i++) {
    for (let j = 0; j < test.length; j++) {
        if (ar[i] === test[j] && i !== j) {
            test[j] = undefined
            test[i] = null
            // sama++
        } 
    }
}
    // console.log(sama);
    for (let k = 0; k < test.length; k++) {
        if (test[k] == undefined || test[k] == null)
        sama++
    }
    return sama/2
  }
  
  // Contoh penggunaan
  const numbers = [10, 20, 20, 10, 10, 30, 50, 10, 20]
//   const numbers = [1, 1, 3, 1, 2, 1, 3,3, 3, 3,] //4
//   1,x,3,x,2,x,3,3,3,3
console.log(countOccurrences(numbers));


console.log('\n');
console.log('======== QUIZ 3 ========');
/*


*/
function matrix(arr) {
    // Write your code here

let matrix = []
let tampungMatrix = []
// let tampung = []

for (let i = 0; i < arr.length; i++) {
    if (i % 3 == 0 && i !== 0) {
        matrix.push(tampungMatrix)
        tampungMatrix =[]
    }
    tampungMatrix.push(arr[i])
}
matrix.push(tampungMatrix)

//cari matrix pertama dan kedua
  let matrix1 = 0;
  let matrix2 = 0;

    // matrix 3 dimensi = 
    // index [0] = baris 1 kolom 1
    // index [1] = baris 2 kolom 2
    // index [2] = baris 3 kolom 3
    // index [3] = baris 1 kolom 3
    // index [4] = baris 2 kolom 2
    // index [5] = baris 3 kolom 1
  for (let i = 0; i < matrix.length; i++) {
    matrix1 += matrix[i][i];
    matrix2 += matrix[i][matrix.length - 1 - i];
  }
return matrix2 - matrix1
}


let arrr = [11,2,4,4,5,6,10,8,-12] //output = 15
// 11+5-12 = 4
// 4+5+10 = 19
console.log(matrix(arrr));



console.log('\n');
console.log('========== Divisible Sum Pairs ==========');
function divisibleSumPairs(n, k, ar) {
    let hasil = 0;
  
    for (let i = 0; i < n - 1; i++) {
      for (let j = i + 1; j < n; j++) {
        if ((ar[i] + ar[j]) % k === 0) {
          hasil++;
        }
      }
    }
    return hasil;
  }
  /*
  perulangan dari index 0 sampai n-1
  dari index ke 1 sampai n-1
  dari index ke 2 sampai n-1 .... begitu seterusnya
  */
  let n = 6;
  let k = 3;
  let ar = [1, 3, 2, 6, 1, 2];
  let result = divisibleSumPairs(n, k, ar);
  console.log(result); // 5
  



  console.log('\n');
  console.log('========== Staircase =========');
  function staircase(n) {
    //melakukan perulangan sebanyak n
    for (let i = 1; i <= n; i++) { //6
      let tampung1 = ''; // '  3  '
      let pagar = ''; // ###
// pada perulangan ke 1, menghasilkan output 1 pagar, dan 5 spasi, artinya jumlah pagar == jumlah perulangannya, dan spasi adalah sisa nya
      for (let j = 0; j < n - i; j++) { // 6 - 3 = 3
        tampung1 += ' '; // '   '
      }
      for (let k = 0; k < i; k++) { //3
        pagar += '#'; //###
      }
      console.log(tampung1 + pagar);
    }
  }
staircase(6)
/*
     #
    ##
   ###
  ####
 #####
######
*/

console.log('\n');
console.log('========== Caesar Chiper Encryption ==========');
/*
teknik mengganti huruf awal
0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15
A B C D E F G H I J K  L  M  N   O  P 

16 17 18 19 20 21 22 23 24 25
Q  R  S  T  U  V  W  X  Y  Z
*/
function caesar_chiper(plain_text, key) {
  // Write your code here
let huruf = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
let tampung = ''
let capital = plain_text.toUpperCase() //ganti ke huruf besar semua
// console.log(capital);
// let plain_textt = plain_text.toU

if (capital.length < 1 || capital.length >= 1000 || key < 2 || key > 3000) {
  tampung = 'string'
} else if (key === 3000) {
  for (let i = 0; i < capital.length; i++) {
    //setiap yg bernilai spasi maka akan ditambah spasi dan langsung break untuk menghentikan looping
    if (capital[i] === ' ') {
        tampung += ' '
     } else if(huruf.includes(capital[i])) { //cek huruf sama dan tampung ke variable tampung
      // tampung1.push(j+key)
      for (let j = 0; j < huruf.length; j++) {
        if (capital[i] === huruf[j]) {
          tampung += huruf[(j-1)%26] //j+key karena setiap huruf akan maju kedepan sebanyak key, dan %26 jika > 26 maka akan ngulang dari pertama
        }
      }
     } else {
       tampung += plain_text[i]
     } 
   }
}

else {
      for (let i = 0; i < capital.length; i++) {
     //setiap yg bernilai spasi maka akan ditambah spasi dan langsung break untuk menghentikan looping
     if (capital[i] === ' ') {
         tampung += ' '
      } else if(huruf.includes(capital[i])) { //cek huruf sama dan tampung ke variable tampung
       // tampung1.push(j+key)
       for (let j = 0; j < huruf.length; j++) {
         if (capital[i] === huruf[j]) {
           tampung += huruf[(j+key)%26] //j+key karena setiap huruf akan maju kedepan sebanyak key, dan %26 jika > 26 maka akan ngulang dari pertama
         }
       }
      } else {
        tampung += plain_text[i]
      } 
    }
  } return tampung
}
/*
huruf pada index ke [i] akan ditambah key lalu hasil tambah itu adalah hasilnya
*/
let key = 3000
let text = 'I LOVE YOU' //VJGTG KU C URA

// let key = 4
// let text = 'A CHEATER AMONG US' //E GLIEXIV EQSRK YW

let contoh = caesar_chiper(text, key); 
console.log(contoh);



console.log('\n');
console.log('========== Day of the Programmer ==========');
function dayOfProgrammer(year) {
  let tanggal = "";
  let jumlahHari = 0;

  // Cek apakah tahun adalah tahun kabisat
  if (year === 1918) {
    // Kasus khusus untuk tahun 1918 karena ada perubahan kalender
    jumlahHari = 230;
  } else if ((year <= 1917 && year % 4 === 0) || (year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0)) {
    jumlahHari = 244; // Jumlah hari pada tahun kabisat
  } else {
    jumlahHari = 243; // Jumlah hari pada tahun biasa
  }

  // Hitung tanggal dengan mengurangi jumlah hari
  let tanggalSisa = 256 - jumlahHari;
  tanggal = tanggalSisa + ".09." + year;

  // Handle tahun yang belum menggunakan kalender Gregorian
  if (year === 1918) {
    tanggal = (tanggalSisa + 13) + ".09." + year;
  }

  return tanggal;
}
console.log(dayOfProgrammer(2016));

// let ccc = 'aaa'
// let nnn = ccc.toUpperCase()
// console.log(nnn);



console.log('\n');
console.log('========== Time Conversion ========');
function timeConversion(s) {
  let jam = parseInt(s.substring(0, 2));
  let menit = s.substring(3, 5);
  let detik = s.substring(6, 8);
  let periode = s.substring(8, 10);
  let waktu24Jam = "";

  if (periode === "AM") {
    if (jam === 12) {
      jam = 0; 
    }
  } else {
    if (jam !== 12) {
      jam += 12; 
    }
  }

  jam = nol(jam);
  waktu24Jam = jam + ":" + menit + ":" + detik;

  return waktu24Jam;
}
// console.log(waktu24Jam)
function nol(angka) {
  if (angka < 10) {
    return "0" + angka;
  } else {
    return angka.toString();
  }
  // console.log(jam);
} console.log(timeConversion('07:05:45PM'));

/*
1. Fungsi `timeConversion` menerima parameter `waktu` yang berupa string dalam format "hh:mm:ssAM/PM".
2. Variabel `jam` diinisialisasi dengan konversi angka pada substring pertama (jam) dalam format waktu.
3. Variabel `menit` diinisialisasi dengan substring kedua (menit) dalam format waktu.
4. Variabel `detik` diinisialisasi dengan substring ketiga (detik) dalam format waktu.
5. Variabel `periode` diinisialisasi dengan substring keempat (AM/PM) dalam format waktu.
6. Variabel `waktu24Jam` digunakan untuk menyimpan hasil konversi waktu menjadi format 24 jam.
7. Jika periode adalah "AM" dan jam adalah 12, maka jam diubah menjadi 0.
8. Jika periode adalah "PM" dan jam bukan 12, maka jam ditambahkan dengan 12 untuk mendapatkan format 24 jam.
9. Fungsi `padZero` digunakan untuk menambahkan angka 0 pada angka satu digit.
10. Format jam, menit, dan detik digabungkan dalam format "hh:mm:ss" dan disimpan dalam variabel `waktu24Jam`.
11. Nilai `waktu24Jam` dikembalikan sebagai output.

*/



class Karyawan {
  constructor() {
    this.gajiPerJam = 0;
    this.jumlahJamKerja = 0;
  }

  tambahJamKerja(jam) {
    this.jumlahJamKerja += jam;
  }

  hitungTotalGaji() {
    return this.gajiPerJam * this.jumlahJamKerja;
  }
}

class KaryawanPenuhWaktu extends Karyawan {
  constructor() {
    super();
    this.gajiPerJam = 100000;
  }

  tambahJamKerja(jam) {
    if (jam > 6) {
      this.jumlahJamKerja += jam;
      this.gajiPerJam = 75000;
    } else {
      super.tambahJamKerja(jam);
    }
  }
}

class KaryawanParuhWaktu extends Karyawan {
  constructor() {
    super();
    this.gajiPerJam = 50000;
  }

  tambahJamKerja(jam) {
    if (jam > 6) {
      this.jumlahJamKerja += jam;
      this.gajiPerJam = 30000;
    } else {
      super.tambahJamKerja(jam);
    }
  }
}

// Contoh penggunaan
const karyawan1 = new KaryawanPenuhWaktu();
karyawan1.tambahJamKerja(8); // Tambahkan 8 jam kerja
console.log("Total gaji karyawan penuh waktu: Rp", karyawan1.hitungTotalGaji());

const karyawan2 = new KaryawanParuhWaktu();
karyawan2.tambahJamKerja(5); // Tambahkan 5 jam kerja
console.log("Total gaji karyawan paruh waktu: Rp", karyawan2.hitungTotalGaji());
