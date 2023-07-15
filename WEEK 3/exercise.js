function hurufKeAngka(nilai) {
    let huruf = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let hasil = 0;
    let hasilAwal = 0

    // hasil awal * 26 + hasil akhir
    for (let i = 0; i < nilai.length; i++) {
        for (let j = 0; j < huruf.length; j++) {
            if (nilai[i] == huruf[j]) {
                hasilAwal = j+1
            }
        }
      hasil = (hasil * 26) + hasilAwal
    }
    return hasil;
  }
  let huruf = 'AAAAAA'; //28
//   console.log(hurufKeAngka(huruf));



// 2
function cekDouble(nilai) {
    let hasil = nilai
    let kosong = []
    for (let i = 0; i < nilai.length; i++) {
        for (let j = 0; j < nilai.length; j++) {
            if(hasil[i] == nilai[j] && i !== j) {
                hasil[i] = undefined
                nilai[j] = undefined
            }
        }
    }
    for (let k = 0; k < hasil.length; k++) {
        if (hasil[k] !== undefined) {
           kosong.push(nilai[k])
        }
    }
    return kosong
}
// console.log(cekDouble([4,1,2,1,4,5,2,7,2]));

// 3
function anagram(nilai1, nilai2) {
    let nilai11 = []
    let nilai22 = []
    let hasil = true
    for (let i = 0; i < nilai1.length; i++) {
       nilai11.push(nilai1[i])
       nilai22.push(nilai2[i])
    }
    for (let j = 0; j < nilai11.length; j++) {
        for (let k = 0; k < nilai22.length; k++) {
            if (nilai11[j] == nilai22[k]) {
                nilai11[j] = undefined
                nilai22[k] = undefined
            }
        }
    }
// console.log(nilai11);
// console.log(nilai22);
    for (let l = 0; l < nilai11.length; l++) {
        if (nilai11[l] !== undefined || nilai22[l] !== undefined) {
            hasil = false
        }
    }
        return hasil
    }
// console.log(anagram('lalt','ttll')); // false



// 4
function tangga(nilai) {
    let hasil;
    let tampung = [0,1]
    for (let i = 1; i <= nilai; i++) {
      tampung.push(tampung[i] + tampung[i - 1]);
    }
    hasil = tampung[nilai + 1]
    return hasil
}
// console.log(tangga(5));



// 5
// cari karakter
//looping berapa jumlah karakter di nilai
//bandingkan banyak yg mana
function bbb(nilai) {
    let tampung1 = []
    tampung1.push(nilai[0])
    for (let i = 1; i < nilai.length; i++) {
        if (nilai[0] !== nilai[i]) {
            tampung1.push(nilai[i])
            break
        }
    }

    let hurufPertama = 0
    let hurufKedua = 0
    for (let j = 0; j < tampung1.length; j++) {
        for (let k = 0; k < nilai.length; k++) {
            if(tampung1[j] == nilai[k] & j == 0) {
                hurufPertama++
            } else if (tampung1[j] == nilai[k] & j == 1)
            hurufKedua++
        }
    }

    let hasil = 0
    if (hurufPertama > hurufKedua) {
        return tampung1[0]
    } else {
        return tampung1[1]
    }
}
console.log(bbb([2,2,2,1,1,1,2,2,2]));


// 6
/*
bikin variable romawi
lakukan looping dari index awal ke akhir,
disaat looping cek apakah index berikutnya itu lebih besar dari index current, kalo misalkan lebih 
besar makan nanti index yg besar itu dikurangi index current.
nanti bikin variable hasil yg tiap looping itu akan += hasil

*/

