// "SUM OF MINIMUMS";

let items = [
  [1, 2],
  [4, 3],
  [5, 6]
];

function minSum(items) {
  let sum = 0;

  for (let i = 0; i < items.length; i++) {
    sum += Math.min(...items[i])
  };

  return sum;
};

let resultMinSum = minSum(items);

console.log(resultMinSum, 'sum of minimums');

// Task 2: "TWO OLDEST AGES"

const SomeArray = [3, 16, 4, 20, 5];

function oldestAge(array) {
    
  let sortArr = array.sort((a, b) => b - a);
  let sliceArr = sortArr.slice(0, 2);
  let reverseArr = sliceArr.reverse();
 
  return reverseArr;
};

let resOldAge = oldestAge(SomeArray);

console.log(resOldAge, 'two oldest ages');

// Task 3: "SHORTEST WORD"

const SomeString = "Lorem Ipsum is simply dummy text of the printing and typesetting industry";

function shortestWord(string) {
 
  let splitStr = string.split(' ');
  let thatWord = splitStr.reduce((longestWord, currentWord) => currentWord.length < longestWord.length ? currentWord : longestWord);
  let thatWordLength = thatWord.length;
 
  return thatWordLength;
};

let resShortStr = shortestWord(SomeString);

console.log(resShortStr, 'shortest word lenght');