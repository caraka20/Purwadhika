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

// 4. UNSHIFT => menambahkan element baru di awal arr
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
