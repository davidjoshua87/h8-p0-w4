/*Logic Challenge - Faktor Persekutuan Terbesar
Problem
Diberikan sebuah function fpb(angka1, angka2) yang menerima dua parameter angka.
Function akan mengembalikan nilai FPB (Faktor Persekutuan Terbesar).
FPB dari dua bilangan merupakan bilangan bulat positif terbesar yang dapat membagi habis kedua bilangan tersebut.

Code
*/
//1.0 sebuah fungsi dengan parameter angka1 dan angka2 dimana nilai fungsi merupakan fpb dari parameter angka tersebut
    //1.1 input dua angka
    //1.2 ouput satu angka bulat fpb dari angka1 dan angka2
    //1.3 variable kosong array
//2.0 Membuat perulangan untuk pengecekan angka fpb
    //2.1 mengecek jika angka1 hbis dibagi index ipengulangan dan angka2 juga hbis dibagi index i pengulangan
    //2.2 masukan hasil ke variableb baru erupa array
//3.0 karena fpb adalah nila yang terbesar dari kedua angka, maka dilakukan pengulangan untuk mendapatkan nilai terbesar
    //3.1 inisialisasi variable max sama dengan variable array index [0]
    //3.2 buat perulangan untuk mengecek nilai terbesar di variable array
    //3.3 jika nilai array pengulangan index x lebih besar dari nilai variable max
        //maka max sama dengan array index x
        //setelah pengecekan semua index x mendapatkan nila max
//4.0 return max sebagai nila fpb

//code disini
function fpb(angka1, angka2) {
  var tampung = [];
  for (var i = 0; i <= angka1; i++) {
    if (angka1 % i === 0 && angka2 % i === 0) {
      tampung.push(i);
    }
  }
  var max = tampung[0];
  for (var x = 0; x < tampung.length; x++) {
    if (tampung[x] > max) {
      max = tampung[x];
    }
  }
  return max;
}

// TEST CASES
console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1
