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
