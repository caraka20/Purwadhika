function soal1(param)
{
    // your code here 
    let hasil = []
    let tampungGenap = param/2
    let tampungGanjil = (param+1)/2
    
    if (param == 0){
        hasil='invalid input '
    }    
    else if (param%2==0) {
            for (let i = 1; i <= param; i++) {
                if (i==tampungGenap || i == tampungGenap + 1) {
                    hasil.push('*')
                } else {
                    hasil.push('')
                }
        }
    } else if (param%2!=0){
        for (let i = 1; i <= param; i++) {
            if (i==tampungGanjil) {
                hasil.push('*')
            } else {
                hasil.push('')
            }
        }
    }
        return hasil
}

// test case
console.log( soal1(5) ) 
/*
    output : 
    ['','','*','','']
*/

console.log( soal1(4)) // ['','*','*','']

console.log( soal1(7)) // ['','','','*','','','']

console.log( soal1(10)) // ['','','','','*','*','','','','']

console.log( soal1(0)) // invalid input 

console.log( soal1(1)) // ['*']
