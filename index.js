// Array of tutorial titles
const tutorials = [
  "what does the this keyword mean?",
  "What is the Constructor OO pattern?",
  "implementing Blockchain Web API",
  "The Test Driven Development Workflow",
  "What is NaN and how Can we Check For it",
  "What is the difference between stopPropagation and preventDefault?",
  "Immutable State and Pure Functions",
  "what is the difference between == and ===?",
  "what is the difference between event capturing and bubbling?",
  "what is JSONP?",
];

// Function that returns a new array of title-cased tutorial names
function titleCased() {
  // Map of special words (in lowercase) to their correct casing
  const specialWordMap = new Map([
    ["oo", "OO"],
    ["api", "API"],
    ["nan", "NaN"],
    ["jsonp", "JSONP"],
    ["stoppropagation", "StopPropagation"],
    ["preventdefault", "PreventDefault"],
  ]);

  // Return a new array by mapping over each tutorial
  return tutorials.map((tutorial) => {
    // Split each tutorial into individual words
    return tutorial
      .split(" ")
      .map((word) => {
        let cleanWord = word;     // The part of the word without punctuation
        let punctuation = "";     // The trailing punctuation (e.g. ? or .)

        // Check if the last character is punctuation (not a letter or number)
        const lastChar = word[word.length - 1];
        if (lastChar && !/[a-zA-Z0-9]/.test(lastChar)) {
          cleanWord = word.slice(0, -1);  // Remove the last character
          punctuation = lastChar;         // Save the punctuation
        }

        // Convert the word to lowercase for comparison with the map
        const lower = cleanWord.toLowerCase();

        // If the word is a special case (e.g. 'jsonp'), use the correct casing
        if (specialWordMap.has(lower)) {
          return specialWordMap.get(lower) + punctuation;
        }

        // Otherwise, capitalize the first letter and lowercase the rest
        return (
          cleanWord.charAt(0).toUpperCase() +
          cleanWord.slice(1).toLowerCase() +
          punctuation
        );
      })
      .join(" "); // Re-join the words into a single string
  });
}

// Export the function so tests can run
module.exports = {
  titleCased,
};