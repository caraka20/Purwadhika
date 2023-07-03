// 1. Tulis fungsi untuk mendapatkan nilai terendah, tertinggi, dan rata-rata dalam array (dengan dan tanpa fungsi sortir).
function cari(num) {

// nilai rendah
let nilaiRendah = num[0]
for (let i = 1; i <= num.length; i++) {
    if (nilaiRendah<num[i]) {
        nilaiRendah = nilaiRendah
    } else if (nilaiRendah>num[i]){
        nilaiRendah = num[i]
    }
} // return nilaiRendah

// nilai paling besar
let nilaiBesar = num[0] //50
  for (let i = 1; i < num.length; i++) {
    if (nilaiBesar  > num[i]){ //100 < 50
        nilaiBesar=nilaiBesar
    }else if (nilaiBesar < num[i]) { //100>50
      nilaiBesar = num[i] //50
    }
  } //return nilaiBesar

//rata - rata
let hasilTambah = 0
let rataRata = 0
for (let i = 0; i < num.length; i++) {
    hasilTambah += num[i]
} rataRata = hasilTambah/num.length

return console.log(
`nilai terendah = ${nilaiRendah}
nilai tertinggi = ${nilaiBesar}
nilai rata rata = ${rataRata}`);

}
let arr = [20, 30, 35, 90, 100, 10, 15, 22, 59, 205, 2]
cari(arr)


// 2. Write a function that takes an array of words and returns a string by concatenating the words in the array, separated by commas and - the last word - by an 'and'.
function arrayToString( arr ) { 
    // write code here 
    let result = ''
    let tammpungIndex1 = 0
    for (let i = 0; i < arr.length; i++) {
        tammpungIndex1 = i
        for (let j = 0; j <= arr[tammpungIndex1].length; j++) {
            if (j==arr[tammpungIndex1].length && tammpungIndex1 < arr.length-1) {
                result += ', '
            } else if (j < arr[tammpungIndex1].length) {
                result += arr[tammpungIndex1][j]
            } 
        }
        if (tammpungIndex1 == arr.length - 2) {
            result += 'and '
        }
    }
    return result // result is string 
   }
   
   console.log(arrayToString(["dimas","ady","franky","wijaya"])) // dimas, ady, and franky


/*
3. Write a function to split a string and convert it into an array of words
a. Example : “Hello World” → [“Hello”, “World”]
*/
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
  console.log(stringToArr(kata1));


/*
4. Write a function to calculate each element in the same position from two arrays of integer. Assume both arrays are of the same length.
a. Example : [1, 2, 3] + [3, 2, 1] → [4, 4, 4]
*/

function plusArr(param) {
    let result = []
    for (let i = 0; i < param.length; i++) {

       for (let j = 0; j < param[0].length; j++) {
        result.push(param[0][j] + param[1][j])
       }
       break
    }
    return result
}
let arr2 = [[1, 2, 3, 4], [3, 2, 1, 5]]
// console.log(plusArr(arr2));


/*
5. Write a function that adds an element to the end of an array. However, the element should only
be added if it is not already in the array.
*/
function addElement(params1, params2) {
    titipIndex = 0
    let isDouble = false
    // let tampungResult = params1[0]
    let result = params1
    for (let i = 0; i < params1.length; i++) {
        if (params1[i] == params2) {
            isDouble = true
        }
    }
    if (isDouble==false) {
        result.push(params2)
    }
    return result
}

console.log(addElement([1,2,3],4)) // [1,2,3,4]
console.log(addElement([1,2,3],3)) // [1,2,3] kenapa ? karena 3 sudah ada di array itu
console.log('\n');

/*
6. Write a function to remove all odd numbers in an array and return a new array that contains even numbers only
*/
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
  console.log(arrGenap(angkaRandom));



  /*
  7. Write a function to insert multiple given integer (not an array) to an array and have a maximum size input. The array can only have a maximum size from a given input. (if the maximum size of the given input is 5 than the array can only contain 5 elements).
a. Example: maxSize = 5, given integers is 5, 10, 24, 3, 6, 7, 8
i. The function will return [5, 10, 24, 3, 6]
  */




/*
8. Write a function that will combine 2 given array into one array
*/
function combineArr(param1,param2) {
    let result = []
    for (let i = 0; i < param1.length; i++) {
        result.push(param1[i])
    } for (let j = 0; j < param2.length; j++) {
        result.push(param2[j])
    }
    return result
}
let arr7 = [2,3,4,5,6]
let arr8 = [7,8,9,10]
// console.log(combineArr(arr7,arr8));


/*
9. Write a function to find duplicate values in an array
fungsi untuk menemukan duplikat pada arrai
*/
function cekDuplikat(params) {
    let result = []
    let tampungIndex = 0
    for (let i = 0; i < params.length; i++) {
        tampungIndex = i
        for(let j = (tampungIndex+1); j < params.length; j++){
            titipIndex2 = j
            if (params[j] == params[tampungIndex]) {
                result.push(params[tampungIndex])
            }
        }
    }

    return result
}
// console.log(cekDuplikat([2,7,2,3,4,5,6,7,7,8,2,7]));
// ini masih belum sempurna



/*
10. Write a function to find the difference in 2 given array
fungsi untuk menemukan perbedaan pada arrai
*/
function cekDifference(param11, param2) {
    let result = []
    let tampungIndex = 0
    for (let i = 0; i < param11.length; i++) {
        tampungIndex = i
        for(let j = (tampungIndex+1); j < param2.length; j++){
            // titipIndex2 = j
            if (param11[tampungIndex] != param2[j]) {
                result.push(param2[tampungIndex])
            }
        }
    }
    return result
}
let arr10 = [2,3,4,5,6]
let arr11 = [2,2,2,3]
// console.log(cekDifference(arr10, arr11));
// masih belum


/*
11. let arr = [1, 'string', null, false, undefined, 2, 'yes', undefined];
Based on the array above write a function that will return primitive data types only
tulis sebuah fungsi yang hanya akan mengembalikan tipe data primitif saja
*/


/*
12. Write a function from a given array of numbers and return the second smallest number
Tulis fungsi dari arr angka yang diberikan dan kembalikan angka terkecil kedua
*/
function kecil(num) {
    let kecil1 = num[0]
    let tampungNilai = []
    let result = 0
    for (let i = 1; i <= num.length; i++) {
        if (kecil1<num[i]) {
            kecil1 = kecil1
        } else if (kecil1>num[i]){
            kecil1 = num[i]
        }
        // kecil1 = num[i]
    }
    
    return kecil1
}
let arr12 = [12, 14, 57, 11, 78, 34, 10, 11, 23, 55]
console.log(kecil(arr12));