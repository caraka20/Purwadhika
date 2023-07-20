// 1
function pairs(k, arr) {
    // Write your code here
    /* berapa banyak bilangan yang jika dikurang menghasilkan nilai k,
    bilangan yg sudah digunakan boleh digunakan lagi.
    step : lakukan looping i sebanyak arr..length, dan didalamnya looping lagi menggunakan j sebanyak arr.length.
    didalam loopingan j melakukan kondisi jika arr[i] - arr[j] hasilnya k, maka hasil++, dengan syarat [i] !== [j]
    */
   let hasil = 0
   for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
        if (arr[i] - arr[j] == k && i !== j) {
            hasil++
        }
    }
   }
return hasil
}
console.log(pairs(2,[1, 5, 3, 4, 2]));


// 2
function birthday(s, d, m) {
    // Write your code here
    /*
        s = arrai
        m = panjang arrai yg harus dijumlahin
        d = pertambahan sebanyak d yg menghasilkan m
        gimana caranya menjumlahkan semua bilangan yg tiap panjang arr = m, jumlahnya d.
        looping i, tiap loopingannya bikin variable baru bentuk [] dan ambil index saat ini sampai m kedepannya,
        trus jumlahin semua yg ada di dlm variable [], kalo jumlahnya = d maka hasil++.

    */
    let hasil = 0
    for (let i = 0; i < s.length; i++) {
        let hitung = s.slice(i,i+m)
        // console.log(hitung);
        let total = 0
        for (let j = 0; j < hitung.length; j++) {
            total += hitung[j];
          }
        if (total == d) {
            hasil += 1
        }
    }
       return hasil
}
console.log(birthday([1, 2, 1, 3, 2], 3, 2 ));

// 3
function climbingLeaderboard(ranked, player) {
    // Write your code here nilaiNonDouble

    /*
    arr 1 dan arr 2
    tahapannya arr 2[0] itu nanti ditambahin ke arr 1, habis itu hilangkan yg duplikat, 
    terus dibalikan arrai nya, habis itu lakukan looping untuk mencari ranking nya, jika pada arr2[x] ditemukan
    angka yang sama pada arr 1 yg sudah ditambahkan dengan arr 2[0], makan bikin variable baru berisi arr untuk menampung rankingnya. jadi nanti arr 1[x+1] di push ke hasil.
    */
 
 
    let hasil = []
    for (let z = 0; z < player.length; z++) {
        let nilaiNonDouble = [];
       let semuaNilai = ranked
    //    let nilaiBesarKeKecil = []
        semuaNilai.push(player[z])
        // console.log(semuaNilai);

    // ngilangin nilai duplikat
    for (let i = 0; i < semuaNilai.length; i++) {
        let isDuplicate = false;
        for (let j = 0; j < nilaiNonDouble.length; j++) {
          if (semuaNilai[i] === nilaiNonDouble[j]) {
            isDuplicate = true;
            break;
          }
        }
        if (isDuplicate === false) {
          nilaiNonDouble.push(semuaNilai[i]);
        }
      }

          // ngurutin nilai
        //   nilaiNonDouble.sort(function(a, b) {
        //     return a - b;
        //   });
          
    for (let k = 0; k < nilaiNonDouble.length - 1; k++) {
        for (let l = 0; l < nilaiNonDouble.length - 1 - k; l++) {
          if (nilaiNonDouble[l] > nilaiNonDouble[l + 1]) {
            let tampung = nilaiNonDouble[l];
            nilaiNonDouble[l] = nilaiNonDouble[l + 1];
            nilaiNonDouble[l + 1] = tampung;
          }
        }
      }

     // terus di balikin lagi
    //  for (let x = nilaiNonDouble.length - 1; x >= 0; x--) {
    //    nilaiBesarKeKecil.push(nilaiNonDouble[x])
    //  }
    nilaiNonDouble.reverse()

    //  console.log(nilaiBesarKeKecil);
     // temukan ranking nya
    //  if (nilaiNonDouble.includes(player[z])) {
    //     hasil.push()
    //  }
         for (let o = 0; o < nilaiNonDouble.length; o++) {
             if (player[z] == nilaiNonDouble[o]) {
                hasil.push(o+1)
            }
    }
        
    } // akhir
  
      return hasil

}
console.log(climbingLeaderboard([100, 100, 50, 40, 40, 20, 10], [5, 25]));


