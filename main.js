//what to wear
function whatToWear(temp) {
    if (temp > 16) {
        console.log("You should wear a tshirt and shorts")
    }
    else if (temp < 16 > 12){
        console.log("You should wear jeans and a tshirt")
    }
    else if (temp < 12) {
        console.log("You should wear jeans and a jacket");
    }
}
whatToWear(20)

// Dice game
function rolltheDice (amountOfRolls){
    for (let i = 0; i < amountOfRolls; i++) {
        randomDiceNum1 = Math.floor(Math.random() * 6) + 1;
        console.log("You have rolled and landed on.. " + randomDiceNum1);
         if (randomDiceNum1 === 6) {
             console.log("You hit a 6, it's a jackpot")
         }
    }
}
rolltheDice(6)

// Sentiment analyzer