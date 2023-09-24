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
  option.value = allGlazing.length - 1;
  selectGlaze.add(option);
}

let selectPack = document.querySelector('#packOptions');

for (let sizing of allPacks) {
  var option = document.createElement('option');
  option.text = sizing.size;
  option.value = allPacks.length - 1;
  selectPack.add(option);
}



function glazingChange(element) {
  // get value of selected glazing option
  const priceChange = element.value;
  
// add your code to do update the price ...

}

// We also need to add this new car to the UI. To do that, create a new
// 'option' HTML element, set its attributes, and add it to the select
// element.
var option = document.createElement('option');
option.text = newCar.model;
option.value = allCars.length - 1; // Its value should be the index of the last element in allCars
selectElement.add(option);
