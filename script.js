//Forum stuff *-----------------------------------------------------------------
// const display = document.getElementById('form');
//Hours for car use *-----------------------------------------------------------
// const hour = document.getElementById('carTime');
//Car stuff *-------------------------------------------------------------------
// const continental = document.getElementById('carOne');
// const hummer = document.getElementById('caTwo');
// const vintage = document.getElementById('carThree');
// let isContinental = false;
// let isHummer = false;
// let isVintage = false;
// let carCost = 0;
//
// if (continental !== null) {
//   continental.addEventListener('change', (evt)=>{
//     if (continental = 'yes') {
//       isContinental = true;
//       let carCost = parseInt(hour.value) * 75;
//       isHummer = false;
//       isVintage = false;
//     }
//   })
// }
// if (hummer !== null) {
//   hummer.addEventListener('change', (evt)=>{
//     if (hummer = 'yes') {
//       isHummer = true;
//       let carCost = parseInt(hour.value) * 100;
//       isContinental = false;
//       isVintage = false;
//     }
//   })
// }
// if (vintage !== null) {
//   vintage.addEventListener('change', (evt)=>{
//     if (vintage = 'yes') {
//       isVintage = true;
//       let carCost = parseInt(hour.value) * 150;
//       isHummer = false;
//       isContinental = false;
//     }
//   })
// }
//Drink stuff *-----------------------------------------------------------------
// const drink = document.getElementById('drink');
// let drinkCost = 0
// if (drink !== null) {
//   if (drink.value == 'None') {
//     let drinkCost = 0;
//   }
//   else {
//     let drinkCost = parseInt(drink.value) * 35;
//   }
// }
// if (hummer !== null) {
//   hummer.addEventListener('change', (evt)=>{
//     if (hummer = 'yes') {
//       isHummer = true;
//       let carCost = parseInt(hour.value) * 100;
//       isContinental = false;
//       isVintage = false;
//     }
//   })
// }
//
// if (vintage !== null) {
//   vintage.addEventListener('change', (evt)=>{
//     if (vintage = 'yes') {
//       isVintage = true;
//       let carCost = parseInt(hour.value) * 150;
//       isHummer = false;
//       isContinental = false;
//     }
//   })
// }
// //Drink stuff *-----------------------------------------------------------------
// const drink = document.getElementById('drink');
//   if (drink !== null) {
//   if (drink.value == 'None') {
//     let drinkCost = 0;
//   }
//   else {
//     let drinkCost = parseInt(drink.value) * 35;
//   }
// }
// >>>>>>> 160b6006d499d0d3d3da7c0fb5a1a37f722df897
//Cost befor tips *-------------------------------------------------------------
// let cost = carCost + drinkCost;
//Tip stuff *-------------------------------------------------------------------
// const tip = document.getElementById('tip');
// const tipCustome = document.getElementById('custome');
// let tipValue = 0;
// if (tip !== null || tipCustome !== null) {
//   if (tip.value == '0' || tipCustome.value == '0' || tipCustome.value == '') {
//     let tipValue = 0
//     console.log(tipValue);
//   }
//   if (tip.value == '15') {
//     var one = '15%';
//     one = parseFloat(one) / 100;
//     let tipValue = one * cost + cost;
//   }
//   if (tip.value == '20') {
//     var two = '20%';
//     two = parseFloat(two) / 100;
//     let tipValue = two * cost + cost;
//   }
//   if (tip.value == '25') {
//     var three = '25%';
//     three = parseFloat(three) / 100;
//     let tipValue = three * cost + cost
//   }
//   if (tipCustome.value > 0) {
//     tipCustome.value = ct;
//     ct = parseFloat(ct) / 100;
//     let tipValue = ct * cost + cost;
//   }
// }
//Submit stuff *----------------------------------------------------------------
// const total = document.getElementById('total');
// total.addEventListener('change', (evt)=>{
//   total.innerHTML = `$${tipValue}`
// })
// })
//Timer stuff *-----------------------------------------------------------------
var countDownDate = new Date("Nov 27, 2020 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("homeTimer").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("homeTimer").innerHTML = "EXPIRED";
  }
}, 1000);
