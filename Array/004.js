/* 
    ===================
    Two Array Operation
    ===================

    Buatlah sebuah Program yang dapat mengoperasikan bilangan - bilangan yang ada
    didalam 2 buah array sesuai dengan masing - masing indexnya.

    [INSTRUCTION]
    diberikan 2 buah array yang akan dioperasikan 
    - jika bilangan tersebut berada pada index yang genap, maka tambahkan (+)
    bilangan pada index array yang ke satu dengan index array yang ke dua 
    - jika bilangan tersebut berada pada index yang ganjil, maka kurangkan (-)
    bilangan pada index array yang ke satu dengan index array yang ke dua 
    - jika panjang ke dua array tidak sama , 
    maka masukkan saja bilangan - bilangan tersebut ke dalam hasilnya 

    [EXAMPLE]
    twoArrayOperation([1,2,3],[1,2,3])
    array1 : [1, 2, 3]
              +  -  +
    array2 : [1, 2, 3]
    result : [2, 0, 6]

    twoArrayOperation([12,34,11,23,12],[11,78,45,20,42])
    array1 : [12, 34, 11, 23, 12]
               +   -   +   -   +
    array2 : [11, 78, 45, 20, 34]
    result : [23,-44, 56, 3, 46]

    twoArrayOperation([-4, 5, 57, 33, -90, 0],[4, 2, 54, 24])
    array1 : [-4, 5, 57, 33, -90, 0]
              +   -   +   -    +
    array2 : [4,  2, 54, 24,  34]
    result : [0,  3, 111, 9, -56, 0]

*/

function twoArrayOperation(arr1, arr2) {
  // your code here
  let hasil = [];
  if (arr1.length == arr2.length) {
    for (let i = 0; i < arr1.length; i++) {
      if (i % 2 == 0) {
        hasil.push(arr1[i] + arr2[i]);
      } else {
        hasil.push(arr1[i] - arr2[i]);
      }
    }
  } else if (arr1.length > arr2.length) {
    let titipIndex = 0;
    for (let j = 0; j <= arr2.length; j++) {
      if (j == arr2.length) {
        for (let k = titipIndex + 1; k < arr1.length; k++) {
          hasil.push(arr1[k]);
        }
      } else if (j % 2 == 0) {
        hasil.push(arr1[j] + arr2[j]);
      } else if (j % 2 != 0) {
        hasil.push(arr1[j] - arr2[j]);
      }

      titipIndex = j;
    }
  } else if (arr1.length < arr2.length) {
    let titipIndex = 0;
    for (let j = 0; j <= arr1.length; j++) {
      if (j == arr1.length) {
        for (let k = titipIndex + 1; k < arr2.length; k++) {
          hasil.push(arr2[k]);
        }
      } else if (j % 2 == 0) {
        hasil.push(arr1[j] + arr2[j]);
      } else if (j % 2 != 0) {
        hasil.push(arr1[j] - arr2[j]);
      }

      titipIndex = j;
    }
  }

  return hasil;
}

console.log(twoArrayOperation([-4, 5, 57, 33, -90, 0], [4, 2, 54, 24, 34])); // [ 0, 3, 111, 9, -56, 0]
console.log(twoArrayOperation([12, 34, 11, 23, 12], [11, 78, 45, 20, 42])); // [ 23, -44, 56, 3, 54 ]
console.log(twoArrayOperation([1, 2, 3], [1, 2, 3])); // [ 2, 0, 6 ]

//test
let a = 0;
if (a % 2 == 0) {
  a = "oke";
}
// console.log(a);
