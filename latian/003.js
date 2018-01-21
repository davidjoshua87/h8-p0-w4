// function akan mereturn nilai maximum dalam array!
function findMax(numbers) {
  var max = numbers[0];
  for (var i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }
  return max;
}

console.log(findMax([9, 6, 5, 3, 1, 2, 3]));
