console.log("===============latihan mulai=============");

// perkalian angka 1-10
let num = 9;
let result = 0;

for (let i = 1; i <= 10; i++) {
  result = num + " * " + i + " = " + num * i;
  console.log(result);
}

// soal : kata kalo dibalik menghasilkan kata ysng sama (palindrome)
/*
membuat 2 variable kata dan balik
melakukan perulangan menggunakan i sebanyak variable kata.length, perulangan terbalik dari besar ke kecil
melakukan perkondisian apabila variable kata == variable balik maka outputnya palindrome selain itu tidak palindrome (ketika melakukan pengkodisian haru diubah menjadi lowercase dulu agar sama)
*/

let kata = "Ama";
let balik = "";

for (i = kata.length - 1; i >= 0; i--) {
  balik += kata[i];
}

if (kata.toLocaleLowerCase() == balik.toLocaleLowerCase()) {
  console.log(`${kata} adalah kata palindrome`);
} else {
  console.log(`${kata} bukan kata palindrome`);
}

// Write a code to convert centimeter to kilometer.
// 1km = 100.000cm
let jarak = 200000;

let cmToKm = jarak / 100000;
console.log(`${jarak}cm adalah ${cmToKm}km`);

// Tulis kode untuk memformat angka sebagai mata uang (IDR)
// ○ Contoh : 1000 → “Rp. 1.000,00”
/*
buat variable nominal mata uang
variable rp = Rp. 
tambahkan variable yg isinya ,00 di akhir angka
bikin variable yg isinya nominal yg kebalik (agar mudah enak nya dibalik, karena nominal diberi titik 
dihitung 3 angka dari belakang)
buat perulangan yg jika setiap kelipatan 3 maka ditambah tanda .
kemudian balikan lagi nominal menjadi semula
*/
let nominal = "1000000";
let rp = "Rp. ";
let belakang = ",00";

// nominal kebalik
let kebalik = "";
for (let i = nominal.length - 1; i >= 0; i--) {
  kebalik += nominal[i];
}
// console.log(kebalik);

// memberikan tanda titik setelah kelipatan 3
let baru = "";
for (i = 0; i < kebalik.length; i++) {
  baru += kebalik[i];
  if ((i + 1) % 3 == 0) {
    baru += ".";
  }
}
console.log(baru);

// dibalik lagi menjadi semula
let hasil = "";
for (let i = baru.length - 1; i >= 0; i--) {
  hasil += baru[i];
}
console.log(rp + hasil + belakang);

// soal : Write a code to remove the first occurrence of a given “search string” from a string
// ○ Example : string = “Hello world”, search string = “ell” → “Ho world”
/*
perulangan j yg jika cariString[0] itu sama dengan test[i], kalo tidak sesuai maka terus lakukan perulangan i

pakai continue kemungkinan bisa
*/
let test = "hello World tell st cari dell";
let cariString = "ell";
let hasilCari = "";
let cek1 = "";
// let cek2 = ''
let testIndex = 0;
// console.log(test);
for (let i = 0; i < test.length; i++) {
  // hasilCari += test[i]
  if (
    test[i] == cariString[0] &&
    test[i + 1] == cariString[1] &&
    test[i + 2] == cariString[2]
  ) {
    for (let j = i; j < i + cariString.length; j++) {
      cek1 += test[j];
      testIndex = j;
    }

    i = testIndex;
  } else {
    hasilCari += test[i];
  }
}
console.log(cek1);
console.log(test);
console.log(hasilCari);
// console.log(cek1);
// console.log(cek2);
// console.log(testIndex);
// console.log(sama);

