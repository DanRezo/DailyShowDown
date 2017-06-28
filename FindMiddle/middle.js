// Find the middle of a word

var middle = function(word) {
    
    // Provided argument is not a word
	if (typeof word !== "string") {
		return "You did not enter a word";

	// Provided argument is a sentence of words	
	} else if (typeof word === "string" && word.indexOf(' ') !== -1) {
		return "There are many words. Only use one"
		
	} else {
		var splitWord = word.split('');
		var len = splitWord.length
		var index;
		var nextLetter;
		var letters;
		
		// Single letter word
		if (len === 1) {
			return word;
		}

		// Double letter word
		if (len === 2) {
			return word;
		}

		// Word with odd number of letters
		if (len % 2 === 1) {
			index = Math.floor(len/2);
			return splitWord[index];
		}

		// Word with even number of letters
		if (len % 2 === 0) {
			index = Math.floor(len/2);
			nextLetter = index + 1;
			letters = splitWord[index] + splitWord[nextLetter];
			return letters;

		}
	}
	
}