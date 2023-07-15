// console.log('test');

function tambah(a, b) {
    return a + b
}
function kurang(a, b) {
    return a - b
}
function hitung(a, b, c) {
   return c(a,b)
}

setTimeout(()=>{
    console.log(hitung(5,3,kurang));
},3000)
// console.log('kedua');


