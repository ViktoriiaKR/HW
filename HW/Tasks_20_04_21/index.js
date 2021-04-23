// Task 1: "Quipu Calculator"

const mathSymbols = {
  '@': '1',
  '@@': '2',
  '@@@': '3',
  '@@@@': '4',
  '@@@@@': '5',
  '@@@@@@': '6',
  '@@@@@@@': '7',
  '@@@@@@@@': '8',
  '@@@@@@@@@': '9',
  '~~': '0',
  '~': ' ',
  '+': '+',
  '-': '-',
  '/': '/',
  '*': '*'
};
  
function calcQuipu(expression) {
  let arrExpr = expression.split(' ');
  let newArr = [];
  for (let el of arrExpr) {
    newArr.push(mathSymbols[el]);
  };
  let filtered = newArr.filter(function(i){ return i !== ' '}).join('');
  return eval(filtered);
};
  
const resExpression = calcQuipu("@ ~ @@ * @@ ~ @");
console.log(resExpression, 'resExpression');


// Task 3: "Vasya - Clerk"

// const cashboxClerk = [25, 25, 50, 50, 100];
// const priceTicket = 25;

// function calculateSales(cashbox) {
//   let result;
//   if (cashbox[cashbox.length - 1] == priceTicket) {
//     result = 'YES';
//   } else {
//     let restOfMoney = cashbox[cashbox.length - 1] - priceTicket; // сколько нужно сдачи

//     cashbox.pop();

//     let sum = 0;
//     for (let i = 0; i < cashbox.length; i++) {
//       sum += cashbox[i]
//     };
//     if (restOfMoney <= sum) {
//       result = 'YES';
//     } else {
//       result = 'NO';
//     }

//     console.log(sum, 'sum')
//   };

//   return result;
// };

// const resSales = calculateSales(cashboxClerk);

// console.log(resSales, 'resSales');