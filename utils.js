const deleteElement = function(array, index) {
  return array.slice(0, index).concat(array.slice(index + 1));
};

const shuffler = function(array) {
  let shuffledArray = [];
  while (array.length != 0) {
    let randomNum = Math.floor(Math.random() * array.length);
    shuffledArray.push(array[randomNum]);
    array = deleteElement(array, randomNum);
  }
  return shuffledArray;
};