// soal : Write a code to capitalize the first letter of each word in a string
// ○ Example : “hello world” → “Hello World”
/*
langkah 1 : membuat variable hello yg isinya adalah kalimat yg ingin di test
langkah 2 : membuat variable indexx berisi 0 yg nantinya untuk meampung nilai pada index yg memiliki spasi + 1, karna setelah spasi pasti membuat kata baru jadi harus di + 1 untuk mengubah diawal kata menjadi kapital
langkah 3 : membuat variable hasilIni untuk menampung nilai hasil
langkah 4 : melakukan perulangan menggunakan i dan jika dalam perulangan itu ditemukan hello[i] == ' ', index yg memiliki nilai ' ' akan ditambah 1 indexnya dan dimasukan ke variable idendexx, kemudian melakukan perulangan lagi menggunakan j = i dan j <= i. karena ingin melakukan perulangan yg sama dengan perulangan i maka beri tanda <= i agar tidak melebihi i.
pada perulangan j, jika j == 0 maka helo[j] diubah menjadi capital kemudian indexx di reset menjadi 0 agar ketika melakukan perulangan berikutnya indexx tidak akan rancu dengan nilai index yg sudah di isi sebelumnya pada perulangan i. dan jika j == indexx maka nilai pada helo[j].toUpperCase akan ditambahkan ke hasilIni, jika kondisi j!=0 dan j!=indexx makan hasilIni += hel0 [i]
*/
let helo = "hello world haha hehehhe test lagi ok sudah alhamdulillah";
let indexx = 0;
let hasilIni = "";
let kecil1 = "abcdefghijklmnopqrstuvwxyz";
let capital = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
for (let i = 0; i <= helo.length - 1; i++) {
  if (helo[i] == " ") {
    indexx = i + 1;
  }
  for (let j = i; j <= i; j++) {
    if (j == 0) {
      for (let k = 0; k < kecil1.length; k++) {
        if (helo[0] == kecil1[k]) {
          hasilIni += capital[k];
        }
      }
      // indexx = 0;
    } else if (j == indexx) {
      for (let l = 0; l < kecil1.length; l++) {
        if (helo[i] == kecil1[l]) {
          hasilIni += capital[l];
        }
      }
      indexx = 0;
    } else {
      hasilIni += helo[i];
    }
  }
}
// console.log(indexx);
console.log(hasilIni);

let besar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let kecil = "abcdefghijklmnopqrstuvwxyz";

// soal : tulis kode untuk membalikan string
let name = "dimas";
let res = "";
for (let i = name.length - 1; i >= 0; i--) {
  res += name[i];
}
console.log(res);

/*
soal : Write a code to swap the case of each character from string ○ Example : ‘The QuiCk BrOwN Fox’ -> 
‘ tHE qUIcK bRoWn fOX’
langkah 1 : membuat variable yg isinya string The QuiCk BrOwN Fox
langkah 2 : membuat variable yg isinya sama dengan langkah 1 tetapi huruf diubah menjadi kecil semua menggunakan perulangan
lankah 3 : membuat variable untuk isi nya string kosong yg nantinya di isi dengan perulangan 
langkah 4 : melakukan perulangan apakah isi string pada variable 1 dan 2 sama
jika string sama makan string akan dimasukan ke variable ke 3 dan diubah menjadi huruf besar, dan jika string pd langkah 1 dan 2 berbeda maka string akan dimasukan ke string pd langkah 3  dan string langsung dimasukan.
 */

let str = "The QuiCk BrOwN Fox";
let res2 = "";
let besar2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let kecil2 = "abcdefghijklmnopqrstuvwxyz";

for (let i = 0; i < str.length; i++) {
  res2 += str[i].toLocaleLowerCase();
}
console.log(str);
// console.log(res2);

let hasilJadi = "";
for (let i = 0; i < res2.length; i++) {
  if (str[i] == res2[i]) {
    hasilJadi += res2[i].toUpperCase();
  } else {
    hasilJadi += res2[i];
  }
}
console.log(hasilJadi);

// soal : tulis kode untuk menemukan yang terbesar dari dua bilangan bulat yang diberikan
/**
langkah 1 : membuat 2 variable berisi number
langkah 2 : membuat kondisi apabila bilangan 1 lebih besar dari bil 2 maka print ${bil1} lebih besar dari ${bil2}
jika bil2 > bil1 maka print `${bil2} lebih besar dari ${bil1}` selain itu print `${bil2} sema besar dengan ${bil1}`
 */
let bil1 = 8;
let bil2 = 8;

if (bil1 > bil2) {
  console.log(`${bil1} lebih besar dari ${bil2}`);
} else if (bil1 < bil2) {
  console.log(`${bil2} lebih besar dari ${bil1}`);
} else {
  console.log(`${bil2} sema besar dengan ${bil1}`);
}

/*

*/

