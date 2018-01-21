/*Logic Challenge - Mencari Mean
Problem
Diberikan sebuah function cariMean(arr) yang menerima sebuah array angka.
Function akan me-return mean dari array atau deret angka tersebut.
Mean adalah angka rata-rata dari deret bilangan tersebut.
Contoh, mean atau rata-rata dari [1, 2, 3, 4, 5] adalah 3.
Kita perlu kemudian melakukan pembulatan angka dari hasil mean yang didapatkan.

Code
*/
//1.0 sebuah fungsi dengan parameter array angka
    //1.1 inisialisasi variable kosong sama dengan nol untuk penampung
//2.0 buat perulangan untuk menbaca dan mengambil angka parameter array
    //2.1 membaca angka dari kiri ke kanan dengan pengulangan index x sepangjng array
    //2.2 setelah mendapatkan angka lalu masukan angka ke variable penampung
//3.0 mnehitung rata-rata dari angka-angka tersebut
    //3.1 angka divariable penampung dibagi panjang index array
    //3.2 dan return dengan pembulatan

//code disini
function cariMean(arr) {
  var tampung=0;
  for(var x=0; x<arr.length;x++){
    tampung += Number(arr[x]);
  }
  return Math.round(tampung/arr.length);
}

// TEST CASES
console.log(cariMean([1, 2, 3, 4, 5])); // 3
console.log(cariMean([3, 5, 7, 5, 3])); // 5
console.log(cariMean([6, 5, 4, 7, 3])); // 5
console.log(cariMean([1, 3, 3])); // 2
console.log(cariMean([7, 7, 7, 7, 7])); // 7
