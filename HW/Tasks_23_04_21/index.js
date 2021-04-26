//Tasks: "TWO FIGHTERS, ONE WINNER"

function Fighter(name, health, damagePerAttack) {
    this.name = name;
    this.health = health;
    this.damagePerAttack = damagePerAttack;
};
 
const firstAttacker = "Lew";
const allPlayers = [];
allPlayers.push(new Fighter("Lew", 10, 2), new Fighter("Harry", 5, 4));
 
function declareWinner(firstAttacker, allPlayers) {
   let firstHealth = allPlayers[0].health;
   let secondHealth = allPlayers[1].health;
   let nameWinner;
   
   let max = allPlayers.reduce((acc, curr) => acc.health > curr.health ? acc : curr);
   
    for (let i = 0; i <= max.health; i++) {
      if (i % 2 == 1) {
        secondHealth = secondHealth - allPlayers[1].damagePerAttack;
          if (secondHealth <= 0) {
            nameWinner = allPlayers[0].name
            break;
          };
        } else if (i % 2 == 0) {
            firstHealth = firstHealth - allPlayers[0].damagePerAttack;
            if (firstHealth <= 0) {
              nameWinner = allPlayers[1].name
              break;
            };
        };
    }; 
   return nameWinner;
 };
 
const resultGame = declareWinner(firstAttacker, allPlayers);
console.log(resultGame, 'resultGame');