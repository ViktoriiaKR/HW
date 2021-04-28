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

//   itemCount = () => this.arrayValues.length;
//   pageCount = () => Math.ceil(this.itemCount() / this.defaultPageSize);
//   pageItemCount(index) {
    // for (let i = 0; i < this.pageCount(); i++) {
    //   if (index < 0 || index > i) {
    //     return -1;
    //   };
    // };
  // }
//   pageItemCount = (pages, total, perPageSize) => {

//     let pag = [];
//     for(let i = 0; i < pages; i++) {
//         let pageNum = i + 1;
//         let start = (pageNum - 1) * perPageSize + 1;
//         let end = Math.min(pageNum * perPageSize, total);

//    console.log(start, end)

//     }
//   }

  // function pageIndex(index) {
  //    console.log(index)
  // }
// };

// let helper = new PaginationHelper (['a', 'b', 'c', 'd', 'e', 'f'], 4);

// console.log(helper.itemCount());
// console.log(helper.pageCount());
// console.log(helper.pageItemCount(3));
// console.log(helper.pageIndex(5))