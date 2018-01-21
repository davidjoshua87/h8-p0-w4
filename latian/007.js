// gabungkan dua kata dengan pola dimana setiap huruf
// di kata kedua 1 per 1 diimbuhkan ke kata pertama dari depan dan belakang
// secara bergantian

function mergeFrontBack(firstWord, secondWord) {
  for (var i = 0; i < secondWord.length; i++) {
    if (i % 2 === 0) {
      firstWord = secondWord[i] + firstWord;
    } else {
      firstWord = firstWord + secondWord[i];
    }
  }
  return firstWord;
}

console.log(mergeFrontBack('michael', 'saber')); // rbsmichaelae
