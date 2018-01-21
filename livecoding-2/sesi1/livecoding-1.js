/*
==================================
Array Mastery: Love Me Not
==================================

Nama:________

[INSTRUKSI]
Seorang perempuan sedang menggalaui apakah seseorang menyukai dia atau tidak. Ketimbang mencabut kelopak bunga untuk menghitung jika dia suka atau tidak, perempuan tersebut membuat sebuah program.

Function loveMeNot akan menerima satu parameter berupa array yang berisikan boolean.
Apabila jumlah true dalam array lebih besar dari jumlah false, maka function akan mereturn "HE LOVES ME!". Jika tidak, maka return "HE DOES NOT LOVE ME :(".
Jika jumlah true dan false sama, maka function akan me-return "GALAU".
Mudah bukan? :)

[RULE]
- Wajib menuliskan pseudocode. Tidak ada pseudocode / pseudocode tidak match dengan kode maka indikasi soal tidak diselesaikan secara pribadi dan tidak akan dinilai.
- Dilarang menggunakan Regex (.match, .test, dan sebagainya)
- Dilarang menggunakan method .filter, atau .reduce!
*/

//code disini
function loveMeNot(decisions) {
  var counterTrue = 0;
  var counterFalse = 0;
  for (var i = 0; i < decisions.length; i++) {
    if (decisions[i] === true) {
      counterTrue += 1;
    }
    if (decisions[i] === false) {
      counterFalse += 1;
    }
  }
  if (counterTrue > counterFalse) {
    return "HE LOVES ME!";
  }
  if (counterTrue < counterFalse) {
    return "HE DOES NOT LOVE ME :(";
  }
  if (decisions.length === 0 || counterTrue === counterFalse) {
    return "GALAU";
  }
}

// TEST CASES
console.log(loveMeNot([true, false, false])); // "HE DOES NOT LOVE ME :("
console.log(loveMeNot([true, true, false, false, true])); // "HE LOVES ME!"
console.log(loveMeNot([true, false])); // "GALAU"
console.log(loveMeNot([])); // "GALAU"
console.log(loveMeNot([false])); // "HE DOES NOT LOVE ME :("
