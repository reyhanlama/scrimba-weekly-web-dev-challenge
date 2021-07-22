const input = document.getElementById("input")
const energyMeter = document.getElementById("energy")

let status = document.getElementById("status")
let message = ""
const handleEnergyChange = (val) => {
  energyMeter.value = input.value
}

input.addEventListener("change", handleEnergyChange)
