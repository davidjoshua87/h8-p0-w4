/*
Logic Challenge - Tambah Dash / Strip
Problem
Diberikan sebuah function tambahDash(str) yang menerima satu parameter berupa string.
Function akan mengembalikan str tersebut dengan menambahkan simbol dash ('-') di antara dua angka ganjil di dalam string yang menjadi parameter tersebut.
Contoh, jika str adalah 1233897, function akan mengembalikan nilai '123-389-7'. 0 bukanlah angka ganjil.

Code
*/
//1.0 inisialisasi
  //1.1 memisahkan parameter str dengan spasi lalu tampung di variable splitStr
  //1.2 buat variable strBaru untuk menampung hasil
//2.0 buat perulangn untuk mengecek angka berupa genap atau ganjil
  //2.1 jika sebuah angka berupa genap maka
      // tampung di strBaru angka- angka yang displit
  //2.2 jika bukan genap maka
    //2.2.1 cek jika ganjil maka
        // tampung di strBaru angka- angka yang displit dengan tambahan string -
    //2.2.2 jika ternyta genap maka
        // tampung di strBaru angka- angka yang displit
//3.0 return hasil strBaru

//code disini
function tambahDash(str) {
  var splitStr = str.split('');
  var strBaru = '';
  for (var x = 0; x < splitStr.length; x++) {
    // check genap
    if (splitStr[x] % 2 === 0) {
      strBaru += splitStr[x];
      // check genap pertama
    } else if (splitStr[x] % 2 !== 0) {
      // check genap kedua
      if (splitStr[x + 1] % 2 == 1) {
        strBaru += splitStr[x] + '-';
      } else {
        strBaru += splitStr[x];
      }
    }
  }
  return strBaru;
}

// TEST CASES
console.log(tambahDash('454793')); // '4547-9-3'
console.log(tambahDash('1739028')); // '1-7-3-9028'
console.log(tambahDash('891829')); // '89-1829'
console.log(tambahDash('10192')); // '101-92'
console.log(tambahDash('222222')); // '222222'
