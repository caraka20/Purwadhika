// 1. ● Write a code to check whether the date is a weekend.
function wekend(param) {
   const waktu = new Date(param)
    const hari = waktu.getDay()
    if (hari == 0 || hari == 6) {
        return "wekend"
    } else {
        return "bukan weekend"
    }
}
console.log(wekend("2023-05-18"));

// 2. ● Write a code to find GCD of two numbers → use while.
function fpb(nilai1, nilai2) {
    let tampung = [] 
    var i = 1
    while(i <= Math.max(nilai1,nilai2)) {
        if (nilai1 % i == 0 && nilai2 % i == 0) {
            tampung.push(i)
        }
        i++
    } 
return Math.max(...tampung)
}
console.log(fpb(6, 12));


// 3. ● Write a code to find LCM of two numbers → use do ... while.
function kpk(nilai1, nilai2) {
    let nilai = nilai1 * nilai2
    // return nilai
    let tampung = []
    do {
        if (nilai % nilai1 == 0 && nilai % nilai2 == 0) {
            tampung.push(nilai)
        }
        nilai--
    } while (nilai >= Math.min(nilai1,nilai2));
    return Math.min(...tampung)
}
console.log(kpk(4,6))


// 4. ● Write a code to find most common character from a string
function dominanChar(str) {
    let temp = 0;
    let result = "";
    for (let i = 1; i < str.length; i++) {
      for (let j = i + 1; j < str.length++; j++) {
        if (str[i].charCodeAt() === str[j].charCodeAt()) {
          result = str[i]
        }
      }
    }
    return result;
  }
  console.log(dominanChar("rafansa"));


// 5. ● Write a code to sort a string alphabetically (with and without sort function)
function sortStr(str) {
    let result = "";
    let test = str.split("");
  
    for (let i = 1; i < test.length; i++) {
      let numberToInsert = test[i];
      let j = i - 1;
      while (j >= 0 && test[j] > numberToInsert) {
          test[j + 1] = test[j];
        j = j - 1;
      }
      test[j + 1] = numberToInsert;
    }
     result = test.join("")
    return result
  }
  console.log(sortStr("rafansa"));


// 6. ● Write a code to get minimum date from array of dates.
let  dates = ["2023-07-15", "2023-06-18", "2023-07-12", "2023-07-20"]

function minDates(dates) {
    let min = dates[0]
    
    for(let i = 0; i < dates.length; i++) {
        if (dates[i] < min) {
            min = dates[i];
          }
    }

    return min
}
console.log(minDates(dates));

// 7. ● Write a code that calculates the sum of all elements of a two-dimensional array
function nama(param) {
    let hasil = 0
    for (let i = 0; i < param.length; i++) {
        for (let j = 0; j < param[i].length; j++) {
            hasil += param[i][j]
        }
    }
    return hasil
}
console.log(nama([[1,2,3],[4,5,6],[7,8,9]]));


// 8. ● Write a code to find the longest common prefix string amongst an array of strings.




// 9. Write a code that copies the first half of an array. With an odd number of array elements, the
//middle element should belong to the first half
function half(arr) {
  let mid = arr.length / 2;
  let mid2 = [arr[mid]];
  let left = [];
  let right = [];

  for (let i = 0; i < arr.length; i++) {
    if (i < mid) {
      left.push(arr[i]);
    } else if (i > mid) {
      right.push(arr[i]);
    }
  }
  return mid2.concat(left, right);
}

console.log(
  half([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20])
);



// 10. Write a code to get the number of days in a month
//○ Example : month = 1, year = 2022 → 31



// 11. ● Write a code to count the number of days passed since beginning of the year





// 12. Write a code to calculate age
function umur(param) {
    let usia = new Date(param)
    let saatIni = new Date()
    hasil = saatIni.getFullYear() - usia.getFullYear()
    return hasil
}
console.log(umur("2001-07-20"));
