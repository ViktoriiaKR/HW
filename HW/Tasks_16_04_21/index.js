// Task 1: "YOUR ORDER, PLEASE"

const inputString = "is2 This1 fina5l t4est 3a"; // condition

const regex = /\d+/g; // means "one or more digits";
const newArr = [];

function sortString(str) {
  let outputString = "";
  
  if (str !== '') {
    let strToArr = str.split(" ");

    for (let el of strToArr) {
      newArr[Number(el.match(regex)[0])] = el
    };

    outputString = newArr.join(" ").trim();
    return outputString;
  }
  return outputString;
};

const decision = sortString(inputString);
console.log(decision, 'decision');


// Task 3: "FIND A CHAIR";

const meetingRooms = [['XXX', 3], ['XXXXX', 6], ['XXXXXX', 9], ['XXX', 2]]; // condition
const necessaryChairs = 4; // condition

const freeChairs = [];

function findChair(rooms) {
  let calc = 0;
  for (let el of rooms) {
    let difference = 0;
    let occupants = el[0].length;
    let totalChairsInRoom = el[1];
    difference = totalChairsInRoom - occupants;
    if (difference >= 0) {
      calc += difference;
      freeChairs.push(difference)
    } else {
      freeChairs.push('')
    };
    if (calc >= necessaryChairs) {
      break;
    };
  };
  return freeChairs;
};

let resultSearch = findChair(meetingRooms, necessaryChairs);
console.log(resultSearch, 'searching result');