function romawi(nilai) {
    let romawi = ['I','V','X','L','C','D','M']
    let jumlah = [1,5,10,50,100,500,1000]
    let hasil = []
    let hasilAkhir = 0
for (let i = 0; i < nilai.length; i++) { //I
    for (let j = 0; j < romawi.length; j++) {
        if (nilai[i] == romawi[j]) {
            hasil.push(jumlah[j])
        } 
    }
}
for (let k = 0; k < hasil.length; k++) {
    if (hasil.length == 1) {
        hasilAkhir += hasil[k]
    }
    else if (hasil[k] > hasil[k+1]) { // jika anka saat ini > angka berikutnya
        hasilAkhir += hasil[k]
    }
    else if (hasil[k] == hasil[k+1] && hasil[k] == hasil[k+2]) { // jika angka saat ini == angka berikutnya +2
        hasilAkhir = hasilAkhir + (hasil[k]+hasil[k+1]+hasil[k+2])
        k = k+2
    }
    else if (hasil[k] == hasil[k+1]) { // jika angka saat ini == angka berikutnya +1
        hasilAkhir = hasilAkhir + (hasil[k] + hasil[k+1])
        k = k+1
    }
    else if (hasil[k] < hasil[k+1]) { // jika angkaat saat ini kurang dari angka berikutnya
        hasilAkhir = hasilAkhir + (hasil[k+1] - hasil[k])
        k = k+1
    }
    else if (hasil[k] < hasil[k-1]) { // jika angka saat ini kurang dari angka sebelumnya
        hasilAkhir += hasil[k]
    }
}
return hasilAkhir
} 

console.log(romawi('MCIX')); // [1000, 100, 1000, 10, 100, 1, 5] = 1000 + 900 + 90 + 4


// 7
/*
1. [1] //
2. [1,1] // 
3. [1,2,1] // [1] = [0] + [1]
4. [1,3,3,1] // [1] = [0] + [1], [2] = [1] + [2]
5. [1,4,6,4,1] // [1] = [0] + [1], [2] = [1] + [2], [3] = [2] + [3]
index awal dan akhir udh pasti 1
*/
function segitiga (nilai) {
    // let hasil2 = [[1],[1,1]]
    let hasilAkhir = []
    let tampung = []
    for (let k = 0; k < nilai; k++) {
        hasilAkhir.push(1)
    }

    for (let z = 0; z < nilai; z++) {
        // tampung = []
        if (z == 0) {
            hasilAkhir[z] = 1
        } else if (nilai == 2) {
            hasilAkhir = [1,1]
        } else {
            for (let i = 0; i < hasilAkhir.length; i++) {
                if (i = 0) {
                    hasilAkhir[0] = 1
                } else if ( i = hasilAkhir.length-1) {
                    hasilAkhir[i] = 1
                } else {
                    hasilAkhir[i+1] = hasilAkhir[i-1] + hasilAkhir[i]
                }
                // console.log(tampung);
                // hasilAkhir.push(tampung)
            }
        }
    }
    return hasilAkhir
    // console.log(tampung);
}
// console.log(segitiga(3))



// 8
/*
looping 2 x
pertama looping index i - akhir,
kedua, looping index j = i + 1 sampai akhir
dimana nanti mereka ngereturn angka yg paling besar kalau arr[j] - arr[i]
*/

function raka(nilai) {
    let hasilAwal = [] // hasil tiap loopingan jika dikurangkan dan diambil nilai tertinggi
    let hasilAkhir = 0 // bakal nampung nilai terbesar dari nilai hasilAwal

    for (let i = 0; i < nilai.length; i++) {
        let tampung = []
        let aaa = 0
        let tampungNilai = 0
        for (let j = i; j < nilai.length; j++) {
            tampung.push(nilai[j] - nilai[i])
        }
        for (let k = 0; k < tampung.length; k++) { // ambil yg paling besar
            if (tampungNilai < tampung[k]) {
                tampungNilai = tampung[k]
            }
            aaa = tampungNilai
        }
        hasilAwal.push(aaa)
        // console.log(hasilAwal);
        // console.log(tampung);
    }
    for (let l = 0; l < hasilAwal.length; l++) { // ambil yg paling besar
        if (hasilAkhir < hasilAwal[l]) {
            hasilAkhir = hasilAwal[l]
        }
    }
    return hasilAkhir
}
console.log(raka([7,1,5,3,6,4,7]));



function pascal(row) {
    let result = []
    for (let i = 0; i < row; i++) {
       let temp = []
       if(i==0) {
        temp.push(i)
       } else if (i==1) {
        temp.push(1,1)
       } else {
        for(let j = 0; j<= i;j++) {
            if(j==0 || j==i) {
                temp.push(1)
            } else {
                temp.push(result[i-1][j-1]+result[i-1][j])
            }
        }
       }
        result.push(temp)
    }
    return result
}
console.log(pascal(5));