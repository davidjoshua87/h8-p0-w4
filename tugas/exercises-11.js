/*
Logic Challenge - Ubah Kapital
Problem
Diberikan function ubahKapital(kalimat) yang menerima satu parameter berupa string.
Function akan me-return nilai berupa kalimat dimana setiap kata dimulai dengan huruf besar.
Contoh, jika input adalah "saya makan sushi", maka output adalah "Saya Makan Sushi".

Code
*/
//1.0 inisialisasi
  //1.1 pisahkan kata kalimt dengan spasi dan masukan ke variable splitKalimat
  //1.2 buat variable penampung kalimatBaru bentuk string
//2.0 membaca kata kalimat yang sudah dipisahkn dengan buat pengulangan
  //2.1 mengecek huruf pertama di dalam kata kalimat
    //2.1.1 jika huruf pertama pada kata kalimat  ditemukan maka
      // kalimat baru di tambahkan kata dari kalimat dengan huruf pertamanya diganti kapital
    //2.1.2 jika huruf selanjutny selain huruf pertama pada kata kalimat di temukan maka
      // kalimat baru ditambahkn kata dari kalimat dengan huruf kecil
//3.0 return kalimat baru dengan memotong spasi diawal dan akhir

//code disini
function ubahKapital(kalimat) {
  var splitKalimat = kalimat.split(' ');
  var kalimatBaru ='';
  for (var x = 0; x < splitKalimat.length; x++) {
    for (var i = 0; i < splitKalimat[x].length; i++) {
      if (i === 0) {
        kalimatBaru += splitKalimat[x][i].toUpperCase();
      } else if (i !== 0) {
        kalimatBaru += splitKalimat[x][i].toLowerCase();
      }
    }
    kalimatBaru += ' ';
  }
  return kalimatBaru.trim();
}

// TEST CASES
console.log(ubahKapital('saya makan sushi')); // Saya Makan Sushi
console.log(ubahKapital('programming adalah hobi saya')); // Programming Adalah Hobi Saya
console.log(ubahKapital('menjadi developer adalah cita-cita saya')); // Menjadi Developer Adalah Cita-cita Saya
console.log(ubahKapital('i have a dream')); // I Have A Dream
console.log(ubahKapital('coding is fun')); // Coding Is Fun
