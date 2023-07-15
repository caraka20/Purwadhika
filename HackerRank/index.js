// Apple and Orange
/*
Untuk apel, terdapat 3 apel dengan jarak dari pohon apel ke titik A adalah [-2, 2, 1]. Jika kita menjumlahkan posisi pohon apel (5) dengan setiap jarak apel, kita mendapatkan posisi apel: [3, 7, 6]. Dari ketiga posisi ini, hanya satu apel (posisi 7) yang jatuh di dalam rentang rumah. Oleh karena itu, jumlah apel yang jatuh di dalam rumah adalah 1.

Untuk jeruk, terdapat 2 jeruk dengan jarak dari pohon jeruk ke titik B adalah [5, -6]. Jika kita menjumlahkan posisi pohon jeruk (15) dengan setiap jarak jeruk, kita mendapatkan posisi jeruk: [20, 9]. Dari kedua posisi ini, hanya satu jeruk (posisi 9) yang jatuh di dalam rentang rumah. Oleh karena itu, jumlah jeruk yang jatuh di dalam rumah adalah 1.

Penyelesaian masalah ini melibatkan menghitung jumlah buah apel dan jeruk yang jatuh di dalam rentang rumah dengan menggunakan informasi posisi pohon dan jarak buah-buah tersebut.

*/
function countApplesAndOranges(s, t, a, b, apples, oranges) {
    let appleCount = 0;
    let orangeCount = 0;
  
    for (let i = 0; i < apples.length; i++) {
      const applePosition = a + apples[i];
      if (applePosition >= s && applePosition <= t) {
        appleCount++;
      }
    }
  
    for (let i = 0; i < oranges.length; i++) {
      const orangePosition = b + oranges[i];
      if (orangePosition >= s && orangePosition <= t) {
        orangeCount++;
      }
    }
  
    console.log(appleCount);
    console.log(orangeCount);
  }
  const s = 7;
  const t = 11;
  const a = 5;
  const b = 15;
  const apples = [-2, 2, 1];
  const oranges = [5, -6];
  
  countApplesAndOranges(s, t, a, b, apples, oranges);
    