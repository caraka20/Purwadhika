/*
    ======================
    String to Multidimensi
    ======================

    [INSTRUKSI]
    diberikan sebuah string yang jumlah characternya bisa di akar pangkat
    (4, 9, 16, 25 , ... ) 
    ubahlah karakter - karakter itu menjadi array multidimensi
    dimana hasil akar pangkat jumlah karakternya menjadi row dan col

    [EXAMPLE]

    stringToMultidimensi("0120194124213712")
    jumlah char : 16 
    row dan col = akat 16 
    row dan col = 4
    output: 
    [
         1 2 3 4 
        [0,1,2,0], 1 
        [1,9,4,1], 2 
        [2,4,2,1], 3
        [3,7,1,2]  4
    ]

 */

function stringToMultidimensi(str) {
  // your code here
  let index1 = 0;//4
  let isAkarPangkat = false;
  let hasilAwal = [];
  let hasilAkhir = [];
  let titipIndex = 0; //4
  let titipIndex2 = 0; //4
  let titipIndex3 = 0; //4+4+4+4
  let titipIndex4 = 0; //0-str.length

  // return console.log(str);

  for (let i = 0; i < str.length; i++) {
    if (str.length / i == i) {
      (isAkarPangkat = true), (index1 = i);
      titipIndex2 = i;
    }
  }
  // isAkarPangkat = false
  // return console.log(isAkarPangkat);

  if (isAkarPangkat == true) {
    for (let j = 0; j < index1; j++) {
      for (let k = 0; k < titipIndex2; k++) {
        titipIndex = k,
        hasilAwal[k] = str[titipIndex4]
        titipIndex3 = titipIndex2;
        titipIndex4++
        // hasilAwal.push(str[k]),
      }
      titipIndex3+=titipIndex2
    //   return console.log(hasilAwal);
        hasilAkhir.push(hasilAwal)
        hasilAwal = []
        // hasilAkhir += "\n";
    }
  } else {
    return console.log("char count invalid");
  }
  return console.log(hasilAkhir);
}

stringToMultidimensi("0120194124213712");
/*
    [
        [0,1,2,0],
        [1,9,4,1],
        [2,4,2,1],
        [3,7,1,2]
    ]
 */

stringToMultidimensi("01201941242137127");
/*
    // char count invalid
 */

console.log("ok");
/*
Noted : cari variable.length, habis tu looping pakai variable i,looping sebanyak variable.length,
didalam lopingannya dikasih kondisi, kalau variable.length % i==i maka break dan bikkin var isAkarPangkat = true.
setelah itu kasih perkondisian, jika isAkarPangkat == true maka lakukan looping dmna kolom dan baris nya itu sebanyak i.
didalamnya ada 2 perulangan yg tiap pengulangannya menghasilkan var baru dengan kolom sebanyak i dan baris sebanyak i

*/