/*
soal : Write a code that shows 1 if the input is a string, 2 if the input is a number, and 3 for others data
type.
langkah 1 : membuat variable isi dengan tipe data bebas
langkah 2 : membuat perkondisiannya jika tipe data string maka outputnya 1, jika number output nya 2 dan selain itu outputnya 3
*/
let tipeData = true;
if (typeof tipeData == "string") {
  console.log("1 => tipe data string");
} else if (typeof tipeData == "number") {
  console.log("2 => tipe data number");
} else {
  console.log("3 => tipe data selain string atau number");
}
// console.log(typeof(tipeData));

function test1(num) {
  if (num === Number) {
    console.log(2);
  } else if (num === "string") {
    console.log(1);
  } else {
    console.log(3);
  }
}

console.log(test1(2));

/*
soal : Write a code to change every letter a into * from a string of input
○ Example : ‘An apple a day keeps the doctor away’ -> `*n *pple * d*y keeps the doctor *w*y`
langkah 1 : membuat 2 variabel awal dan hasil
langkah 2 : melakukan perulangan sebanyak variable awal.length, jika variable awal[i] sama dengan 'a' atau variable awal dengan index [i] sama dengan 'A' maka variable awal index ke [i] akan ditambah ke variable hasil sebagai '*', selain kondisi itu maka variable awal index ke [i] akan dimasukan ke variable hasil dengan nilai yg sama
*/

let test0 = "An apple a day keeps the doctor away";
let res0 = "";

for (let i = 0; i < test0.length; i++) {
  if (test0[i] == "a" || test0[i] == "A") {
    res0 += "*";
  } else {
    res0 += test0[i];
  }
}
console.log(res0);

console.log("===============latihan selesai=============");

console.log("=============== latihan function & arr =============");
const triangle = (n) => {
  let angka = 1;
  let hasil = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      if (angka < 10) {
        angka = "0" + angka;
      }
      hasil += angka + " ";
      angka++;
    }
    hasil += "\n";
  }
  return hasil;
};
// console.log(triangle(5));

// kelipatan 3 = fizz, kelipatan 5 = buzz, kelipatan 3&5 = fizzbuzz
const fizzBuzz = (n) => {
  let hasil = "";
  for (i = 1; i <= n; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      hasil = i + " = fizzbuzz";
    } else if (i % 3 == 0) {
      hasil = i + " = fizz";
    } else if (i % 5 == 0) {
      hasil = i + " = buzz";
    } else {
      hasil = i;
    }
    console.log(hasil);
    hasil = "\n";
  }
};
// fizzBuzz(30)

// hitung berat dan tinggi badan
const hitung = (berat, tinggi) => {
  let hasil = berat / (tinggi * tinggi);
  hasil = hasil.toFixed(1);
  // console.log(hasil);
  if (hasil < 18.5) {
    return hasil + " = less weight";
  } else if (hasil >= 18.5 && hasil <= 24.9) {
    return hasil + " = ideal";
  } else if (hasil >= 25.0 && hasil <= 29.9) {
    return hasil + " = over weight";
  } else if (hasil >= 30.0 && hasil <= 39.9) {
    return hasil + " = very overweight";
  } else {
    return hasil + " = obesity";
  }
};
// console.log(hitung(60,1.6));

// hapus isi arr yg ganjil dan mengembalikan arr baru yang berisi angka genap
const arrGenap = (n) => {
  let arrBaru = [];
  for (i = 0; i < n.length; i++) {
    if (n[i] % 2 == 0) {
      arrBaru.push(n[i]);
    }
  }
  // console.log(arrBaru);
  return arrBaru;
};
let angkaRandom = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 45, 67, 88, 32, 56,
  43, 21, 54, 634, 63,
];
// console.log(arrGenap(angkaRandom));

// memisahkan string dan mengubahnya menjadi array kata Contoh : “Halo Dunia” → [“Halo”, “Dunia”]
const stringToArr = (n) => {
  let hasil = [];
  let kata = "";
  for (let i = 0; i < n.length; i++) {
    kata += n[i];
    if (n[i] == " ") {
      hasil.push(kata);
      kata = "";
    } else if (i == n.length - 1) {
      hasil.push(kata);
    }
  }
  return hasil;
};
let kata1 = "hello world";
// console.log(stringToArr(kata1));


let arr = []
let arr1= [1,2,3]
let arr2= [3,2,1]
let nama = '1234567'
arr[0] = nama[0]
arr[1] = nama[2]
// arr.push(arr1)
// arr.push(arr2)
console.log(arr);

