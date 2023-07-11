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
looping semua cek ada apa egk
*/

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
let maxSize = []
function array70(maxSize, ...theArgs) {
  for (let i = 0; i <= theArgs.length - 1; i++) {
    if (theArgs[i] <= theArgs[4]) {
      maxSize.push(theArgs[i]);
    }
  }
  return maxSize;
}

console.log(array70(maxSize, 10, 20, 30, 40, 50, 60, 70, 80));




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
    let isSama = true
    for (let i = 0; i < params.length; i++) {
        for(let j = (i+1); j < params.length; j++){
            if (params[j] == params[i]) {
                for (let k = 0; k <= result.length; k++) {
                    
                    if (result[k] != params[i]) {
                        isSama = false
                    } 
                }
                if (isSama == false) {
                    result.push(params[i])
                }
                isSama = true
                // result.push(params[i])
            }
        }
    }

    return result
}
console.log(cekDuplikat([2,3,4,5,3,6,7,8,2]));
// ini masih belum sempurna


/*
10. Write a function to find the difference in 2 given array
fungsi untuk menemukan perbedaan pada arrai
*/
function cekDifference(param11, param2) {
    let result = []
    let isDif = true
    for (let i = 0; i < param11.length; i++) {
        for(let j = 0; j < param2.length; j++){
            if (param11[i] == param2[j]) {
                isDif = false
                break
            }
        }
        if (isDif === true) {
            result.push(param11[i])
        }
        isDif = true
    }
    return result
}
let arr10 = [1,2,3,4]
let arr11 = [1,4,2]
// output = 456
// console.log(cekDifference(arr10, arr11));
// done


/*
11. let arr = [1, 'string', null, false, undefined, 2, 'yes', undefined];
Based on the array above write a function that will return primitive data types only
tulis sebuah fungsi yang hanya akan mengembalikan tipe data primitif saja
*/
let arr5 = [1, 'string', null, false, undefined, 2, 'yes', undefined, ['arrai'], {nama:'caraka'}];
function cariPrimitip(param) {
    let hasil = []
    for (let i = 0; i < param.length; i++) {
        if (typeof param[i]!== 'object' || param[i]== null) {
            hasil.push(param[i])
        } else {
            continue
        }
        
    }
// return typeof param !== Object && typeof param !== undefined
        return hasil
    }
console.log(cariPrimitip(arr5));



/*
12. Write a function from a given array of numbers and return the second smallest number
Tulis fungsi dari arr angka yang diberikan dan kembalikan angka terkecil kedua
*/
function kecil(num) {
    let kecil1 = num[0]
    let tampungNilai = 0
    let result = 0
    for (let i = 1; i <= num.length; i++) {
        if (kecil1<num[i]) {
            kecil1 = kecil1
        } else if (kecil1>num[i]){
            kecil1 = num[i]
        }
        // kecil1 = num[i]
    }
    tampungNilai = kecil1
    result = kecil1
    kecil1 = num[0]
    for (let i = 1; i <= num.length; i++) {
        if (result<num[i] && num[i] != tampungNilai) {
            result = result
        } else if (result>num[i] && num[i] != tampungNilai){
            result = num[i]
        } 
        // kecil1 = num[i]
        console.log(result);
    }
    
    return result
}
let arr12 = [15, 12, 14, 57, 11, 78, 34, 10, 11, 23, 55]
// console.log(kecil(arr12));

// coba
function urutkanAngka(arr) {
    // let hasil = []
    for (let i = 0; i < arr.length - 1; i++) {//2
      for (let j = i + 1; j < arr.length; j++) {//3
        // let temp = 3,
        // i=0-->33812
        // i=1--->33812
        // i=2--->
        if (arr[j] < arr[i]) {//3<5--|8<3|--1<8
          let temp = arr[j];//3--||--1
          arr[j] = arr[i];//[1]=[0]--->3,3,8,1,2--||--[1]=[2]-->3,1,8,1,2
          arr[i] = temp;//
        }
      }
    }
    return arr[1];
  }
  
  let angka = [11,21,45,67,88,66,12];
  let hasilUrutan = urutkanAngka(angka);
  
  console.log(hasilUrutan);
  

