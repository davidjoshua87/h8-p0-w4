/*
==================================
Array Mastery: Separate Them
==================================

Nama:________

[INSTRUKSI]
Setiap student di HACKTIV8 memiliki tim project dengan komposisi satu tim berdua.

Function separateThem akan menerima satu parameter berupa array yang berisi string pasangan nama student dengan format 'NAMA_STUDENT_1 dan NAMA_STUDENT_2'.
Function ini akan memecah setiap kelompok menjadi per orang satu per satu.
[CONTOH]
input: ['Budi dan Badu', 'Indra dan Indri']
input: ['Budi', 'Badu', 'Indra', 'Indri']

input: ['Budi dan Badu', 'Indra dan Indri', 'James dan Rodhie']
input: ['Budi', 'Badu', 'Indra', 'Indri', 'James', 'Rodhie']

input: []
output: []

[RULE]
- Wajib menuliskan pseudocode. Tidak ada pseudocode / pseudocode tidak match dengan kode maka indikasi soal tidak diselesaikan secara pribadi dan tidak akan dinilai.
- Dilarang menggunakan Regex (.match, .test, dan sebagainya)
- Silakan menggunakan built-in method array apapun kecuali .map, .filter, dan .reduce!
*/
//1. inisialiasi
    //1.1 variable tampung array kosong;
//2 buat pengulanga pengecekan nama students dari kiri ke kanan
    //2.1 apabila terdapat nama berpasangan dari nama awal dan berikutnya dipisahkan dengan string dan
    //maka nama pasangan students awal dan berikutnya di pisahkan  dan tampung di arraybaru kosong
    //2.2 inisialiasi arraybaru dan dilakukan pengulangan kembali untuk proses seperti proses sebelumnya
    //dan masukakn hasil pengecekan ke arrayterbaru
//3. return arrayterbaru


function separateThem(students) {
  // Code here
  var finalArr = [];
  for (var x = 0; x < students.length; x++) {
    var newArr = (students[x].split(' dan '));
    for (var i = 0; i < newArr.length; i++) {
      finalArr.push(newArr[i]);
    }
  }
  return finalArr;
}
  // TEST CASES
  console.log(separateThem(['Budi dan Badu'])); // ['Budi', 'Badu']
  console.log(separateThem(['Budi dan Michael'])); // ['Budi', 'Michael']
  console.log(separateThem(['Budi dan Badu', 'Indra dan Indri'])); // ['Budi', 'Badu', 'Indra', 'Indri']
  console.log(separateThem(['Budi dan Badu', 'Indra dan Indri', 'James dan Rodhes'])); // ['Budi', 'Badu', 'Indra', 'Indri', 'James', 'Rhodes']
  console.log(separateThem([])); // []
