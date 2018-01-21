// tampilkan di log 1 per 1 isi array yang merupakan angka ganjil
function iterateOdds(numbers) {
  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 1) {
      console.log(numbers[i]);
    }
  }
}

iterateOdds([1, 2, 3, 4, 5, 6, 7, 8, 9]);
