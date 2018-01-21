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
