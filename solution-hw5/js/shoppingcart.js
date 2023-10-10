const cartSet = new Set();

class Roll {
    constructor(rollType, rollGlazing, packSize, rollPrice) {
        this.type = rollType;
        this.glazing = rollGlazing;
        this.size = packSize;
        this.basePrice = rollPrice;
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
rollGlazing = "Sugar milk";
packSize = "1";
rollPrice = rolls[rollType].basePrice;
const rollOne = addNewRoll(rollType, rollGlazing, packSize, rollPrice);

rollType = "Walnut"
rollGlazing = "Vanilla milk";
packSize = "12";
rollPrice = rolls[rollType].basePrice;
const rollTwo = addNewRoll(rollType, rollGlazing, packSize, rollPrice);

rollType = "Raisin"
rollGlazing = "Sugar milk";
packSize = "3";
rollPrice = rolls[rollType].basePrice;
const rollThree = addNewRoll(rollType, rollGlazing, packSize, rollPrice);

rollType = "Apple"
rollGlazing = "Keep original";
packSize = "3";
rollPrice = rolls[rollType].basePrice;
const rollFour = addNewRoll(rollType, rollGlazing, packSize, rollPrice);

let cartPrice = 0.;

for (const roll of cartSet) {
    createElement(roll);
}
console.log("cart",cartSet);

function displayTotal(cartPrice){
    if (cartSet.size == 0) {
        cartPrice = 0.;
    }
    const priceElement = document.querySelector('.cart-total-price');
    priceElement.innerText = "$ " + cartPrice.toFixed(2);
}

function createElement(roll) {
    const template = document.querySelector('#roll-template');
    const clone = template.content.cloneNode(true);
    roll.element = clone.querySelector('.cart-content');

    const btnDelete = roll.element.querySelector('.remove-btn');
    btnDelete.addEventListener('click', () => {
        deleteRoll(roll);
    });

    const cartElement = document.querySelector('.cart');
    cartElement.append(roll.element);
    updateElement(roll);
}

function updateElement(roll) {
  const rollImageElement = roll.element.querySelector('.product-cart-image');
	const rollDetailElement = roll.element.querySelector('.cart-details');
	const rollPriceElement = roll.element.querySelector('.cart-price');

  rollImageElement.src = 'assets/products/' + rolls[roll.type].imageFile;
  rollDetailElement.innerText = roll.type + " Cinnamon Roll\nGlazing: " 
    + roll.glazing + "\nPack Size: " + roll.size;
  
  //Calculate item price
  itemPrice = itemPriceCalc(roll);
  //Update total cart price
  cartPrice += itemPrice;
  //Update DOM elements
  rollPriceElement.innerText = "$ " + itemPrice.toFixed(2);
  displayTotal(cartPrice);
}

function deleteRoll(roll) {
    roll.element.remove();
    cartSet.delete(roll);

    //Calculate item price
    let itemPrice = itemPriceCalc(roll)
    //Update total cart price
    cartPrice -= itemPrice;
    //Update DOM elements
    displayTotal(cartPrice);

    console.log("delete",cartSet)
}


// Price calculation for cart
function getGlazingPrice (rollGlazing) {
  for (glazing of allGlazing){
    if (glazing.glaze == rollGlazing) {
      glazingPrice = glazing.glazePrice;
      return glazingPrice;
    }
  }
  console.log(glazingPrice);
}

function getPackPrice (packSize) {
  for (pack of allPacks){
    if (pack.size == packSize) {
      packPrice = pack.sizePrice;
      return packPrice
    }
  }
}

function itemPriceCalc(roll) {
  let glazingPrice = getGlazingPrice (roll.glazing);
  let packPrice = getPackPrice(roll.size);
  let itemPrice = (roll.basePrice + glazingPrice) * packPrice;
  return itemPrice;
}