// 4
function compareTriplets(a, b) {
    let result = []
    let tampungA = 0
    let tampungB = 0
    for (let i = 0; i < a.length; i++){
        if(a[i] > b[i]) {
            tampungA++
        } else if (a[i] < b[i]) {
            tampungB++
        } else if (a[i]==b[i]){
            continue
        }
    }
    result[0]=tampungA
    result[1]=tampungB
    return result
    }


    
console.log('\n');
console.log('======== QUIZ 5 =======');

// 1. Non-Divisible Subset
/*
looping semua,
tampung semua pada arrai
*/

function nonDivisibleSubsett(k, s) {

    let hasil = 0
    let tampung = []
    for (let i = 0; i < s.length; i++) {
        for (let j = i + 1; j < s.length; j++) {
            let aaa = 0
            aaa = s[i] + s[j]
            if ( aaa % k !== 0 ) {
                tampung.push(s[i],s[j])
            }
        }
    }
    // console.log(tampung);
    hasil = [...new Set (tampung)]
    return hasil.length
}
// console.log(nonDivisibleSubset(3,[1,7,2,4]));

// console.log(nonDivisibleSubsett(7,[278, 576, 496, 727, 410, 124, 338, 149, 209, 702, 282, 718, 771, 575, 436]));

function nonDivisibleSubset(k, s) {
    let tampung1 = []
    for (let i = 0; i < k; i++) {
      tampung1[i] = 0;
    }
    // console.log(tampung1);
  
    for (let i = 0; i < s.length; i++) {
      let tampung2 = s[i] % k;
      tampung1[tampung2]++;
    }

    let hasil = 0;
  
    if (tampung1[0] > 0) {
      hasil++; // Tambahin satu elemen dengan sisa bagi 0
    }
    if (k % 2 === 0 && tampung1[k / 2] > 0) {
      hasil++; 
    }
//   console.log(tampung1);
    for (let i = 1; i <= k / 2; i++) {
      if (i !== k - i) {
        // Pilih yg maksimum
        hasil += Math.max(tampung1[i], tampung1[k - i]);
      }
    }
  
    return hasil;
  }
  
  // Contoh penggunaan:
  const k = 4;
  const arr = [19, 10, 12, 10, 24, 25, 22];
  const ccc = nonDivisibleSubset(k, arr);
//   console.log(ccc); // Output: 3
  
//   const remainders = new Array(1);
//   console.log(remainders);



// 2
/*
Penjelasan solusi:


*/
function larrysArray(A) {
    let hasil = 0;
  
    for (let i = 0; i < A.length; i++) {
      for (let j = i + 1; j < A.length; j++) {
        if (A[i] > A[j]) {
          hasil++;
        }
      }
    }
    if (hasil % 2 == 0) {
        return "YES"
    } else {
        return "NO"
    }
  }
  const array = [1,6,5,2,4,3];
  const resultt = larrysArray(array);
  console.log(resultt);
  


