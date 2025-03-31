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
  text = String(text).trim();

  // Count words
  const wordCount = text.split(/\s+/).filter(word => word !== "").length;

  // Calculate reading time in minutes
  const readingTime = wordCount / wordsPerMinute;

  // Format output
  let formattedTime;
  if (readingTime === 0) {
      formattedTime = "0 minutes";
  } else if (readingTime < 1) {
      formattedTime = "< 1 minute";
  } else if (readingTime === 1) {
      formattedTime = "1 minute";
  } else if (readingTime > 1 && readingTime < 2) {
      formattedTime = "> 1 minute";
  } else {
      formattedTime = `${Math.round(readingTime)} minutes`;
  }

  return {formattedTime};
}

export {calculateTextStats, calculateReadingTime}