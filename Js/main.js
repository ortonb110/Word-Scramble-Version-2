const wordText = document.querySelector(".word");
const hint = document.querySelector(".hint span");

const newWord = () => {
  let shuffledWord, correctWord;
  const currentWordArray = words[Math.floor(Math.random() * words.length)];
  correctWord = currentWordArray.word.split("");
  for (let i = correctWord.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [correctWord[i], correctWord[j]] = [correctWord[j], correctWord[i]]
  }

  wordText.textContent = correctWord.join("");
  hint.textContent = currentWordArray.hint
};

newWord();
