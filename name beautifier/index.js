// import randomcolor from "randomcolor"

const fontsArr = [
  "Impact,Charcoal,sans-serif",
  "Brush Script MT, cursive",
  "Luminari, fantasy",
  "Comic Sans MS, cursive",
  "American Typewriter, serif",
]
var colors = ["red", "green", "blue", "orange", "yellow"]

const body = document.getElementById("body")
const text = document.getElementById("name")
const button = document.getElementById("beautifierBtn")

const getRandoms = {
  randomFont: function () {
    return fontsArr[Math.floor(Math.random() * fontsArr.length)]
  },
  randomColor: function () {
    return colors[Math.floor(Math.random() * colors.length)]
  },
}

const handleChange = () => {
  text.style.color = getRandoms.randomColor()
  button.style.background = text.style.color
  text.style.fontFamily = getRandoms.randomFont()
  body.style.background = getRandoms.randomColor()
}
button.addEventListener("click", handleChange)
