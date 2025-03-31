import { calculateTextStats, calculateReadingTime } from "./calculate.js"

function updateUI(text, wordValue, characterValue, sentenceValue, readingTime, excludeSpaces) {
  if (!text) {
    wordValue.textContent = '0'
    characterValue.textContent = '0'
    sentenceValue.textContent = '0'
    readingTime.textContent = '0 minute'
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
}

export {updateUI}