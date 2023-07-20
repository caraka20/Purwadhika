// function periksaDokter(jumlAntrian, callback) {
//     if (jumlAntrian > 20) {
//         callback(false)
//     } else if (jumlAntrian < 10) {
//         callback(true)
//     }
// }

// const jmlAntrian = 8
// periksaDokter(jmlAntrian, (sebentarLagi)=>{
//     if (sebentarLagi) {
//      console.log("saya akan menunggu");   
//     } else {
//         console.log("saya akan keluar dulu");
//     }
// })

/////////////////////////////////////////
// const notify = () => {
//     console.log("download complete");
// }
// const download = (url, callback) => {
//     console.log(`downloading from ${url}....`);
//     callback()
// }
// const url = 'example.com'
// download(url,notify)

////////////////////////////////////////// => callback hell
// const notif = () => {
//     console.log("permainan telah selesai");
// }

// const playGame = (name, callback) => {
//     console.log(`start game ${name} sekarang`);
//     callback()
// }
// const game1 = "solitare"
// const game2 = "zuma"
// const game3 = "genshin"

// playGame(game1, function (){
//     playGame(game2, function(){
//         playGame(game3, function () {
//             console.log("udahan main game nya");
//         })
//     })
// })

// => menghindari callback hell dengan promise.all()
const startPlayGame = (nama) => {
    return new Promise ((resolve, reject)=> {
        resolve(`start game ${nama} sekarang`);
    })
}

const game11 = "solitare1"
const game22 = "zuma2"
const game33 = "genshin3"

// Promise.all([startPlayGame(game11), startPlayGame(game22), startPlayGame(game33)])
// .then((res) => {
//     for (let game of res) {
//         console.log(game);
//     }
//     console.log("udahan main game nya 2");
// })
async function cobaAs() {
    try {
        const coba = await startPlayGame(game11)
        console.log(`ini asing await ${coba}`);
    } catch (err) {
        console.log(err);
    }
}
cobaAs()

//////////////////////////////////////////
let tabungan = 50
const belanja = new Promise ((resolve, reject) => {
    if (tabungan > 50) {
        resolve("bisa beli tamia")
    } else {
        reject("duid belum cukup")
    }
})

belanja.then((res)=> {
    console.log(res);
}).catch((err)=> {
    console.log(err);
})


////////////////////////////////////////// => promise yg dipanggil bersamaan
const firstProgres = new Promise ((resolve, reject) => {
    resolve("0%")
})
const secondProgres = new Promise ((resolve, reject) => {
    resolve("75%")
})
const lastProgres = new Promise ((resolve, reject) => {
    resolve("100%")
})
Promise.all([firstProgres,secondProgres,lastProgres]).then((res)=> {
    console.log(res);
})

// Promise chaining => bikin 1 promise dan resultnya itu bisa dipakai ber xx 
let nilai = 0 
const belajar = new Promise ((resolve,reject) => {
    nilai += 30
    resolve(nilai)
})
belajar.then((res)=> {
    console.log(`status sudah mencapai ${res} %`);
    return res += 30
}).then((res)=> {
    console.log(`status sudah mencapai ${res} %`);
    return res += 30
}).then((res)=> {
    if (res >= 100) {
        console.log(`belajar sudah selesai`);
    } else {
        console.log(`status sudah mencapai ${res} %`);
        return res += 30
    }
}).then((res)=> {
    if (res >= 100) {
        console.log(`belajar sudah selesai`);
    } else {
        console.log(`status sudah mencapai ${res} %`);
        return res += 30
    }
})


// async await, sesuatu yg kita buat secara async dirubah kembali menjadi synchronous
// pastikan asing await berdiri di atas promise