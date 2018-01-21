/*
Logic Challenge - Mengurutkan Abjad
Problem
Diberikan sebuah function urutkanAbjad(str) yang menerima satu parameter berupa string.
Function tersebut akan mengembalikan string baru yang telah diubah urutan abjadnya dari a hingga z.
Contohnya, halo akan menjadi ahlo.
Kamu tidak perlu memikirkan apabila ada simbol ataupun angka didalam string tersebut.

Code
*/
//1.0 memisahkan kata string
//1.1 mengurutkn hasil pemishan kata string
//1.2 menyatukan semua huruf string yang sudah diurutkan menjadi kata baru
//2.0 return kata tersebut

//code disini
function urutkanAbjad(str) {
  return str.split('').sort('').join('');
}

// TEST CASES
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'
