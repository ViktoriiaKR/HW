//Task: "TWO FIGHTERS, ONE WINNER"

function Fighter(name, health, damagePerAttack) {
  this.name = name;
  this.health = health;
  this.damagePerAttack = damagePerAttack;
  this.toString = function() { 
    return this.name; 
  }
};

const firstAttacker = "Lew";
const allPlayers = [];
allPlayers.push(new Fighter("Harry", 5, 4), new Fighter("Lew", 10, 2));


function declareWinner(firstAttacker, allPlayers) {
 let indexFirstPlayer = allPlayers.findIndex(function (obj) {
  return obj.name === firstAttacker;
 });
 
 let indexSecondPlayer = indexFirstPlayer == 1 ? 0 : 1;
 
 let firstHealth = allPlayers[indexFirstPlayer].health;
 let secondHealth = allPlayers[indexSecondPlayer].health;
 
 let maxHealthForIter = allPlayers.reduce((acc, curr) => acc.health > curr.health ? acc : curr);
 
 for (let i = 0; i <= maxHealthForIter.health; i++) {
   if (i % 2 == 1) {
     firstHealth = firstHealth - allPlayers[indexSecondPlayer].damagePerAttack;
     if (firstHealth <= 0) {
       return allPlayers[indexSecondPlayer].toString();
       break;
     };
   } else if (i % 2 == 0) {
     secondHealth = secondHealth - allPlayers[indexFirstPlayer].damagePerAttack;
     if (secondHealth <= 0) {
       return allPlayers[indexFirstPlayer].toString();
       break;
     };
   };
 }; 
 return winner;
};

const winnerName = declareWinner(firstAttacker, allPlayers);
console.log(`winner is ${winnerName}`, winnerName);

// Task: "PaginationHelper"

// class PaginationHelper {
//   constructor(arrayValues, defaultPageSize) { 
//     this.arrayValues = arrayValues;
//     this.defaultPageSize = defaultPageSize;
//   };
// };

// let helper = new PaginationHelper (['a', 'b', 'c', 'd', 'e', 'f'], 4);

// itemCount = (array) => array.length;
// pageCount = (total, itemsOnPage) => Math.ceil(total / itemsOnPage);
// // pageItemCount = (defaultSize, resPageCount) => {
// //   let page;
// //   for (let i = 0; i < resPageCount; i++) {
// //     page = i * defaultSize
// //   }
// // }

// const total = itemCount(helper.arrayValues);
// console.log(`total item: ${total}`);

// const resultPageCount = pageCount(total, helper.defaultPageSize);
// console.log(`количество страниц: ${resultPageCount}`);

// // const resultPageSize = pageItemCount(helper.defaultPageSize, resultPageCount);
// // console.log(`количество элементов на странице: ${resultPageSize}`);