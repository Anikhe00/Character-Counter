function characterLimit(textArea, characterLimitCheckbox, characterLimitInput, errorElement, errorMessage) {  
  if (characterLimitCheckbox.checked) {
    characterLimitInput.classList.remove('inactive')
    const limit = parseInt(characterLimitInput.value) || 300
    
    if (limit > 0) {
      const currentLength = textArea.value.length
      if (currentLength > limit) {
        errorElement.classList.remove('inactive')
        errorMessage.textContent = `Limit reached! Your text exceeds ${limit} characters.`
        textArea.style.border = '1px solid #DA3701'
      } else {
        errorElement.classList.add('inactive')
        textArea.style.border = ''
      }
    }
  } else {
    characterLimitInput.classList.add('inactive')
    errorElement.classList.add('inactive')
    textArea.style.border = ''
  }
}

export {characterLimit}