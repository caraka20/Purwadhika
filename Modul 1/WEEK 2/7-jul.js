
// untuk mengetahui adakah nilai tertentu yang ada didalam array
let menu = ['tahu', 'tempe', 'kacang']
let aa = ['tahu','tempe']
let data = menu.indexOf('tempe') //maka akan menampilkan data yg sama tapi dalam bentuk index, kalo ga ada maka outputnya -1
let includ = menu.includes('tempeq') // maka akan mengembalikan nilai booleean true or false
console.log(data); 


// spread operator
let name = ['caraka', 'haekal']
let name2 = ['aries', 'andreas']
let namas = ['raf', 'haekal',...name, 'bayu', 'kebon',...name2] //untuk menggabungkan 2 array menjadi 1
console.log(namas);