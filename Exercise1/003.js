function soal3(param)
{
    // your code here 
let pangkat2 = param * param
let titipIndex = 0
let titipResult = []
let result = []
let nilai = 1

for (let i = 0; i < param; i++) {
    for (let j = 0; j < param; j++) {
        titipResult.push(nilai)
        // titipIndex = nilai
        nilai++
    }
    result.push(titipResult)
    titipResult =[]
}
return result
}

console.log(soal3(5)) 
/*
    output: 
    [
        [1,2,3,4,5],
        [6,7,8,9,10],
        [11,12,13,14,15],
        [16,17,18,19,20],
        [21,22,23,24,25]
    ]
*/

console.log(soal3(4))

/*
    output: 
    [
        [1,2,3,4],
        [5,6,7,8],
        [9,10,11,12],
        [13,14,15,16],
    ]
*/
/*
note : 
let pangkat2 = param * param
let titipIndex = 0
let titipResult = []
let result = []
let nilai = 1
lakukan looping i sebanyak param
loping j menghasilkan sebanyak param
titipIndex.push(nilai)
nilai++
*/