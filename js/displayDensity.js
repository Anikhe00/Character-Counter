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

  const visibleCount = 5;
  const seeMoreButton = document.getElementById('seeMore');
  const arrowIcon = document.getElementById('arrow-icon');
  let isExpanded = false;

  if (result.length > visibleCount) {
    seeMoreButton.classList.remove('inactive');
  } else {
    seeMoreButton.style.display = 'none';
  }

  function renderLetters() {
    // Clear the list
    densityList.innerHTML = '';
    
    // Show letters
    const lettersToShow = isExpanded ? result : result.slice(0, visibleCount);
    lettersToShow.forEach(letter => {
      const element = createLetterDensityElement(letter)
      densityList.appendChild(element)
    });

    // Add the button if needed
    if (result.length > visibleCount) {
      updateSeeMoreButton(); // Update button state
      densityList.appendChild(seeMoreButton);
    }
  }

  const buttonContent = seeMoreButton.innerHTML; // Store original button content

  function updateSeeMoreButton() {
    if (isExpanded) {
      seeMoreButton.innerHTML = `See Less
        <svg class="arrow-icon" id="arrow-icon" width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg" style="transform: rotate(180deg); transition: transform 0.3s ease">
          <path d="M6.25 0.65625L10.875 5.21875C11.0312 5.375 11.0312 5.625 10.875 5.75L10.25 6.375C10.125 6.53125 9.875 6.53125 9.71875 6.375L6 2.6875L2.25 6.375C2.09375 6.53125 1.875 6.53125 1.71875 6.375L1.09375 5.75C0.9375 5.625 0.9375 5.375 1.09375 5.21875L5.71875 0.65625C5.875 0.5 6.09375 0.5 6.25 0.65625Z" fill="currentColor"/>
        </svg>`;
    } else {
      seeMoreButton.innerHTML = buttonContent;
    }
  }

  seeMoreButton.addEventListener('click', () => {
    isExpanded = !isExpanded;
    densityList.innerHTML = '';
    updateSeeMoreButton();
    renderLetters();
  });

  renderLetters();
}

export { updateLetterDensity }
