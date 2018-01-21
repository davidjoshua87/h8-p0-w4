/*
Logic Challenge - Hitung Huruf
Problem
Diberikan function hitungHuruf(kalimat) yang akan menerima satu parameter berupa string.
Function akan me-return kata dari kalimat yang memiliki jumlah perulangan huruf yang paling besar.
Contoh: "Today, is the greatest day ever!" akan me-return "greatest" karena kata "greatest" memiliki 2 huruf e dan 2 huruf t, dan muncul lebih dulu.
Jika tidak ditemukan kalimat dengan kata yang memiliki huruf berulang, return -1.

Code
*/
//input = ('Today, is the greatest day ever')
//output = greatest
//1.0 sebuah fungsi hitungHuruf dengan parameter string kalimat
  // akan menghtung jumlah perulangan huruf yang paling besar
  // jika tidak ditemukan maka return -1
//2.0 inisialisasi
  //2.1 memisahkan string kalimat dengan split spasi pada variable baru splitKalimat
  //2.2 memasukan kembali hasil pemisahan ke dalam dengan slice ke variable baru sliceKalimat
  //2.3 membuat variable baru untuk menampung kata sama bentuk string kosong tampungKata
  //2.4 membuat variable baru untuk huruf yang sama sama bentuk array kosong hurufSama
//3.0 mencari huruf yang sama
  //3.1 buat perulangan untuk mengurutkan kata sliceKalimat
  //3.2 buat perulangan untuk mencari huruf yang sama dalam kata kalimat
  //3.3 menampung huruf yang sama divariable array hurufSama
//4.0 memisahkan huruf sama
  //4.1 buat perulangan untuk mengecek huruf sama pada array hurufSama
  //4.2 buat perulangan untuk mensortir huruf sama pada array hurufSama
  //4.3 menampung huruf sama sortir pada array sortirHuruf
//5.0 menghitung huruf sama
  //5.1 buat perulangan untuk menghitung panjang huruf sama dan tampung pada variable hitungHurufSama
//6.0 mengurutkan hasil hitung huruf yang sama
  //6.1 mengurutkan hasil hitung huruf yang sama dan ditampung ke varibale urutAngka
//7.0 membandingkan posisiIndex terbanyak
  //7.1 jika hasil posisiIndex lebih dari nol maka
    //7.1.1 mencari posisi index terbanyak dari hitung huruf yang sama
    //7.1.2 buat perulangan untuk mencari posisi index dengan nilai tertinggi dari hitung huruf yang sama
    //7.1.3 hasilnya tampung ke variable posisiIndex
  //7.2 jika nilai posisiIndex kurang dari nol maka
    // return-1
//8.0 return sliceKalimat dengan posisiIndex tertinggi

//code disini
function hitungHuruf(kalimat) {
  var sliceKalimat = kalimat.split(' ').slice();
  // console.log(sliceKalimat);
  var tampungKata = '';
  var hurufSama = [];

  // Mencari Huruf yang sama;
  for (var i = 0; i < sliceKalimat.length; i++) {
    tampungKata = sliceKalimat[i];
    // console.log(tampungKata);
    var counter = 0;
    var tampungHuruf = [];
    for (var j = 0; j < tampungKata.length; j++) {
      for (var k = tampungKata.length - 1; k > 0; k--) {
        if (j !== k) {
          if (tampungKata[j] === tampungKata[k]) {
            tampungHuruf.push(tampungKata[j]);
          }
        }
      }
      // console.log('==== '+tampungHuruf);
      hurufSama[i] = tampungHuruf;
    }
  }
  // console.log('***' + hurufSama);

  // Memisahkan huruf yang sama;
  var misahHurufSama = [];
  var sortirHuruf = [];
  for (var p = 0; p < hurufSama.length; p++) {
    misahHurufSama = hurufSama[p];
    for (var q = 0; q < misahHurufSama.length; q++) {
      for (var r = misahHurufSama.length - 1; r > 0; r--) {
        if (q !== r) {
          if (misahHurufSama[q] === misahHurufSama[r]) {
            misahHurufSama.pop();
          }
        }
      }
      // console.log('0000 '+misahHurufSama);
    }
    sortirHuruf[p] = misahHurufSama;
  }
  // console.log('1111 '+ sortirHuruf);

  // Menghitung Huruf yang sama;
  var hitungHurufSama = [];
  for (var s = 0; s < sortirHuruf.length; s++) {
    hitungHurufSama[s] = sortirHuruf[s].length;
  }
  // console.log('xxx '+ hitungHurufSama);

  // Mengurutkan hasil hitung huruf yang sama;
  var urutAngka = hitungHurufSama.slice();
  urutAngka.sort(function(a, b) {
    return b - a;
  });
  // console.log('---------');        console.log(sliceKalimat); console.log(hitungHurufSama);
  // console.log('>>> '+urutAngka);

  // Mencari posisi index terbanyak hasil hitung huruf yang sama;
  var posisiIndex = urutAngka[0];
  if (posisiIndex > 0){
    for (var t = 0; t < urutAngka.length; t++) {
      if (posisiIndex === hitungHurufSama[t]) {
        posisiIndex = t;
        break;
      }
    }
  }else {
    return -1;
  }
  // console.log('<<< '+posisiIndex);
  return sliceKalimat[posisiIndex];
}


// TEST CASES
console.log(hitungHuruf('Today, is the greatest day ever')); // greatest
console.log(hitungHuruf('I am a passionate developer')); // passionate
console.log(hitungHuruf('aku adalah anak gembala')); // adalah
console.log(hitungHuruf('rajin pangkal kaya')); // pangkal
console.log(hitungHuruf('mengayuh perahu di danau')); // danau
console.log(hitungHuruf('mengayuh perahu di laut')); // -1
