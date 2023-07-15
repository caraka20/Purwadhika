// console.log('test');
// asynchronus
// function tambah (param1, param2) {
//     return param1 + param2
// }

// function kurang(param1, param2) {
//     return param1 - param2
// }

// function hitung(param1, param2, aksi) {
//     let hasil = 0
//     hasil = aksi(param1, param2)
//     return hasil
// }
// setTimeout(() => {
//     console.log('hasil kurang : ' + hitung(10,5,kurang));
// },1000)
// console.log('satu');
// console.log('tiga');

// let janjiku = new Promise ((resolve, reject) => {
//     console.log('jalan sebelum');
//     setTimeout(() => {
//         let hasil = hitung(15,10,tambah)
//         resolve(hasil)
//     }, 3000);
// })

// janjiku.then((res)=>{
//     console.log('hasil tambah : ' + res);
//     return res
// }) .then((res)=>{ // ini namanya chaining
//     hasil = tambah(res, 5)
//     console.log(`ini adalah then kedua : ${hasil}`);
// })
// .catch((err)=>{console.log(`hasil error : ${err}`);})


// async await, untung menggantika fungsi await yg dibuat sebelumnya
console.log('\n');
console.log('====== BARU ======');
const token = Math.ceil(Math.random()*12345678)
const pict = ['1.jpg', '2.jpg', '3.jpg']

function login(username) {
    setTimeout(() => {
        return {token : token, username : username}
    }, 500);
}

function getUser(token) {
   if (token) {
    return {apiKey : 'dapat apiKey'}
   } else {
    return 'tidak dapat token'
   }
}

function getPicture (apiKey) {
    if (apiKey) {
        return pict
    }
}

const user = login('caraka')
console.log(user);

const apiKey = getUser(user.token)
console.log(apiKey.apiKey);

const getPict = getPicture(apiKey.apiKey)
console.log(getPict);