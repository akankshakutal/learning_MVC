let index = 0;
const startGame = function(pokemonName, letters, letterCount, document) {
  initailizeGame(pokemonName, letters, letterCount, document);
};

const showStatus = function(pokemonName, letterCount, document) {
  let { guess, showResult } = view(letterCount, document);
  let result = validate(pokemonName, guess);
  showResult(result);
};

const setLetter = function() {
  let letter = event.target.innerText;
  document.getElementById(index).value = letter;
  index++;
};

window.onload = function() {
  let { pokemonName, letters, letterCount } = getData();
  let startButton = document.getElementById("start");
  startButton.onclick = () =>
    startGame(pokemonName, letters, letterCount, document);
  let buttons = document.getElementById("letters");
  buttons.onclick = setLetter;
  let submitButton = document.getElementById("submit");
  submitButton.onclick = () => showStatus(pokemonName, letterCount, document);
};
