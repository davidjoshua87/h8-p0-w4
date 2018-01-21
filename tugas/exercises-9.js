/*
Logic Challenge - Check AB
Problem
Diberikan sebuah function checkAB(str) yang menerima satu parameter berupa string.
function tersebut mengembalikan nilai true jika di dalam string tersebut terdapat karakter a dan b yang memiliki jarak 3 karakter lain minimal satu kali.
Jika tidak ditemukan sama sekali, kembalikan nilai false.

Code
*/
//1.0 buat perulangan untuk mengecek str berupa string huruf
//1.1. perulangan mengecek dari kiri ke kanan
  //1.1.1 jika str index perulangan sama dengan ada string huruf a dan str index perulangan + 4 sama dengan ada string huruf b
      // maka return true
  //1.1.2 jika str index perulangan sama dengan ada string huruf b dan str index perulangan + 4 sama dengan ada string huruf a
      // maka return true
//2.0 jika tidak terdapat dikedua kondisi maka
  // return false

//code disini
function checkAB(str) {
  for (var x = 0; x < str.length; x++) {
    if (str[x] === 'a' && str[x + 4] === 'b') {
      return true;
    } else if (str[x] === 'b' && str[x + 4] === 'a') {
      return true;
    }
  }
  return false;
}

// TEST CASES
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false