/*
13. Write a function from a given array of mixed data types and return the sum of all the number
let arr = [10, 20, 40, 10, 50, 30, 10, 60, 10];
Tulis fungsi dari larik tipe data campuran yang diberikan dan kembalikan jumlah semua angka
*/
let apaAja= ['caraka', 2, 4, 8, null, ['aku'], {nama: 'caraka'}, undefined, 9, true]
function sumInt(nilai) {
    let hasil = 0
    for (let i = 0; i < nilai.length; i++) {
        if(typeof nilai[i] == 'number') {
            hasil += nilai[i]
        } else {
            continue
        }
        
    }
    return hasil
}
// console.log(sumInt(apaAja));



/*
14. Write a function from the above array of number that will return sum of duplicate values
let arr = [10, 20, 40, 10, 50, 30, 10, 60, 10];
Tulis fungsi dari larik angka di atas yang akan mengembalikan jumlah nilai duplikat

*/
function jmlDuplikat(nilai) {
    let hasil = []
    let tampungIndex = 0
    for (let i = 0; i < nilai.length; i++) {
        tampungIndex = i
        for (let j = (tampungIndex+1); j < nilai.length; j++) {
            if (nilai[tampungIndex] == nilai[j]) {
                hasil.push(nilai[tampungIndex])
            }

            
        }
        
    }
    return hasil
}
let zzz = [10, 20, 40, 10, 50, 30, 10, 60, 10, 10];
console.log(jmlDuplikat(zzz));
/*
10,20,40,10,50,30
20,40,10,50,30
masih belom selesai
*/



/*
15. Tulis permainan batu, kertas, fungsi gunting yang akan mengembalikan 'Menang' atau 'Kalah'. Fungsi akan
pilih secara acak antara batu, kertas, atau gunting.
A. Contoh: jika Anda melempar batu sebagai argumen dan fungsi mengambil gunting maka akan mengembalikan 'Menang'
*/
// program to get a random item from an array

function getRandomItem(arr) {

    // angka random sebanyak 1-arr.length
    const randomIndex = Math.floor(Math.random() * arr.length);

    // untuk item random
    const item = arr[randomIndex]; //

    return item;
}
let result = getRandomItem(['batu', 'kertas', 'gunting']);
// let array = ['batu', 'kertas', 'gunting'];

console.log(result);
function mainan(kita, random) {
    let result = ''
    if (kita == 'batu') {
        if (random == 'batu') {
            result = 'seri'
        } else if (random == 'gunting') {
            result = 'menang'
        } else if (random == 'kertas') {
            result = 'kalah'
        }
    } else if (kita == 'gunting') {
        if (random == 'batu') {
            result = 'kalah'
        } else if (random == 'gunting') {
            result = 'seri'
        } else if (random == 'kertas') {
            result = 'menang'
        }
    } else if (kita == 'kertas') {
        if (random == 'batu') {
            result = 'menang'
        } else if (random == 'gunting') {
            result = 'kalah'
        } else if (random == 'kertas') {
            result = 'seri'
        }
    }
    return console.log(`
    kamu = ${kita} dan comp = ${random} ---> kamu ${result}
`);
}
mainan('kertas', result)

/*
random == kita => seri
batu >< gunting = batu
gunting >< kertas = gunting
kertas >< batu = kertas

*/

// let arrrr = undefined
// console.log(typeof arrrr);
// if (typeof arrrr == "") {
//     console.log('oghe');
// }




// coba
function countDuplicateValues(arr) {
    var count = {};
    var duplicateCount = 0;
  
    // Menghitung jumlah setiap nilai dalam objek count
    arr.forEach(function (value) {
      if (count[value]) {
        count[value]++;
      } else {
        count[value] = 1;
      }
    });
  
    // Menghitung jumlah nilai duplikat
    for (var key in count) {
      if (count[key] > 1) {
        duplicateCount += count[key] - 1;
      }
    }
  
    return duplicateCount;
  }
  
  var arr99 = [10, 20, 40, 10, 50, 30, 10, 60, 10];
  var duplicateCount = countDuplicateValues(arr99);
  
//   console.log(duplicateCount); // Output: 4

//   const randomIndex = Math.floor(Math.random() * 3);
//   console.log(randomIndex);
  
// let aaa = [1,2,3]
// let bbb = [4,5,6]
// let hasil = []
// hasil = aaa.concat(bbb)
// console.log(hasil);

