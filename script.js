//Forum stuff *-----------------------------------------------------------------
const display = document.getElementById('form');
//Hours for car use *-----------------------------------------------------------
const hour = document.getElementById('carTime');
//Car stuff *-------------------------------------------------------------------
const continental = document.getElementById('carOne');
const hummer = document.getElementById('caTwo');
const vintage = document.getElementById('carThree');
let isContinental = false;
let isHummer = false;
let isVintage = false;

continental.addEventListener('change', (evt)=>{
  if (continental = 'yes') {
    isContinental = true;
    let carCost = parseInt(hour.value) * 75;
    isHummer = false;
    isVintage = false;
  }
})
hummer.addEventListener('change', (evt)=>{
  if (hummer = 'yes') {
    isHummer = true;
    let carCost = parseInt(hour.value) * 100;
    isContinental = false;
    isVintage = false;
  }
})
vintage.addEventListener('change', (evt)=>{
  if (vintage = 'yes') {
    isVintage = true;
    let carCost = parseInt(hour.value) * 150;
    isHummer = false;
    isContinental = false;
  }
})
//Drink stuff *-----------------------------------------------------------------
const drink = document.getElementById('drink');
if (drink.value == 'None') {
  let drinkCost = 0;
}
else {
  let drinkCost = parseInt(drink.value) * 35;
}
//Submit stuff *----------------------------------------------------------------
document.getElementById('total').addEventListener('change', (evt)=>{
  let cost = carCost + drinkCost;
})
