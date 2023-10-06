const cartSet = new Set();

class Roll {
    constructor(rollType, rollGlazing, packSize, rollPrice) {
        this.type = rollType;
        this.glazing =  rollGlazing;
        this.size = packSize;
        this.basePrice = rollPrice;
        this.price = priceCalculation(rollPrice, rollGlazing, packSize)
    }
}

function addNewRoll(rollType, rollGlazing, packSize, rollPrice) {
    const roll = new Roll(rollType, rollGlazing, packSize, rollPrice);
    cartSet.add(roll);
    return roll;
}

let rollType = "";
let rollGlazing = "";
let packSize = "";
let rollPrice = "";

rollType = "Original"
rollGlazing = "Sugar Milk";
packSize ="1";
rollPrice = rolls[rollType].basePrice;
console.log("rollprice 1 " + rollType + rollPrice);
const rollOne = addNewRoll(rollType, rollGlazing, packSize, rollPrice);

rollType = "Walnut"
rollGlazing = "Vanilla Milk";
packSize ="12";
rollPrice = rolls[rollType].basePrice;
console.log("rollprice 1 " + rollType + rollPrice);
const rollTwo = addNewRoll(rollType, rollGlazing, packSize, rollPrice);

rollType = "Raisin"
rollGlazing = "Sugar Milk";
packSize ="3";
rollPrice = rolls[rollType].basePrice;
console.log("rollprice 1 " + rollType + rollPrice);
const rollThree = addNewRoll(rollType, rollGlazing, packSize, rollPrice);

rollType = "Apple"
rollGlazing = "Original";
packSize ="3";
rollPrice = rolls[rollType].basePrice;
console.log("rollprice 1 " + rollType + rollPrice);
const rollFour = addNewRoll(rollType, rollGlazing, packSize, rollPrice);

for (const roll of cartSet) {
    console.log(roll);
}
