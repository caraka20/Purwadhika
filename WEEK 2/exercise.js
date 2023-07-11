console.log('======== EXERCISE 1 ========');

function hitungDataSiswa(siswa) {
    let scores = siswa.map((siswa) => siswa.Score);
    let umur = siswa.map((siswa) => siswa.Umur);
//   console.log(scores);
//   console.log(ages);
    let dataScore = {
      Highest: Math.max(...scores),
      Lowest: Math.min(...scores),
      scores: scores.reduce((a, b)=>a+b)/scores.length};
  
    let dataUmur = {
      Highest: Math.max(...umur),
      Lowest: Math.min(...umur),
      Average: umur.reduce((acc, age) => acc + age, 0) / siswa.length
    };
  
    return {
      Score: dataScore,
      Umur: dataUmur,
    };
  }
  const siswa = [
    {
      Nama: "caraka",
      Email: "caraka@gmail.com",
      Umur: 20,
      Score: 85,
    },
    {
      Nama: "raf",
      Email: "raf@gmail.com",
      Umur: 21,
      Score: 90,
    },
    {
      Nama: "haekal",
      Email: "haekal@gmail.com",
      Umur: 25,
      Score: 80,
    },
    {
        Nama: "wijaya",
        Email: "wijaya@gmail.com",
        Umur: 19,
        Score: 99,
    }
  ];
  
  const dataSiswa = hitungDataSiswa(siswa);
  console.log(dataSiswa);
  

  //● Product Class
  class Product {
    constructor(name, harga) {
      this.name = name; 
      this.harga = harga;
    }
  }
  
  //● Transaction Class
  class Transaction {
    constructor() {
      this.total = 0;
      this.produk = [];
    }
  
    //○ Add to cart method → Add product to transaction
    setAddToCart(produk, jml) {
      this.produk.push({ produk, jml });
      this.total += produk.harga * jml;
    }
  
    //○ Show total method → Show total current transaction
    setShowTotal() {
      console.log("Total transaksi saat ini:", this.total);
    }
  
    //○ Checkout method → Finalize transaction, return transaction data
    setCheckout() {
      console.log("Transaksi berhasil");
      console.log("Data transaksi:");
      console.log("Total:", this.total);
      console.log("Data produk:");
      this.produk.forEach(({ produk, jml }) => {
        console.log(`${produk.name} sebanyak ${jml} pcs dengan harga Rp.${produk.harga} per pcs`);
      });
    }
  }
  
  // Create product
  const produk1 = new Product("buku", 2500);
  const produk2 = new Product("pensil", 2000);
  const produk3 = new Product("rautan", 1000);
  console.log(produk1);
  console.log(produk2);
  console.log(produk3);
  
 
  // //○ Add to cart method → Add product to transaction
  const transaksi = new Transaction();
  transaksi.setAddToCart(produk1, 10);
  transaksi.setAddToCart(produk2, 15);
  transaksi.setAddToCart(produk3, 30);
  
  // ○ Show total method → Show total current transaction
  transaksi.setShowTotal();
  
  // ○ Checkout method → Finalize transaction, return transaction data
  transaksi.setCheckout();
  

console.log('\n');
  console.log('======== EXERCISE 2 ========');

//● Create a function to check if two objects are equal
console.log('1. Create a function to check if two objects are equal');

function cekEqual(objek1, objek2) {
    // mengambil keys pada object dan isinya adalah array
    let keys1 = Object.keys(objek1);
    let keys2 = Object.keys(objek2);
    // console.log(keys1);
    // console.log(objek1);
    let isEqual = true
  
    // cek apakah panjang keys nya sama atau tidak
    if (keys1.length !== keys2.length) {
      isEqual = false;
    }
  
    // cek value nya pakai for of
    for (let key of keys2) {
      if (objek1[key] !== objek2[key]) {
        isEqual = false;
        break
      }
    }
  
    return isEqual;
  }
  const obj1 = { name: "wijaya", age: 30 };
  const obj2 = { name: "wijaya", age: 30 };
  const obj3 = { name: "caraka", age: 22 };
  
  console.log(cekEqual(obj1, obj2)); // true
  console.log(cekEqual(obj1, obj3)); // false
    
  const aaa = {name: "raka", age: 22}
  let tampung = Object.keys(aaa)
