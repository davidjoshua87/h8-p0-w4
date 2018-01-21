/*Logic Challenge - Ubah Huruf
Problem
Diberikan function ubahHuruf(kata) yang akan menerima satu parameter berupa string.
Functiona akan me-return sebuah kata baru dimana setiap huruf akan digantikan dengan huruf alfabet setelahnya.
Contoh, huruf a akan menjadi b, c akan menjadi d, k menjadi l, dan z menjadi a.

Code
*/
//1.0 inisialisasi
  //1.1 buat variable kamus huruf bentuk string dari a-z
  //1.2 lalu isi variable kamus huruf di pisahkan satu-satu huruf dan masukkan ke variable kamusHurufArr
  //1.3 buat variable tampung kataBaru bentuk string
//2.0 buat pengulangan untuk pengecekan dan membaca dari kiri ke kanan parameter kata sepanjng kata tersebut
  //2.1 buat pengulangan lagi untuk membaca kamus huruf array dari kiri ke kanan sepanjang array
    //2.1.0 jika ditemukan huruf di index kata sama dengan huruf di kamus array maka
      //2.1.2 jika ditemukan huruf kamus array sama dengan z maka
      // kata baru di ganti huruf a
      //2.1.3 jika tidak ditemukan kesamaan di atas
      // maka kata bari ditambahkan huruf berikutnya
//3.0 return kata baru

//code disini
function ubahHuruf(kata) {
  var kamusHuruf = 'abcdefghijklmnopqrstuvwxyz';
  var kamusHurufArr = (kamusHuruf.split(''));
  // console.log(kamusHurufArr);
  var kataBaru = '';
  for (var x = 0; x < kata.length; x++) {
    for (var i = 0; i < kamusHurufArr.length; i++) {
      if (kata[x] === kamusHurufArr[i]) {
        if (kamusHurufArr[i] === 'z') {
          kataBaru += 'a';
        } else {
          kataBaru += kamusHurufArr[i + 1];
        }
      }
    }
  }
  return kataBaru;
}

// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu
