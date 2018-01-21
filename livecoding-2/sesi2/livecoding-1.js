/*
=======================================
Array Mastery: Summarize Payment Types
=======================================

Nama:________

[INSTRUKSI]
Seorang kasir sedang mendata jumlah transaksi yang menggunakan Cash, Debit, atau Credit.

Function paymentSummary akan menerima satu parameter berupa array yang berisikan string, yang isinya antara 'CASH', 'DEBIT', atau 'CREDIT'.
Apabila jumlah 'CASH' dalam array lebih besar dari jumlah 'DEBIT' dan 'CREDIT', maka function akan mereturn "MOSTLY CASH".
Apabila jumlah 'DEBIT' dalam array lebih besar dari jumlah 'CASH' dan 'CREDIT', maka function akan mereturn "MOSTLY DEBIT".
Apabila jumlah 'CREDIT' dalam array lebih besar dari jumlah 'CASH' dan 'DEBIT', maka function akan mereturn "MOSTLY CREDIT".

Apabila ada jumlah yang sama dan jumlah tersebut merupakan jumlah terbesar, tampilkan "I AM NOT SURE!";

Mudah bukan? :)

[RULE]
- Wajib menuliskan pseudocode. Tidak ada pseudocode / pseudocode tidak match dengan kode maka indikasi soal tidak diselesaikan secara pribadi dan tidak akan dinilai.
- Dilarang menggunakan Regex (.match, .test, dan sebagainya)
- Dilarang menggunakan method .filter, atau .reduce!
*/
//0. ada sebuah fungsi dengan parameter berupa array berisikan string (cash, debit atau kredit)
//1. inisialisasi
    //1.1 variable hitung cash sama dengan nol
    //1.2 variable hitung debit sama dengan nol
    //1.3 variable hitung credit sama dengan nol
//2. buat perulangan untuk mengecek variable cash, debit dan kredit
    //2.1 jika paymentTypesindex i sama dengan string cash maka masukan ke variable hitung cash
    //2.2 jika paymentTypesindex i sama dengan string debit maka masukan ke variable hitung debit
    //2.3 jika paymentTypesindex i sama dengan string credit maka masukan ke variable hitung credit
//3. melakukan pengecekan dengan kondisi
    //3.1 apabila jumlah 'CASH' dalam array lebih besar dari jumlah 'DEBIT' dan 'CREDIT', maka function akan mereturn "MOSTLY CASH".
    //3.2 apabila jumlah 'DEBIT' dalam array lebih besar dari jumlah 'CASH' dan 'CREDIT', maka function akan mereturn "MOSTLY DEBIT".
    //3.3 apabila jumlah 'CREDIT' dalam array lebih besar dari jumlah 'CASH' dan 'DEBIT', maka function akan mereturn "MOSTLY CREDIT".
//4 apabila ada jumlah yang sama dan jumlah tersebut merupakan jumlah terbesar, return "I AM NOT SURE!";

function paymentSummary(paymentTypes) {
  // Code here
  var cash = 0;
  var debit = 0;
  var credit = 0;

  for (var i = 0; i < paymentTypes.length; i++) {
    if (paymentTypes[i] === 'CASH') {
      cash += 1;
    }
    if (paymentTypes[i] === 'DEBIT') {
      debit += 1;
    }
    if (paymentTypes[i] === 'CREDIT') {
      credit += 1;
    }
  }
  if (credit > cash && credit > debit) {
    return 'MOSTLY CREDIT';
  }
  if (cash > debit && cash > credit) {
    return 'MOSTLY CASH';
  }
  if (debit > cash && debit > credit) {
    return 'MOSTLY DEBIT';
  }
  else{
    return 'IM NOT SURE';
  }
}

// TEST CASES
console.log(paymentSummary(['CASH', 'CASH', 'DEBIT'])); // "MOSTLY CASH"
console.log(paymentSummary(['CREDIT', 'CASH', 'DEBIT', 'CREDIT'])); // "MOSTLY CREDIT"
console.log(paymentSummary(['DEBIT', 'DEBIT', 'DEBIT'])); // "MOSTLY DEBIT"
console.log(paymentSummary(['CASH'])); // "MOSTLY CASH"
console.log(paymentSummary([])); // "I AM NOT SURE!"
