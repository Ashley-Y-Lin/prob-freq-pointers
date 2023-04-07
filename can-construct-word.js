"use strict";

/** make a function that turns iterable into object with key-value pairs,
 * where value tracks frequency. takes as input an iterable, returns an object*/

function getFrequencyCounter(items) {
  const freqs = {};

  for (const item of items) {
    const curr = freqs[item] || 0;
    freqs[item] = curr + 1;
  }

  return freqs;
}


/** function checks if the word can be made from letters. takes as input 2 strings
 * representing the word and letters, and returns true or false */

function canConstructWord(word, letters) {
  if (word.length === 0) return true;
  if (letters.length === 0) return false;

  const wordLetterFreqs = getFrequencyCounter(word);
  const lettersFreqs = getFrequencyCounter(letters);

  for (let key in wordLetterFreqs) {
    if (!key in lettersFreqs) {
      return false;
    }
    if (wordLetterFreqs[key] > lettersFreqs[key]) {
      return false;
    }
  }

  return true;
}
