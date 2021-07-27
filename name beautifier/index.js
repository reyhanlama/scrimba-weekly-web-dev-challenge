import randomcolor from "randomcolor"

const fontsArr = [
        "Impact,Charcoal,sans-serif",
        "Brush Script MT, cursive",
        "Luminari, fantasy",
        "Comic Sans MS, cursive",
        "American Typewriter, serif"
    ]
    
    
const random = Math.floor(Math.random() * fontsArr.length);
// console.log(fontsArr[random]);

const title = document.getElementById('name')
const btn = document.getElementById('beautifierBtn').addEventListener('click',changeFont)


  function changeFont() {
  title.style.color = randomcolor()
  title.style.fontFamily = fontsArr[random]
}

// When the button is clicked, the following things should change
 
// - font family (use array above)
// - font color (either use randomcolor or your own array of color
// - button color (match the font color)



