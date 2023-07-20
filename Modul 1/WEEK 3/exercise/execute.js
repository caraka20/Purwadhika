const Queue = require('./queue');

const queue = new Queue.queue()
const coba = Queue.coba

queue.pesan("steak")
queue.pesan("nasi goreng")
queue.pesan("ayam bakar")
queue.pesan("gorengan")
queue.pesan("hainam")
queue.pesan("batagor")
queue.pesan("bakso")

// queue.antrian()

// queue.ambilPesanan()

queue.proses()

// coba()
// setInterval(() => {
//  console.log('ok');
// }, Math.ceil(Math.random()*10*1000));


