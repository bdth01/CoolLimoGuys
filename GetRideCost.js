
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
  return totalCost;
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