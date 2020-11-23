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

if (continental !== null) {
  continental.addEventListener('change', (evt)=>{
    if (continental = 'yes') {
      isContinental = true;
      let carCost = parseInt(hour.value) * 75;
      isHummer = false;
      isVintage = false;
    }
  })
}
if (hummer !== null) {
  hummer.addEventListener('change', (evt)=>{
    if (hummer = 'yes') {
      isHummer = true;
      let carCost = parseInt(hour.value) * 100;
      isContinental = false;
      isVintage = false;
    }
  })
}
if (vintage !== null) {
  vintage.addEventListener('change', (evt)=>{
    if (vintage = 'yes') {
      isVintage = true;
      let carCost = parseInt(hour.value) * 150;
      isHummer = false;
      isContinental = false;
    }
  })
}
//Drink stuff *-----------------------------------------------------------------
const drink = document.getElementById('drink');
if (drink !== null) {
  if (drink.value == 'None') {
    let drinkCost = 0;
  }
  else {
    let drinkCost = parseInt(drink.value) * 35;
  }
}
//Cost befor tips *-------------------------------------------------------------
let cost = carCost + drinkCost;
//Tip stuff *-------------------------------------------------------------------
const tip = document.getElementById('tip');
const tipCustome = document.getElementById('custome');
if (tip.value == 'None' || tipCustome.value == '0' || tipCustome.value == '') {
  let tipValue = 0
  console.log(tipValue);
}
if (tip.value == '15') {
  var one = '15%';
  one = parseFloat(one) / 100;
  let tipValue = one * cost + cost;
}
if (tip.value == '20') {
  var two = '20%';
  two = parseFloat(two) / 100;
  let tipValue = two * cost + cost;
}
if (tip.value == '25') {
  var three = '25%';
  three = parseFloat(three) / 100;
  let tipValue = three * cost + cost
}
if (tipCustome.value > 0) {
  tipCustome.value = ct;
  ct = parseFloat(ct) / 100;
  let tipValue = ct * cost + cost;
}
//Submit stuff *----------------------------------------------------------------
const total = document.getElementById('total');
total.addEventListener('change', (evt)=>{
  total.innerHTML = `$${tipValue}`
})
