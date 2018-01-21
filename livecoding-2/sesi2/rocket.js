/*
==================================
Array Mastery: Group Odd Evens
==================================

Nama:________

[INSTRUKSI]
Function groupOddEven akan menerima satu parameter berupa array yang berisi number.
Function akan mengelompokkan setiap number yang ganjil (odd) dan setiap number yang genap (even),
dan akan mereturn sebuah string dengan format berikut:

"ODDS: <OddNum1>,<OddNum2>,<OddNum3> EVENS: <EvenNum1>,<EvenNum2>,<EvenNum3>"

aturan:
  - Apabila tidak ada angka ganjil, hanya tampilkan:
  "EVENS: <EvenNum1>, <EvenNum2>"
  - Apabila tidak ada angka genap, hanya tampilkan:
  "ODDS: <OddNum1>, <OddNum2>"
  - Apabila tidak ada angka sama sekali, tampilkan string kosong!
  - Angka tidak perlu diurutkan!

[CONTOH]
input: [1, 5, 8, 2, 3]
output: "ODDS: 1, 5, 3 EVENS: 8, 2"

input: [1, 1, 1]
output: "ODDS: 1, 1, 1"

input: [2, 8, 10]
output: "EVENS: 2, 8, 10"

[RULE]
- Wajib menuliskan pseudocode. Tidak ada pseudocode / pseudocode tidak match dengan kode maka indikasi soal tidak diselesaikan secara pribadi dan tidak akan dinilai.
- Dilarang menggunakan Regex (.match, .test, dan sebagainya)
- Dilarang menggunakan .map, .filter, dan .reduce!
*/
//1. inisialisasi
    //1.1 variable odds dengan nilai string 'ODDS'
    //1.2 variable evens dengan nilai string 'EVEN'
//2. buat perulangan pada parameter array students dengan index x untuk mengecek
    //2.1 jika nilai array students index x adalah ganjil
          //maka pertambahan variable odds sama dengan array students index x ditambah string koma spasi
    //2.2 jika kondisi lainnya yaitu genap maka pertambahan variable evens sama dengan array students index x ditambah string koma spasi
//3. buat dan isikan variable evens baru  sama dengan penggabungan variable evens lalu mengembalikan potongan string evens dari index 0
    //dengan pengurangan jumlah index evens dua
//4.buat dan isikan variable oods baru sama dengan mengembalikan potongan string odds dari index 0
    //dengan pengurangan jumlah index evens dua
//5. buat kondisi perbandingan nilai studens dengan variable baru
    //5.1 apabila  ada angka ganjil, hanya tampilkan: string nilai odds baru
    //5.2 apabila ada angka genap, hanya tampilkan: string nilai evens baru
    //5.3 apabila tidak ada angka sama sekali, tampilkan string kosong!
//6. return odds baru ditambah evens baru

//code disini
function groupOddEven(students) {
  var odds = 'ODDS: ';
  var evens = 'EVENS: ';
  for (var x = 0; x < students.length; x++) {
    if (students[x] % 2 === 1) {
      odds += students[x] + ', ';
    } else {
      evens += students[x] + ', ';
    }
  }
  var newEvens = ' '.concat(evens.substr(0, evens.length - 2));
  var newOdds = odds.substr(0, odds.length - 2);
  if (newOdds === 'ODDS') newOdds = '';
  if (newEvens === ' EVENS') newEvens = '';
  if (newOdds + newEvens[0] === ' ') newEvens = newEvens.substr(1, evens.length - 1);
  return (newOdds + newEvens);
}

// TEST CASES
console.log(groupOddEven([1, 5, 8, 2, 3])); // "ODDS: 1, 5, 3 EVENS: 8, 2"
console.log(groupOddEven([1, 1, 1])); // "ODDS: 1, 1, 1"
console.log(groupOddEven([2, 8, 10])); // "EVENS: 2, 8, 10"
console.log(groupOddEven([2, 111])); // "ODDS: 111 EVENS: 2"
console.log(groupOddEven([])); // ""
