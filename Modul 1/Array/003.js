/*
    ========================
    Multidimensi into String
    ========================

    [INSTRUKSI]
    diberikan sebuah array multidimensi, tugas kalian adalah mengconvert
    dari array multidimensi menjadi string 

    [RULE]
    - array harus multidimensi , bila tidak multidimensi output : "input is invalid"

    [EXAMPLE]
    multidimensiIntoString([
        [4,3,2,1,5],
        [4,2,7,9,3],
        [7,4,3,7,3],
        [4,6,3,6,8],
        [3,2,5,6,4]
    ])  
    output: 4321542793743734636832564

    multidimensiIntoString([1,2,3,4])
    output: input is invalid

*/

function multidimensiIntoString(arr) {
  // your code here
  let isMultidimensiIntoString = false;
  let hasil = ''
  let titipIndex = 0
  
  for (let i = 0; i < arr.length; i++) {
      if(arr[i].length == arr.length){
          isMultidimensiIntoString=true
      } else {
          isMultidimensiIntoString = false
          break
      }
  }
  if (isMultidimensiIntoString == true) {
    for (let j = 0; j < arr.length; j++) {
        titipIndex = j
        for (let k = 0; k < arr.length; k++) {
            hasil += arr[titipIndex][k]
        }
        
    }
  } else {
    hasil = 'input is invalid'
  }
  
//   return console.log(isMultidimensiIntoString);
  return console.log(hasil);
//   console.log(arr.length);
}

multidimensiIntoString([
  [4, 3, 2, 1, 5],
  [4, 2, 7, 9, 3],
  [7, 4, 3, 7, 3],
  [4, 6, 3, 6, 8],
  [3, 2, 5, 6, 4],
]);
// 4321542793743734636832564

multidimensiIntoString([1, 2, 3, 4]);
// input is invalid



// test
let isMultidimensiIntoString = false;
let coba = [
  [1, 2, 3],
  [1, 2, 3,5],
  [1, 2, 3],
];
// console.log(coba[0][0]);

for (let i = 0; i < coba.length; i++) {
    if(coba[i].length == coba.length){
        isMultidimensiIntoString=true
    } else {
        isMultidimensiIntoString = false
        break
    }
    
}

// console.log(isMultidimensiIntoString);
// console.log(coba.length);