// quiz 2
let coba = '__o__xx__oo__xxx_x__o_ooo__'
console.log(coba[0]);
function jump_on_x(road) {
    // Write your code here
    let result = 0
    let tampung = ''
    for (let i = 0; i < road.length; i++) {
        if (road[i] == 'x') {
            tampung += road[i]
            if (tampung == 'xxxx') {
                break
            } else if (road[i+1] !== 'x') {
                result ++
                tampung = ''
            }
        }
    }
return result
}
console.log(jump_on_x(coba));


// quiz 3
let cobaa = [10, 20, 30, 40]
function calculateNetWorth(reportList) {
    // Write your code here
    let result = 0
    for (let i = 0; i < reportList.length; i++) {
        if (i % 2 == 0) {
            result += reportList[i]
        } else {
            result -= reportList[i]
        }
    }
return result
}
// console.log(calculateNetWorth(cobaa));//-20


//quiz 4
// jdi output [0] = input [2]
// output [1]= input[1]+input[3] -----> dalam artian ganjil
// output[2] = input[2] + input[4] ----> dalam artian genap
//let ganjil = [123]
//let genap = [246]
//

function processData(input) {
    //Enter your code here
    let output = []
    let ganjil = []
    let genap = []


//ini untuk ngisi output index 1
    for (let i = 0; i < input.length; i++) {
        if (i == 1) {
            output.push(parseInt(input[i]))
        }
    }


//ini abaikan saja
    for (let k = 0; k < input.length; k++) {
            if (k%2==0) {
                genap.push(k)
            } else {
                ganjil.push(k)
            }
    }


//ini logic contoh 1 & 2
    for (let j = 1; j < input.length; j++) {
        //kalo j == ganjil maka output.push()
        if (j==1) {
            output.push(parseInt(input[0])+parseInt(input[2]))
        } else if (j==2) {
            output.push(parseInt(input[1])+parseInt(input[3]))
        } else if (j==3) {
            output.push(parseInt(input[2])+parseInt(input[4]))
        } else if (j==4) {
            output.push(parseInt(input[3])+0)
        }
        
    }


// ini kalo ada NaN maka output []
    for (let m = 0; m < output.length; m++) {
       if ( isNaN(output[m]) ) {
         return output = []
         break;
       }
    }


// ini kalo yg di input pada index ke[i] bukan string, misal ada arrai atau object atau boolean
    for (let n = 0; n < input.length; n++) {
        if (typeof input[n] != 'string') {
            output = []
            break
        } 
    }


// ini kalo inputnya cuman 1
    if (input.length == 1) {
        output = [0]
    }


// kalo ini misal di dalam input an nya ada '1b2'
    for (let o = 0; o < input.length; o++) {
        if (parseInt(input[o]) == 1) {
            output = []
            break;
        }
    }

    return output
} 
// let raka = ["11", "20", "33", "0", "55"] //20, 44, 20, 88, 0]
// let raka = ["100", "5", "71", "hello", "1"] //[]
// let raka = ["", " ", "", " ", ""] // []
// let raka = [10] //[0]
// let raka = [10,'15',[2]] //[]
let raka = ["90", "80", "1b2", "17", "25"]//[]
// console.log(parseInt(raka[1]));
// console.log(processData(raka)); //

let k = ['11']
let ll = 10
let l = parseInt(k)
// console.log(l)


let aaa = [1,2,3]
let bbb = [4,5,6]
let hasil = []
hasil = aaa.concat(bbb)
// console.log(hasil);


let cobaaa = [2,NaN]
if (typeof cobaaa[1] == NaN) {
    // console.log('oke');
}
// console.log('hehe');
// console.log(isNaN(cobaaa[0]));
isNaN(cobaaa[1])

let hhhh = ["100", "5", "21", "1", "33",2,[2]]
// console.log(typeof hhhh[6]);


let rakaa = ["90", "80", "1b2", "17", "25"]//[]
console.log(parseInt(rakaa[2]));

let oo = '0.500000'
// console.log(parseInt(oo));

/*
1. output[0]=input[1]
2. output[1]=input
*/
let rakaaa = ["", " ", "", " ", ""]
console.log(isNaN(rakaa));