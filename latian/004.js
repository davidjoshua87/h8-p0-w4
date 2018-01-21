// function akan mereturn nilai minimum dalam array!
function findMin(numbers) {
  var min = numbers[0];
  for (var i = 1; i < numbers.length; i++) {
    if (numbers[i] < min)
      min = numbers[i];
  }
  return min;
}

console.log(findMin([9, 6, 5, 3, 1, 2, 3]));