// 3
function encryption(s) {
    // Pertama, spasi dihapus dari teks. Membiarkan menjadi panjang teks ini.
    let tanpaSpasi = ''
    for (let i = 0; i < s.length; i++) {
        if (s[i]!== ' ') {
            tanpaSpasi += s[i]
        }
    }
    console.log(tanpaSpasi);
    let hasil = "";
  
    // jadi ditulis dalam bentuk grid dengan 7 baris dan 8 kolom.
    // perkalian yg diambil adalah perkalian yg nilai nya paling minimum, berarti perkalian 2angka yg mendekati akar dari length
    // berarti panjang karakter itu diambil angka terbesar dalam perkaliannya. yg kecil untuk baris dan paling besar untuk kolom
    let baris = Math.floor(Math.sqrt(tanpaSpasi.length)); //3
    let kolom = Math.ceil(Math.sqrt(tanpaSpasi.length)); //4

//   console.log(baris + 'baris');
//   console.log(kolom + 'kolom');
    // Pesan yang disandikan diperoleh dengan menampilkan karakter dari setiap kolom, dengan spasi di antara teks kolom. Pesan yang disandikan untuk kisi di atas adalah:
    //berarti looping 2x, jasi hasilnya itu tiap index hasil dikasih diambil dari kalimatnya, tapi dikasih spasi sebesar perkalian 2 angka tapi yg paling besar (kolom)
    /*
    h a v e a n i c e d a y = ini ada 11 index. 0,4,8 => 1,5,9 => 2,6,10 => 3,7,11 jadi sandinya 4 index dimana itu perkalian paling besar antara 2 bilangan penghasil kata tanpa spasi . length
    hasil = hae and via ecy
    */

    for (let i = 0; i < kolom; i++) { // < 4
      for (let j = i; j < tanpaSpasi.length; j += kolom) { // < 12
        hasil += tanpaSpasi[j];
      }
      hasil += " ";
    }
//   console.log(text);
    return hasil;
  }
  const text = "have a nice day";
  const raka = encryption(text);
  console.log(raka);
  


  // 4
  /*
  berapa banyak jumlah pertukaran paling minimum untuk mengubah isi arrai menjadi urut.
  pokoknya tiap akhir loopingan harus menghapus arr[0]
  tiap looping nge sort tampung yg udah di ilangin indexnya
  dan tiap loopingan harus cek apakah tampung == arrUrut, kalo sama berarti udah dong hahahahahhahahahaahahhahah
  */
  function lilysHomework(arr) {
    let tampung = [...arr]
    let arrUrut = arr.sort((a, b) => a - b);
    // console.log(tampung.length);
   let hasil = 0
   let isSama = true
//    console.log(arrUrut);
        for (let i = 0; i < tampung.length; i++) {

            let angkaKecil = Math.min(...tampung) //// cari angka terkecil, trus cari tau dia index ke berapa
            // console.log(angkaKecil); //3
            let titip = tampung[0] // buat nuker nilai
            // console.log(titip);
            let index = tampung.findIndex(element => element === angkaKecil) // buat cari index dengan nlai terkecil
            // console.log(index);
            tampung[0] = tampung[index]
            tampung[index] = titip
            tampung.shift()
            arrUrut.shift()
            // console.log(tampung);
            // console.log(arrUrut);

            //cek apakah kedua arrai itu sama
            for (let i = 0; i < tampung.length; i++) {
                if (tampung[i] !== arrUrut[i]) {
                  isSama = false
                  break
                }
                // console.log(isSama);
              }
            if (isSama == true) {
                continue
            } else {
                hasil ++
            }
            // hasil = i
        }
    return hasil
  }
  const arrayl = [3,4,2,5,1];
//   const arrayl = [2, 5, 3, 1];
  const resultl = lilysHomework(arrayl);
  console.log(resultl);
  


function lilysHomework(arr) {
    function swap(arr) {
        const arr2 = arr.slice().sort((a, b) => a - b);
        const indexMap = {};

        for (let i = 0; i < arr.length; i++) {
            indexMap[arr[i]] = i;
        }

        let swap = 0;

        for (let i = 0; i < arr.length; i++) {
            if (arr[i] != arr2[i]) {
                swap++;

                let swapIndex = indexMap[arr2[i]];

                indexMap[arr[i]] = swapIndex;
                indexMap[arr2[i]] = i;

                arr[swapIndex] = arr[i];
                arr[i] = arr2[i];
            }
        }
        return swap;
    }

    let reversearr = arr.slice().reverse();
    let res = Math.min(swap(arr), swap(reversearr));
    return res;
}
