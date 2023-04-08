"use strict";

/** frequencyCounter takes an iterable and returns an object with keys as unique
 * values, and values as frequency it occurs. it takes as input an iterable and
 * returns an object */

function frequencyCounter(iterable) {
  let freqs = {};
  for (let val of iterable) {
    let curr = freqs[val] || 0;
    freqs[val] = curr + 1;
  }
  return freqs;
}


/** sameFrequency checks if two positive integers have the same frequency of
 * digits. it takes as input two integers and returns a boolean */

function sameFrequency(int1, int2) {
  let int1String = int1.toString();
  let int2String = int2.toString();

  if (int1String.length !== int2String.length) return false;

  let int1freqs = frequencyCounter(int1String);
  let int2freqs = frequencyCounter(int2String);

  for (let key in int1freqs) {
    //TODO: combine if statements using ||
    if (!key in int2freqs) {
      return false;
    }
    if (int1freqs[key] !== int2freqs[key]) {
      return false;
    }
  }

  return true;
}
