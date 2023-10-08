// object arrays
let allGlazing = [
  {
    glaze: 'Keep original',
    glazePrice: 0, 
  },
  {
    glaze: 'Sugar milk',
    glazePrice: 0,
  },
  {
    glaze: 'Vanilla milk',
    glazePrice: 0.5,
  },
  {
    glaze: 'Double chocolate',
    glazePrice: 1.5,
  },
];

let allPacks = [
  {
    size: '1',
    sizePrice: 1, 
  },
  {
    size: '3',
    sizePrice: 3,
  },
  {
    size: '6',
    sizePrice: 5,
  },
  {
    size: '12',
    sizePrice: 10,
  },
];

let cart = [

];

// Shopping cart implementation
class Roll {
  constructor(rollType, rollGlazing, packSize, basePrice) {
      this.type = rollType;
      this.glazing = rollGlazing;
      this.size = packSize;
      this.basePrice = basePrice;
  }
}

function addCart() {
  let addRoll = new Roll(rollType, rollGlazing, packSize, basePrice);
  cart.push(addRoll);
  console.log(cart);
}

// URL params
const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const rollType = params.get('roll');

console.log(rollType);

const headerElement = document.querySelector('.title');
headerElement.innerText = rollType + ' cinnamon roll';

const rollImage = document.querySelector('.product-detail-image');
rollImage.src = 'assets/products/' + rolls[rollType].imageFile;
rollImage.alt = "image of "+ rollType +" cinnamon roll";

// dropdowns
let selectGlaze = document.querySelector('#glazingOptions');

for (let glazing of allGlazing) {
  var option = document.createElement('option');
  option.text = glazing.glaze;
  option.value = glazing.glazePrice;
  selectGlaze.add(option);
}

let selectPack = document.querySelector('#packOptions');

for (let sizing of allPacks) {
  var option = document.createElement('option');
  option.text = sizing.size;
  option.value = sizing.sizePrice;
  selectPack.add(option);
}


// Price calculations
const basePrice = rolls[rollType].basePrice;
let glazingPrice = 0;
let packPrice = 1;
let rollGlazing = allGlazing[0].glaze;
let packSize = allPacks[0].size;

function glazingChange(element) {
  // get value of selected glazing option
  let priceChange = element.value;
  rollGlazing = element.options[element.selectedIndex].text;
  // add your code to do update the price ...
  glazingPrice = parseFloat(priceChange);
  priceCalculation(basePrice, glazingPrice, packPrice);
}

function packChange(element) {
  let priceChange = element.value;
  packSize = element.options[element.selectedIndex].text;
  packPrice = parseInt(priceChange);
  console.log(packPrice);
  priceCalculation(basePrice, glazingPrice, packPrice);
}

function priceCalculation(basePrice, glazingPrice, packPrice) {
  let totalPrice = 0;
  totalPrice = (basePrice + glazingPrice) * packPrice;
  totalPrice = totalPrice.toFixed(2);
  let currentPrice = document.querySelector('.priceUpdate');
  currentPrice.innerText = "$ " + totalPrice.toString();
}

priceUpdate = priceCalculation(basePrice, glazingPrice, packPrice);

