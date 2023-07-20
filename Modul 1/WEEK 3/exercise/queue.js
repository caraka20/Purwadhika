// console.log("EXERCISE PROMISE");
/*
● Create a class to handle queuing process in a file.
1. ada orderan masuk (enqueue) di push ke arrai
2. proses orderan diambil dari index 0 (dequeue)
3. jika queue.length == 0 makan torderan selesai dong
4. kalo koki nya pingin lihar daftar antrian maka bikin method yg menampilkan semua isi didalam arrai queue
5. kalo koki nya udh selesai masak, maka kokinya pakai method yg buat queue.shift() untuk hapus arrai[0]
6. ● Each queue process takes a random interval from 1-10 seconds.
=> dimana proses dequeue akan dilaksanakan menggunakan setelah waktu random, tapi untuk waktunya itu random dari 1-10 second.
kita harus await waktu random dulu setelah itu baru laksanakan method deque lagi
*/

class Queue {
    constructor(){
        this.queue = []
    }

    pesan(order){
        this.queue.push(order)
        // console.log(`mau order ${order}`);
    }

    ambilPesanan(waktuRandom){
        // if(this.queue.length == 0) {
        //     console.log(`tidak ada pesanan karena ${this.queue} pesanan tidak ada`);
        // } else {
            let makanan = this.queue.shift()
            console.log(`pesanan ${makanan} telah selesai dibuat selama ${waktuRandom} second`);
    //     }
    }

    antrian(){
        this.queue.map((res, key) => {
            console.log(`pesan antrian ${key+1} adalah ${res}`);
        })
    }

    waktuTunggu(waktu) {
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve();
          }, waktu * 1000);
        })
      }
    
      async proses() {
        while (this.queue.length > 0) {
            const waktuRandom = Math.ceil(Math.random() * 10);
           await this.waktuTunggu(waktuRandom);
            this.ambilPesanan(waktuRandom);
        }
        console.log('pesanan sudah selesai semua, selamat menikmati hidangan');
      }
}

function coba() {
 console.log('coba 2 object');   
}

module.exports.queue = Queue;
module.exports.coba = coba