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
    size: 1,
    sizePrice: 1, 
  },
  {
    size: 3,
    sizePrice: 3,
  },
  {
    size: 6,
    sizePrice: 5,
  },
  {
    size: 12,
    sizePrice: 10,
  },
];


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

const basePrice = 2.49;
let glazingPrice = 0;
let packPrice = 1;

function glazingChange(element) {
  // get value of selected glazing option
  let priceChange = element.value;
  // add your code to do update the price ...
  glazingPrice = parseFloat(priceChange);
  console.log(glazingPrice);
  priceCalculation(basePrice, glazingPrice, packPrice);
}

function packChange(element) {
  let priceChange = element.value;
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