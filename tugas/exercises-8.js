/*
Logic Challenge - Tukar Besar Kecil
Problem
Diberikan function tukarBesarKecil(kalimat) yang menerima satu parameter berupa string.
Function akan me-return string tersebut dengan menukar karakter yang uppercase menjadi lowercase, dan sebaliknya.
Spasi dan simbol diabaikan.

Code
*/
//1.0 inisialisasi
  //1.1 buat variable tukarUkuran untuk menampung hasil
//2.0 buat perulngan untuk mengecek dari kiri ke kanan
  //2.1 perulangan sepanjang paraeter kalimat
    //2.1.1 jika kalimat index perulangan sama dengan kalimat index perulangan yang huruf besar
      // maka masukkan kalimat index perulangan dengan dirubah huruf kecil
    //2.1.2 jika kalimat index perulangan sama dengan kalimat index perulangan yang huruf kecil
      // maka masukkan kalimat index perulangan dengan dirubah huruf besar
//3.0 return hasil tukarUkuran dengan disatukan ('')

//code disini
function tukarBesarKecil(kalimat) {
  var tukarUkuran = [];
  for (var x = 0; x < kalimat.length; x++) {
    if (kalimat[x] === kalimat[x].toUpperCase()) {
      tukarUkuran.push(kalimat[x].toLowerCase());
    } else if (kalimat[x] === kalimat[x].toLowerCase()) {
      tukarUkuran.push(kalimat[x].toUpperCase());
    }
  }
  return tukarUkuran.join('');

}

// TEST CASES
console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"