//   console.log(tampung);
console.log('\n');


/*
● Create a function to get the intersection of two objects ● Example
○ Input : { a: 1, b: 2 } & { a: 1, c: 3 }
○ Output:{ a: 1 }
*/
console.log(`2. ● Create a function to get the intersection of two objects ● Example`);

function getIntersection(angka1,angka2) {
let properti = Object.keys(angka1)
let result = {}

    for (let i of properti) {
        if (angka1[i] === angka2[i]) {
          this.result = 'angka1[i]'
          break
        }
      }
      return result
}
const angka1 = { a: 1, b: 2 }
const angka2 = { a: 1, c: 3 }
console.log(getIntersection(angka1,angka2)); //{a : 1}


console.log('\n');
console.log(`3. ● Create a function to merge two array of student data and remove duplicate data`);



console.log('========== EXERCISE 8 ========');

/*
● Spesifikasi :
○ Buat program untuk menghitung total gaji berdasarkan jenis karyawan
○ Ada dua jenis karyawan : penuh waktu & paruh waktu
○ Gaji untuk karyawan penuh waktu :
■ Rp 100.000 / jam
■ Rp 75.000/jam, jika jumlah jam kerja per hari lebih dari 6 jam
○ Gaji untuk pekerja paruh waktu :
■ Rp 50.000 / jam
■ Rp 30.000/jam, jika jumlah jam kerja per hari lebih dari 6 jam
● Persyaratan :
○ Buat Karyawan sebagai kelas induk 1.
○ Buat Karyawan Penuh Waktu dan Karyawan Paruh Waktu sebagai turunan dari kelas Karyawan
■ Buat metode di kelas tersebut untuk menambahkan jam kerja per hari
■ Buat metode di kelas tersebut untuk menghitung total gaji
○ Gunakan konsep pewarisan
*/

class Karyawan {
  constructor () {
    this.gajiPerJam = 0
    this.jmlJamKerja = 0
  }

  setJamKerja(jam) {
    this.jmlJamKerja = jam
  }

  getTotalGaji(){
    return this.jmlJamKerja * this.gajiPerJam
  }
  
}

class KaryawanPenuhWaktu extends Karyawan {
  constructor() {
    super()
    this.gajiPerJam = 100_000
  }

  setJamKerja(jam) {
    if (jam > 6) {
      this.gajiPerJam = 75_000
      this.jmlJamKerja = jam
    } else {
      super.setJamKerja(jam)
    }
  }
}

class KaryawanParuhWaktu extends Karyawan {
  constructor() {
    super()
    this.gajiPerJam = 50_000
  }
  setJamKerja(jam) {
    if (jam > 6) {
      this.gajiPerJam = 30_000
      this.jmlJamKerja = jam
    } else {
      super.setJamKerja(jam) //untuk panggil method di induknya menggunakan super.method()
    }
  }
}

const pekerja1 = new KaryawanPenuhWaktu()
pekerja1.setJamKerja(6)
console.log(pekerja1.getTotalGaji());

const pekerja2 = new KaryawanParuhWaktu()
pekerja2.setJamKerja(10)
console.log(pekerja2.getTotalGaji());



