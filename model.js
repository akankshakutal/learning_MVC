const getPokemonNames = function() {
  return ["pikachu", "meowth", "bulbasaur", "togepi"];
};

const getRandomPokemon = function(pokemonNames) {
  return pokemonNames[Math.floor(Math.random() * 4)];
};

const countLetters = function(name) {
  return name.length;
};

const validate = function(expected, actual) {
  return actual.toLowerCase() === expected;
};

const getData = function() {
  let pokemonNames = getPokemonNames();
  let pokemonName = getRandomPokemon(pokemonNames);
  let letterCount = countLetters(pokemonName);
  let letters = permutateString(pokemonName);
  return { pokemonName, letters, letterCount };
};

const permutateString = function(name) {
  let letters = name.split("");
  return shuffler(letters);
};
