const input = document.getElementById("input")
const energyMeter = document.getElementById("energy")

const handleEnergyChange = (val) => {
  energyMeter.value = input.value
}

input.addEventListener("change", handleEnergyChange)
