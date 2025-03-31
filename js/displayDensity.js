import { calculateLetterDensity } from './calculate.js'

function createLetterDensityElement(letter) {
  const letterDensity = document.createElement('div')
  letterDensity.className = 'letter-density'

  const letterElement = document.createElement('p')
  letterElement.className = 'letter-label'
  letterElement.textContent = letter.letter.toUpperCase()

  const progressBar = document.createElement('div')
  progressBar.className = 'progress-bar'

  const progressBg = document.createElement('div')
  progressBg.className = 'progress-bar-bg'

  const progress = document.createElement('div')
  progress.className = 'progress-bar-fill'
  progress.style.width = `${letter.percentage}%`

  const percentage = document.createElement('p')
  percentage.className = 'progress-percentage'
  percentage.textContent = `${letter.count} (${letter.percentage}%)`

  progressBar.appendChild(progressBg)
  progressBar.appendChild(progress)

  letterDensity.appendChild(letterElement)
  letterDensity.appendChild(progressBar)
  letterDensity.appendChild(percentage)

  return letterDensity
}

function updateLetterDensity(text, densityList) {
  if (!text) {
    densityList.innerHTML = ''
    return
  }

  const result = calculateLetterDensity(text)
  densityList.innerHTML = ''

  result.forEach(letter => {
    const element = createLetterDensityElement(letter)
    densityList.appendChild(element)
  })
}

export { updateLetterDensity }
