
/*Logic Challenge - Mencari Median
Problem
Diberikan sebuah function cariMedian(arr) yang menerima sebuah array angka.
Function akan me-return median dari deret angka tersebut.
Median adalah nilai tengah dari sebuah deret bilangan.
Contoh, median atau dari [1, 2, 3, 4, 5] adalah 3 yang merupakan nilai yang ada di posisi tengah dari deret tersebut.
Median dari deret yang berjumlah genap adalah rata-rata dari dua nilai tengah.
Contoh, median dari [1, 2, 3, 4] adalah 2.5, karena (2 + 3 / 2).

Code
*/
//1.0 sebuah fungsi dengan parameter array angka dan akan mencari nilai median
//2.0 membuat kondisi dengan jumlah index array untuk mencari nilai tengah index array
//2.1 jika jumlah index array adalah ganjil maka nilai tenagh index array adalah median
  // maka return nilainya
//2.2 jika jumlah index bilangan array adalah genap maka nilai median adalah dua index array yang ditengah dibagi 2
  // maka return nilainya

//code disini
function cariMedian(arr) {
  if (arr.length % 2 === 1) {
    return arr[Math.floor(arr.length / 2)];
  } else {
    return (arr[(arr.length / 2)] + arr[(arr.length / 2) - 1]) / 2;
  }
}

// TEST CASES
console.log(cariMedian([1, 2, 3, 4, 5])); // 3
console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
console.log(cariMedian([3, 4, 7, 6, 10])); // 7
console.log(cariMedian([1, 3, 3])); // 3
console.log(cariMedian([7, 7, 8, 8])); // 7.5
