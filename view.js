const getPokodex = function() {
  return {
    pikachu: "https://bit.ly/2siyTVD",
    meowth: "https://bit.ly/2QnRau4",
    bulbasaur: "https://bit.ly/2t2aPXK",
    togepi: "https://bit.ly/2ACyB0k"
  };
};

const generateRange = function(size) {
  return new Array(size).fill("").map((x, index) => index);
};

const generateTextBox = function(id) {
  return `<input id = '${id}' class = 'pokemon_name' type='text' maxlength='1'>`;
};

const generateTextBoxes = function(letterCount) {
  let range = generateRange(letterCount);
  let textBoxes = range.map(id => generateTextBox(id));
  return textBoxes.join("");
};

const showPokemon = function(pokemon, document) {
  let pokodex = getPokodex();
  let board = document.getElementById("board");
  board.innerHTML = `<img src='${pokodex[pokemon]}'>`;
};

const getGuess = function(letterCount, document) {
  let range = generateRange(letterCount);
  let guess = range.map(id => document.getElementById(id).value);
  console.log(guess);

  return guess.join("");
};

const showResult = function(result) {
  let board = document.getElementById("board");
  if (result) {
    board.innerHTML = "<h1 class = 'status'>YOU WON ....!</h1>";
    return;
  }
  board.innerHTML = "<h1 class = 'status'>YOU LOSE .....!</h1>";
};

const generateButtons = function(letters) {
  let buttons = letters.map(
    letter => `<button id='${letter}'class='letters'>${letter}</button>`
  );
  return buttons.join("");
};

const initailizeGame = function(pokemonName, letters, letterCount, document) {
  showPokemon(pokemonName, document);
  let pokemon = document.getElementById("pokemon_name");
  let textBoxes = generateTextBoxes(letterCount);
  let buttons = generateButtons(letters);
  pokemon.innerHTML = textBoxes;
  lettersDiv = document.getElementById("letters");
  lettersDiv.innerHTML = buttons;
};

const view = function(letterCount, document) {
  let guess = getGuess(letterCount, document);
  return { guess, showResult };
};
