import { calculateTextStats, calculateReadingTime } from "./calculate.js"
import { updateLetterDensity } from "./displayDensity.js"

function updateUI(text, wordValue, characterValue, sentenceValue, readingTime, excludeSpaces) {
  const noCharactersMessage = document.getElementById('no-characters')
  const densityList = document.getElementById('density-list')

  if (!text) {
    wordValue.textContent = '0'
    characterValue.textContent = '0'
    sentenceValue.textContent = '0'
    readingTime.textContent = '0 minute'
    noCharactersMessage.classList.remove('inactive')
    densityList.classList.add('inactive')
    return
  }

  // Get text calculations
  const {characterCount, characterCountNoSpaces, wordCount, sentenceCount} = calculateTextStats(text)
  const {formattedTime} = calculateReadingTime(text)

  // check if spaces should be excluded
  let displayedCharacterCount;
  if (excludeSpaces) {
    displayedCharacterCount = characterCountNoSpaces
  } else {
    displayedCharacterCount = characterCount
  }

  // Update UI elements
  wordValue.textContent = wordCount
  characterValue.textContent = displayedCharacterCount
  sentenceValue.textContent = sentenceCount
  readingTime.textContent = formattedTime
  noCharactersMessage.classList.add('inactive')
  densityList.classList.remove('inactive')
  updateLetterDensity(text)
}

export {updateUI}