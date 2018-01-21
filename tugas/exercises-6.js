/*Logic Challenge - Digit Perkalian Minimum
Problem
Diberikan sebuah function digitPerkalianMinimum(angka) yang menerima satu parameter angka.
Function akan mengembalikan jumlah digit minimal dari angka yang merupakan faktor angka parameter tersebut,
Contoh, jika angka adalah 24, maka faktornya adalah 1 * 24, 2 * 12, 3 * 8, dan 4 * 6. Dari antara faktor tersebut, yang digit nya paling sedikit adalah 3 * 8 atau 4 * 6,
sehingga function akan me-return 2.

*/
//1.0 inisialisasi
  //1.1 buat variable penampung urutanJumlah
  //1.2 buat variable panjang karakter
//2.0 kondisi proses pengecekan
  //2.1 jika parameter angka yang diberikan sama dengan satu
      // maka akan return 2
    //2.2 jika parameter angka bukan sama dengan satu
      // maka proses dilanjutkan untuk pengecekan digit perkalian minimum
        //2.2.1 buat perulangan untuk mengecek digit perkalian minimum
          //2.2.2 jika angka parameter angka genap maka
            //2.2.2.1 inisialisasi variable hasilBagi sama dengan angka dibagi index perulangan
            //2.2.2.2 jika hasil bagi lebih besar nilai index perulangan maka
            //panjang karakter sama dengan string index perulangan ditambah string hasil bagi
            // masukkan nilai panjang karakter di variable urutanJumlah
    //2.3 urutkan nilai di variable urutanJumlah
//3.0 return nilai urutanJumlah dengan index pertama

//code disini
function digitPerkalianMinimum(angka) {
  var lengKarakter;
  var urutanJumlah = [];
  if (angka === 1) {
    return 2;
  } else {
    for (var x = 1; x < angka; x++) {
      if (angka % x === 0) {
        var hasilBagi = angka / x;
        if (hasilBagi > x) {
          lengKarakter = (String(x) + String(hasilBagi)).length;
          urutanJumlah.push(lengKarakter);
        }
      }
    }
    urutanJumlah.sort();
    return urutanJumlah[0];
  }
}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2