//=======================================================================================
/*
Spesifikasi :
○ Buat game menembak antara dua pemain
○ Setiap pemain memiliki tiga properti: nama, kesehatan, dan kekuatan
○ Setiap pemain akan bergiliran menembak
○ Sebelum menembak, pemain mendapat kesempatan untuk mendapatkan item acak (kesehatan +10 atau kekuatan +10)
○ Permainan akan berlanjut hingga salah satu pemain memiliki kesehatan <0


Persyaratan :
○ Buat kelas Game & Pemain Menembak
○ Kelas Game Menembak :
1. ///
■ konstruktor(pemain1, pemain2) → objek pemain sebagai parameter
■ getRandomItem() → return { kesehatan: 0 atau 10, daya: 0 atau 10 }
■ mulai() → mulai permainan menembak

○ Kelas pemain :
■ Properti → nama, kesehatan (default 100), kekuatan (default 10)
■ hit(kekuatan) → kurangi kesehatan pemain
■ useItem(item) → menerapkan item ke pemain (meningkatkan kesehatan atau kekuatan, berdasarkan hasil dari getRandomItem())
■ showStatus() → tampilkan status pemain (mis: “Pemain A (Kesehatan => 100, Kekuatan => 10) ”)

○ Alur fungsi ShootingGame start() :
■ Di setiap belokan :
● Tampilkan setiap status pemain sebelum menembak
● Dapatkan item acak untuk setiap pemain sebelum menembak
● Tampilkan setiap status pemain setelah pengambilan gambar
■ Tampilkan nama pemenang
*/

// Buat kelas Game
class ShootingGame {
  constructor (pemain1, pemain2) { //konstruktor(pemain1, pemain2) → objek pemain sebagai parameter
    this.pemain1 = pemain1;
    this.pemain2 = pemain2
  }

  getRandomItem() { // getRandomItem() → return { kesehatan: 0 atau 10, daya: 0 atau 10 }
    let healtRandom = Math.floor(Math.random() * 2) * 10;
    let powerRandom = Math.floor(Math.random() * 2) * 10;
    return {healt : healtRandom,power : powerRandom}
  }

  mulai() { // mulai() → mulai permainan menembak
    if(pemain1.healt > 0 && pemain2.healt > 0) {
    console.log('==== permainan dimulai ====');

    console.log('\n');
    console.log('==== status sebelum shoot ===='); //Tampilkan setiap status pemain sebelum menembak
    this.pemain1.showStatus();
    this.pemain2.showStatus();

    let pemainItem1 = this.getRandomItem() //Dapatkan item acak untuk setiap pemain sebelum menembak
    // console.log(pemainItem1);
    let pemainItem2 = this.getRandomItem()
    // console.log(pemainItem2);
    
    console.log('\n');
    console.log('==== pemain mendapatkan random item ====');
    this.pemain1.useItem(pemainItem1)
    this.pemain2.useItem(pemainItem2)
    console.log(`${this.pemain1.nama} mendapatkan ${pemainItem1.healt} darah dan ${pemainItem1.power} power`);
    console.log(`${this.pemain2.nama} mendapatkan ${pemainItem2.healt} darah dan ${pemainItem2.power} power`);
    
    
    this.pemain1.hit(this.pemain2.power)
    this.pemain2.hit(this.pemain1.power)

    console.log('\n');
    console.log("==== status setelah shot ===="); //Tampilkan setiap status pemain setelah pengambilan gambar
    this.pemain1.showStatus();
    this.pemain2.showStatus();

    if (this.pemain1.healt <= 0) {
      console.log(`selamat ${this.pemain2.nama} menang`);
      return
    } else if (this.pemain2.healt <= 0) {
      console.log(`selamat ${this.pemain1.nama} menang`);
      return
    } else {
      this.mulai()
    }
    }
  }
}

// buat Kelas pemain
class Pemain {
  constructor (nama) { // Properti → nama, kesehatan (default 100), kekuatan (default 10)
    this.nama = nama;
    this.healt = 100;
    this.power = 10
  }

  hit(power){ //hit(kekuatan) → kurangi kesehatan pemain
    this.healt -= power
  }

  useItem(item) { //useItem(item) → menerapkan item ke pemain (meningkatkan kesehatan atau kekuatan, berdasarkan hasil dari getRandomItem())
    this.healt += item.healt
    this.power += item.power
  }

  showStatus(){ //showStatus() → tampilkan status pemain (mis: “Pemain A (Kesehatan => 100, Kekuatan => 10) ”)
    return console.log(`${this.nama} (darah => ${this.healt}, kekuatan => ${this.power})`)
  }
}


const pemain1 = new Pemain('caraka')
const pemain2 = new Pemain('wijaya')
// console.log(pemain2);

const aaaa = new ShootingGame(pemain1, pemain2);
aaaa.mulai();


