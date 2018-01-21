/*Logic Challenge - Mencari Modus
Problem
Diberikan sebuah function cariModus(arr) yang menerima sebuah array angka.
Function akan me-return modus dari array atau deret angka tersebut.
Modus adalah angka dari sebuah deret yang paling banyak atau paling sering muncul.
Contoh, modus dari [10, 4, 5, 2, 4] adalah 4. Jika modus tidak ditemukan, function akan me-return -1.
Apabila ditemukan lebih dari dua nilai modus, tampilkan nilai modus yang paling pertama muncul (dihitung dari kiri ke kanan).
Dan apabila dialam modus hanya ada 1 nilai yang sama maka function akan me-return -1, Contohnya [1, 1, 1] adalah -1.

Code
*/
// 1.0 mengurutkan nilai angka arr dari terkecil ke besar
  // 1.1 buat perulangan dengan index untuk membaca dari kiri ke kanan
    // 1.1.1 buat perulangan lagi dengn index beda untuk membaca dari kiri ke kanan
      // 1.1.1.1 jika arr index pertama lebih besar arr index kedua maka
          // variable tampung sama dengan arr index pertama, lalu
          // arr index pertama sama dengan arr index kedua, lalu
          // arr index kedua sama dengan nilai variable tampung
// 2.0 mengambil nilai arr setelah diurutkan dalam arrSort
// 3.0 buat variable arrReverse adalah nilai arr diurutkan dan dibalik nilai angkanya
// 4.0 buat kondisi untuk mengecek apakah hanya satu modus yang ditemukan
  // 4.1 jika nilai arrSort pertama sama dengan nilai arrReverse pertama maka
    // return nilai -1
  // 4.2 jika ada nilai ada nilai modus lebih dari satu
    // 4.2.1 inisialisasi variable arrBaru untuk menampung
    // 4.2.2 buat perulangan untuk mengecek nilai modus dari kiri ke kanan arrSort
      // 4.2.2.1 buat perulangan untuk mengecek apakah ada lebih dari satu nilai modus dari arrSort
      // 4.2.2.2 jika ada nilai modus maka
      // ambil dan tampung di variable arrBaru
// 5.0 buat kondisi
  // 5.1 jika nilai arrBaru sama dengan undifined berarti tidak ada nilai modus maka
    // return -1
  // 5.2 jika terdapat sesuai proses sebelumnya maka
    // return arrBaru index pertama

//code disini
function cariModus(arr) {
  for (var x = 0; x < arr.length; x++) {
    for (var y = x; y < arr.length; y++) {
      if (arr[x] > arr[y]) {
        var tampung = arr[x];
        arr[x] = arr[y];
        arr[y] = tampung;
      }
    }
  }
  var arrSort = arr.slice(0);
  var arrReverse = arr.reverse();
  if (arrSort [0] === arrReverse [0]) {
    return -1;
  } else {
    var arrBaru = [];
    for (var j = 0; j <= arrSort.length - 1; j++) {
      for (var i = 0; i <= arrSort.length - 1; i++) {
        if (j !== i && arrSort[j] === arrSort[i]) {
          arrBaru.push(arrSort[i]);
        }
      }
    }
    if (arrBaru[0] === undefined) {
      return -1;
    } else {
      return arrBaru[0];
    }
  }
}

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1
