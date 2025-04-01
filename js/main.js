import { toggleTheme } from "./theme.js";
import { updateUI } from "./updateUI.js";
import { characterLimit } from "./characterLimit.js";
import { updateLetterDensity } from "./displayDensity.js";

const themeSwitcher = document.getElementById('theme-switcher');
const textArea = document.getElementById('textarea')
const wordValue = document.getElementById('word-value')
const characterValue = document.getElementById('character-value')
const sentenceValue = document.getElementById('sentence-value')
const readingTime = document.getElementById('reading-time')
const excludeSpacesCheckbox = document.getElementById('exclude')
const characterLimitCheckbox = document.getElementById('character')
const characterLimitInput = document.getElementById('limit-input')
const errorElement = document.getElementById('error-element')
const errorMessage = document.getElementById('error-message')


// Switch theme
themeSwitcher.addEventListener("click", toggleTheme)

// Update UI when exclude spaces checkbox changes
excludeSpacesCheckbox.addEventListener("change", function() {
  const text = textArea.value
  const excludeSpaces = excludeSpacesCheckbox.checked
  updateUI(text, wordValue, characterValue, sentenceValue, readingTime, excludeSpaces)
})

// Calculate text stats when text is inputted
textArea.addEventListener("input", function() {
  const text = textArea.value;
  const excludeSpaces = excludeSpacesCheckbox.checked;
  updateUI(text, wordValue, characterValue, sentenceValue, readingTime, excludeSpaces);
  
  if (characterLimitCheckbox.checked) {
    characterLimit(textArea, characterLimitCheckbox, characterLimitInput, errorElement, errorMessage);
  }
});

// Character limit functionality
characterLimitCheckbox.addEventListener("change", function() {
  if (characterLimitCheckbox.checked) {
    characterLimitInput.value = '300'
  }
  characterLimit(textArea, characterLimitCheckbox, characterLimitInput, errorElement, errorMessage);
  // Update UI to refresh letter density
  const text = textArea.value;
  const excludeSpaces = excludeSpacesCheckbox.checked;
  updateUI(text, wordValue, characterValue, sentenceValue, readingTime, excludeSpaces);
})

characterLimitInput.addEventListener("input", function() {
  if (characterLimitCheckbox.checked) {
    characterLimit(textArea, characterLimitCheckbox, characterLimitInput, errorElement, errorMessage);
    // Update UI to refresh letter density
    const text = textArea.value;
    const excludeSpaces = excludeSpacesCheckbox.checked;
    updateUI(text, wordValue, characterValue, sentenceValue, readingTime, excludeSpaces);
  }
})
