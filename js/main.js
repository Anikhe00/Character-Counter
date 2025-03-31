import { toggleTheme } from "./theme.js";
import { calculateTextStats } from "./calculate.js";
import { updateUI } from "./updateUI.js";


const themeSwitcher = document.getElementById('theme-switcher');
const textArea = document.getElementById('textarea')
const wordValue = document.getElementById('word-value')
const characterValue = document.getElementById('character-value')
const sentenceValue = document.getElementById('sentence-value')
const readingTime = document.getElementById('reading-time')
const excludeSpacesCheckbox = document.getElementById('exclude')

// Switch theme
themeSwitcher.addEventListener("click", toggleTheme)

// Update UI when exclude spaces checkbox changes
excludeSpacesCheckbox.addEventListener("change", function() {
  const text = textArea.value
  const excludeSpaces = excludeSpacesCheckbox.checked
  updateUI(text, wordValue, characterValue, sentenceValue, readingTime, excludeSpaces)
})

textArea.addEventListener("input", function() {
  const text = textArea.value
  const excludeSpaces = excludeSpacesCheckbox.checked
  updateUI(text, wordValue, characterValue, sentenceValue, readingTime, excludeSpaces)
})
