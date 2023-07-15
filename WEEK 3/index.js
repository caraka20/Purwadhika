let x = 20
let akar_kuadrat = Math.sqrt(x)
// console.log(akar_kuadrat)


function lilysHomework(arr) {
    const sortedArr = arr.slice().sort((a, b) => a - b);
    let count = 0;
    console.log(sortedArr);
    
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== sortedArr[i]) {
        count++;
      }
    }
    
    return count;
  }
  
  // Contoh penggunaan
  const arr = [3, 4, 2, 5, 1];
  const result = lilysHomework(arr);
  console.log(result);
  
  let a = [1,2,3,4]
  let b = [1,2,3,4]

  if (a==b) {
    console.log('oke');
  } else {
    console.log('hhh');
  }

console.log(a.findIndex(element => element === 2));