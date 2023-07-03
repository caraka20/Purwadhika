/*
    =======================
    Alphabet Multidimension
    =======================

    Buatlah sebuah function yang berfungsi mengenerate Alphabet Multidimension. 
    yang artinya di dalam array multidimension terdapat alphabet yang isinya 
    berurutan. dimana Array multidimension nya memiliki row dan col yang sama
    
    [EXAMPLE]
    alphabetMultidimension(6)

    maka output nya adalah : 

    [
        [A,B,C,D,E,F],
        [G,H,I,J,K,L],
        [M,N,O,P,Q,R],
        [S,T,U,V,W,X],
        [Y,Z,A,B,C,D], <--- perhatikan, jika sudah sampai z maka , kembali lagi ke A
        [E,F,G,H,I,J]
    ]
*/

function alphabetMultidimension(num) {
  // code
  let alphabet = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  let hasilAwal = [];
  let hasilAkhir = [];
  let titipIndex = 0;
  let titipIndex2 = num; //6
  let titipIndex3 = 0;

  for (let i = 0; i < num; i++) {
    titipIndex = i;
    if (titipIndex2 > alphabet.length) {
      titipIndex2 = alphabet.length;
    }

    for (let j = titipIndex3; j < titipIndex2; j++) {
      //25

      hasilAwal.push(alphabet[j]);
      titipIndex3 = j;
      if (j >= alphabet.length - 1) {
        titipIndex3 = 0;
        // num = num - (
        //     function test() {
        //        return alphabet.length - j
        //     }
        // )
        titipIndex2 = num - (alphabet.length - j + 1);
        for (let k = titipIndex3; k < titipIndex2; k++) {
          hasilAwal.push(alphabet[k]);
          titipIndex3 = k;
        }
        // hasilAwal.push(alphabet[j])
      }
    }
    titipIndex3++;
    titipIndex2 += num;
    hasilAkhir.push(hasilAwal);
    hasilAwal = [];
  }
  return hasilAkhir;
}

console.log(alphabetMultidimension(6));
/*
output:
[
    [A,B,C,D,E,F],
    [G,H,I,J,K,L],
    [M,N,O,P,Q,R],
    [S,T,U,V,W,X],
    [Y,Z,A,B,C,D],
    [E,F,G,H,I,J]
]
*/

// test
/*
masih eror ketika angka alphabetMultidimension > 6
*/
