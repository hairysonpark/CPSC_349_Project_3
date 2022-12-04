import { Stage, createWordHolder } from './modules/stages.js'
import { CreateLetters } from './modules/letters.js'

const stage = new Stage()

let word = 'computer'

word = word.toUpperCase()

createWordHolder(word)

CreateLetters(word)

const page2 = document.getElementById('page2')

const btn = document.getElementById('btn')

// Click "End Game"
btn.addEventListener('click', function handleClick () {
  if (page2.hidden) {
    page2.style.display = 'block'

    btn.textContent = 'End Game'

    page2.hidden = false
  } else {
    page2.hidden = true

    page2.style.display = 'none';

    btn.textContent = 'Lets Play'
  }
})

export { stage }