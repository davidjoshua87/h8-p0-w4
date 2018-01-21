// function akan mereturn nilai minimum kedua dalam array!
// membaca dari kiri ke kanan
// membuat looping untuk mencari nilai min


/*function findSecondMin(numbers) {
  for (var i = 0; i < numbers.length; i++) {
    for (var j = i; j < numbers.length; j++) {
      if (numbers[i] > numbers[j]) {
        var tampung = numbers[i];
        numbers[i] = numbers[j];
        numbers[j] = tampung;
      }
    }
  }
  //console.log(numbers);
  return numbers [1];
}

console.log(findSecondMin([9, 6, 5, 3, 1, 2, 3]));



function findSecondMax(numbers) {
  for (var i = 0; i < numbers.length; i++) {
    for (var j = i; j < numbers.length; j++) {
      if (numbers[i] < numbers[j]) {
        var tampung = numbers[i];
        numbers[i] = numbers[j];
        numbers[j] = tampung;
      }
    }
  }
  //console.log(numbers);
  return numbers [1];
  }

console.log(findSecondMax([9, 6, 5, 3, 1, 2, 3]));


function findSecondMin(numbers) {
  var min = numbers[0];
  for (var i = 1; i < numbers.length; i++) {
    if (numbers[i] < min) {
      min = numbers[i];
    }
  }
  var notMin = [];
  for (var j = 0; j < numbers.length; j++) {
    if (numbers[j] > min) {
      notMin.push(numbers[j]);
    }
  }
  var hasil = notMin[0];
  for (var z = 0; z < notMin.length; z++) {
    if (notMin[z] < hasil) {
      hasil = notMin[z];
    }
  }
  return hasil;
}

console.log(findSecondMin([9, 6, 5, 3, 1, 2, 3]));


function findSecondMax(numbers) {
  var max = numbers[0];
  for (var i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }
  var notMax = [];
  for (var j = 0; j < numbers.length; j++) {
    if (numbers[j] < max) {
      notMax.push(numbers[j]);
    }
  }
  var hasil = notMax[0];
  for (var z = 0; z < notMax.length; z++) {
    if (notMax[z] > hasil) {
      hasil = notMax[z];
    }
  }
  return hasil;
}

console.log(findSecondMax([9, 6, 5, 3, 1, 2, 3]));*/


function findSecondMin(numbers) {
  var min = numbers[0];
  var notMin = [];
  for (var i = 1; i < numbers.length; i++) {
    for (var j = 0; j < numbers.length; j++) {
      if (numbers[i] < min) {
        min = numbers[i];
      }
      if (numbers[j] > min) {
        notMin.push(numbers[j]);
      }
    }
  }
  var hasil = notMin[0];
  for (var z = 0; z < notMin.length; z++) {
    if (notMin[z] < hasil) {
      hasil = notMin[z];
    }
  }
  return hasil;
}

console.log(findSecondMin([9, 6, 5, 3, 1, 2, 3]));

function findSecondMax(numbers) {
  var max = numbers[0];
  var notMax = [];
  for (var i = 1; i < numbers.length; i++) {
    for (var j = 0; j < numbers.length; j++) {
      if (numbers[i] > max) {
        max = numbers[i];
      }
      if (numbers[j] < max) {
        notMax.push(numbers[j]);
      }
    }
  }
  var hasil = notMax[0];
  for (var z = 0; z < notMax.length; z++) {
    if (notMax[z] > hasil) {
      hasil = notMax[z];
    }
  }
  return hasil;
}

console.log(findSecondMax([9, 6, 5, 3, 1, 2, 3]));
