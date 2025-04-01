function calculateTextStats(text) {
  // Total characters with spaces
  const characterCount = text.length

  // Total characters without spaces
  const characterCountNoSpaces = text.replace(/\s/g, "").length

  // Total words
  const words = text.trim().split(/\s+/)
  const wordCount = text.trim() ? words.length : 0

  // Sentence count
  const sentenceCount = (text.match(/[^.!?]+[.!?]/g) || []).length

  return {characterCount, characterCountNoSpaces, wordCount, sentenceCount}
}

function calculateReadingTime(text, wordsPerMinute = 250) {
  // Ensure text is a string and remove extra spaces
  text = String(text).trim()

  // Count words
  const wordCount = text.split(/\s+/).filter(word => word !== "").length

  // Calculate reading time in minutes
  const readingTime = wordCount / wordsPerMinute

  // Format output
  let formattedTime;
  if (readingTime === 0) {
      formattedTime = "0 minutes"
  } else if (readingTime < 1) {
      formattedTime = "< 1 minute"
  } else if (readingTime === 1) {
      formattedTime = "1 minute"
  } else if (readingTime > 1 && readingTime < 2) {
      formattedTime = "> 1 minute"
  } else {
      formattedTime = `${Math.round(readingTime)} minutes`
  }

  return {formattedTime}
}

function calculateLetterDensity(text) {
    let letterCount = {}
    let result = []
  
    // Count the occurrences of each letter
    for (let i = 0; i < text.length; i++) {
      let char = text[i].toLowerCase();
      if (char >= 'a' && char <= 'z') {
        letterCount[char] = (letterCount[char] || 0) + 1;
      }
    }
  
    // Calculate the total number of letters
    let totalLetters = 0
    for (let key in letterCount) {
      totalLetters += letterCount[key]
    }
  
    // Create the result array with percentage calculation
    for (let key in letterCount) {
      if (letterCount[key] > 1) {
        let percentage = ((letterCount[key] / totalLetters) * 100).toFixed(2);
        result.push({
          letter: key,
          count: letterCount[key],
          percentage: percentage,
        })
      }
    }
  
    // Sort the result array from highest to lowest count
    result.sort(function (a, b) {
      return b.count - a.count;
    });
  
    return result
  }

export {calculateTextStats, calculateReadingTime, calculateLetterDensity}