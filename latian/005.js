// function akan mereturn nilai rata-rata / mean dalam array!
// note: lakukan pembulatan pada angka mean
function findMean(numbers) {
  var panjang = 0;
  for (var x = 0; x < numbers.length; x++) {
    panjang += numbers[x];
  }
  return Math.round(panjang / numbers.length);
}

console.log(findMean([9, 6, 5, 3, 1, 2, 3]));
