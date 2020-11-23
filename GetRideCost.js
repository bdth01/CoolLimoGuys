const total = document.getElementById('total');
document.getElementById('go').addEventListener('click',(evt)=>{
  total.innerHTML = `$${calcTotalCost()}`
  alert("This will be emailed to you.")
  console.log(`Total Cost: ${calcTotalCost()}`);
})

function calcTotalCost() {
  const startTime = document.getElementById('carTime');
  const endTime = document.getElementById('carTime2');
  const carType = document.getElementById('carType');
  const champagne = document.getElementById('champagne');

  const bottles = parseInt(champagne.value);
  const bottlePrice = 35;

  let carRate;
  switch (carType.value) {
    case "continental":
      carRate = 75;
      break;
    case "hummer":
      carRate = 100;
      break;
    case "vintage":
      carRate = 250;
      break;
    default:
      carRate = 1_000_000;
      break;
  }

  if (startTime.value == "" || endTime.value == "") {
    return 0;
  }
  const start = parseTime(startTime.value);
  let end = parseTime(endTime.value);

  const totalTime = calcAdjustedhours(start, end);

  const totalCost = totalTime * carRate + bottles * bottlePrice;

  const tipf = calcTip(totalCost);
  return tipf;
}

function calcTip(totalCost) {
  const tip = document.getElementById('tip');
  const tipCustome = document.getElementById('custome');
  let tipRate = 0;

  if (tipCustome.value !== "") {
    tipRate = parseFloat(tipCustome.value) / 100;
  }
  else {
    switch (tip.value) {
      case "0":
        tipRate = 0;
        break;
      case "15":
        tipRate = parseFloat(15) / 100;
        break;
      case "20":
        tipRate = parseFloat(20) / 100;
        break;
      case "25":
        tipRate = parseFloat(25) / 100;
        break;
      default:
        tipRate = 56;
        break;
    }
  }


  let final = totalCost * tipRate + totalCost

return final;
}

function calcAdjustedhours(start, end) {
  if (end < start) {
    end += 24;
  }
  if (start >= 8 && start <= 16 && end >= 8 && end <= 16) {
    return (end - start) / 2;
  }
  if (start >= 8 && start <= 16) {
    const promoTime = (16 - start) / 2;
    const regularTime = (end - 16);
    return promoTime + regularTime;
  }
  return end - start;
}

function parseTime(timeString) {
  const hour = parseInt(timeString.split(':')[0]);
  const min = parseFloat(timeString.split(':')[1]) / 60;
  const time = hour + min;

  return time;
}
