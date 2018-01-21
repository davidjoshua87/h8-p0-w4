/*
==================================
Array Mastery: Largest Number
==================================

Nama:________

[INSTRUKSI]
Function largestNumber akan menerima satu parameter berupa array yang berisikan angka, dimana dengan asumsi kemungkinan angka dari 0 - 999, dan angka dalam array minimal 3 angka, dan tidak ada angka yang bernilai sama (ini adalah info tese case, bukan harus divalidasi/dicek).
largestNumber akan mengembalikan angka yang terbesar dari array tersebut.

[CONTOH]
input: [4, 2, 5, 1]
output: 4

[RULE]
- Wajib menuliskan pseudocode. Tidak ada pseudocode / pseudocode tidak match dengan kode maka indikasi soal tidak diselesaikan secara pribadi dan tidak akan dinilai.
- Dilarang menggunakan Regex (.match, .test, dan sebagainya)
- Dilarang menggunakan method .filter, atau .reduce!
- Dilarang menggunakan .sort!
*/
//1. inisialisasi
// variable angka
// variable angka2 sama dengan nol
//2. membaca dan mencari angka dalam array dari kiri ke kanan
  //2.1 membuat perulangan pada array numbers untuk mengecek dan mendapatkan angka
  //2.2 masukan pengecekan dalam variable angka
  //2.3 mencari nilai tertinggi dengan dibandingkan angka dan angka2
      //2.3.1 jika angka lebih besar angka2,
            // maka angka2 = angka
//3. return angka2

function largestNumber(numbers) {
    var max = numbers[0];
    for (var i = 0; i < numbers.length; i++) {
      if (numbers [i]> max) {
        max = numbers[i];
      }
    }
    return max;
  }


// TEST CASES
console.log(largestNumber([5, 2, 1, 4])); // 5
console.log(largestNumber([999, 5, 0, 1, 4, 998])); // 999
console.log(largestNumber([15, 32, 11, 14])); // 32
console.log(largestNumber([5, 4, 3, 2, 1, 0])); // 5
console.log(largestNumber([123, 321, 143, 313])); // 321
