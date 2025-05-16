function reverseTheWordsOfTheSentence(arrayOfWords) {
    // Reverse each word in the array
    let words = arrayOfWords.split(" ");
    for (let i = 0; i < Math.floor((words.length-1)/2); i++) {
        // Swap the words at indices i and words.length-1-i
        [words[i], words[words.length-1-i]] = [words[words.length-1-i], words[i]];
    }
    
    return words.join(" "); // Return the original words array as a string array with the words reversed
    
}
function reverseTheelements(arrayOfElements) {
    // Reverse each word in the array
    let first = 0;
    let last = arrayOfElements.length - 1;
    while (first < last) {
        [arrayOfElements[first], arrayOfElements[last]] = [arrayOfElements[last], arrayOfElements[first]];
        first++;
        last--;
    }
    return arrayOfElements
    
    
}
console.log(reverseTheWordsOfTheSentence("i live in a house"));
console.log(reverseTheelements([3,5,2,5,2,3,9]));

