document.getElementById("GO").addEventListener('click', (event) => {
  console.log(`Total Cost ${calculateTotalCost()}`);
})

function calculateTotalCost() {
  const startTime = document.getElementById("carTime")
  const endTime = document.getElementById("carTime2")
  const carType = document.getElementById("carType")
  const champagne = document.getElementById("champagne")

  const bottleQty = parseInt(champagne.value)
  const bottlePrice = 35

  let carRate
  switch (carType.value) {
    case "continental":
      carRate = 75;
      break;
    case "hummer":
      carRate = 100;
      break;
    case "vintage":
      carRate = 150;
    default:
      carRate = 1_000_000;
      break;
  }

  if (startTime.value == "" || endTime.value == "") {
    return 0
  }

  const start = parseTime(startTime.value)
  let end = parseTime(endTime.value)

  const totalTime = calculateAdjustedHours(start, end)

  const totalCost = totalTime * carRate + bottleQty * bottlePrice

  return totalCost
}

function calculateAdjustedHours(start, end) {
  if (end < start) {
    end += 24
  }

  if (start >= 8 && start <= 16 && end <= 16) {
    (end - start) / 2
  }

  if (start >= 8 && start <= 16) {
    const promoTime = (16 - start) / 2
    const regularTime = (end - 16)
    return promoTime + regularTime
  }

  return end - start
}

function parseTime(timeString) {
  const hour = parseInt(timeString.split(':')[0])
  const minute = parseFloat(timeString.split(':')[1]) / 60
  const time = hour + minute

  return time
}
