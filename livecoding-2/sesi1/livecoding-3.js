/*
==================================
Array Mastery: Pair Up
==================================

Nama:________

[INSTRUKSI]
Setiap student di HACKTIV8 ditugaskan untuk membuat tim project dengan komposisi tim dua orang.
Kita membutuhkan sebuah program untuk membuat tim-tim tersebut.

Function pairUp akan menerima satu parameter berupa array yang berisi string nama student.
Function ini akan mengelompokkan setiap dua nama menjadi satu kelompok, dan apabila tersisa satu student, student terakhir akan bersama instruktur.
Hasil pengelompokkan adalah sebuah array yang berisi string berupa nama dua orang student sebagai satu tim.
Formatnya adalah <Nama Student 1> dan <Nama Student 2>.
[CONTOH]
input: ['Budi', 'Badu', 'Indra', 'Indri']
output: ['Budi dan Badu', 'Indra dan Indri']

input: ['Budi', 'Badu', 'Indra', 'Indri', 'James']
output: ['Budi dan Badu', 'Indra dan Indri', 'James dan Instruktur']

input: []
output: []

[RULE]
- Wajib menuliskan pseudocode. Tidak ada pseudocode / pseudocode tidak match dengan kode maka indikasi soal tidak diselesaikan secara pribadi dan tidak akan dinilai.
- Dilarang menggunakan Regex (.match, .test, dan sebagainya)
- Dilarang menggunakan method .map, .filter, atau .reduce!
*/

//code disini
function pairUp(students) {
  var tampung = [];
  for (var x = 0; x < students.length; x++) {
    if (x % 2 === 0 && students[x + 1] !== undefined) {
      tampung.push(students[x] + " dan " + students[x + 1]);
    }
  }
  if (students.length % 2 === 1) {
    tampung.push(students[students.length - 1] + " dan Instruktur");
  }
  return tampung;
}

// TEST CASES
console.log(pairUp(['Budi', 'Badu'])); // ['Budi dan Badu']
console.log(pairUp(['Budi'])); // ['Budi dan Instruktur']
console.log(pairUp(['Budi', 'Badu', 'Indra', 'Indri'])); // ['Budi dan Badu', 'Indra dan Indri']
console.log(pairUp(['Budi', 'Badu', 'Indra', 'Indri', 'James'])); // ['Budi dan Badu', 'Indra dan Indri', 'James dan Instruktur']
console.log(pairUp([])); // []
