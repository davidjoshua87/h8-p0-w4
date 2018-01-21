/*Diberikan sebuah function angkaPrima(angka) yang menerima satu parameter berupa angka.
Function akan me-return true jika angka tersebut adalah bilangan prima.
Jika tidak, return false.

Code*/

//
//1.suatu fungsi dengan parameter angka sebuah angka prima
  // angka prima adalah angka yg dimulai dari angka 2 dan setiap angka berikutnya
  // adalah angka prima jika tidak habis dibagi 2
//2. buat perulangan untuk mengecek parameter angka adalah sebuah bilangan prima
    //2.1 perulangan akan dimulai dari angka 2 dan mengecek bilangan prima sebuah angka
    //2.2 jika angka dapat habis dibagi index x maka bukan angka prima maka tampilkan false
//3. setelah selesai pengecekan angka tidak habis dibagi index x, maka bilangan prima maka tampilkan true

function angkaPrima(angka) {
 for(var x=2; x<angka; x++){
   if(angka % x === 0){
     return false;
   }
 }
 return true;
}

// TEST CASES
console.log(angkaPrima(3)); // true
console.log(angkaPrima(7)); // true
console.log(angkaPrima(6)); // false
console.log(angkaPrima(23)); // true
console.log(angkaPrima(33)); // false
