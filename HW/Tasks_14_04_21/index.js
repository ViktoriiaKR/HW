// Task "REPAIRS"

const tinOfPaint = 16; // m2 / one tin of paints
const valLength = 10; // input length room
const valWidth = 3; // input width room
const valHeight = 2.5; //input height room 

function calcColor(paint, length, width, height) {
  
  let LsW = (length * 2) + (width * 2);
  let S = height * LsW;
  let result = Math.floor(S / paint);

  return result
};

let totalAmount = calcColor(tinOfPaint, valLength, valWidth, valHeight);

console.log(totalAmount, 'totalAmount');

// GOLDEN SAND

// ! all numbers no more than 100

const a1 = 60; // kg / ruble
const a2 = 90; // kg / ruble
const a3 = 30; // kg / ruble

const b1 = 80; // kg / capacity
const b2 = 75; // kg / capacity
const b3 = 30; // kg / capacity

function checkBenefit() {
  let a = [];
  let b = [];
  let benefit = 0;
  a.push(a1, a2, a3);
  b.push(b1, b2, b3);
  a.sort((a, b) => a - b);
  b.sort((a, b) => a - b);

  console.log("Check array", a, b);

  for (let i = 0; i < 3; i++) {
    benefit += a[i] * b[i];
  };

  console.log("Benefit:", benefit);
}

checkBenefit();


// Task "HAPPY TICKET"

const ticketNumber = '111111'; // ticket number must be 6 digits
let result;

function handleHappyTicket(value) {
  let a = value.substring(0, value.length - 3);
  let b = value.substring(value.length - 3);
 
  let arrA = a.split('');
  let arrB = b.split('');
  
  let arrAtoNumber = arrA.map(i => Number(i));
  let arrBtoNumber = arrB.map(i => Number(i));
  
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  
  let resA = arrAtoNumber.reduce(reducer);
  let resB = arrBtoNumber.reduce(reducer);
  
  if (resA == resB) {
    result = 'YES'
  } else {
    result = "NO"
  };
  
  return result;
};

let resOfHappiness = handleHappyTicket(ticketNumber);

console.log(resOfHappiness, 'resOfHappiness'); 