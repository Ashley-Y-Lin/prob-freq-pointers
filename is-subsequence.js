"use strict";

/** isSubsequence finds whether the characters in one string appear in
 * another, without the order changing. it takes as input two strings, and
 * returns a boolean */

function isSubsequence(s1, s2) {
  if (s1.length > s2.length) return false;

  let s1Pointer = 0;
  let s2Pointer = 0;

  while ((s2Pointer < s2.length - 1)) {
    let curr = s1[s1Pointer];

    if (s2[s2Pointer] !== curr) {
      s2Pointer++;
    }
    if (s2[s2Pointer] === curr) {
      if (s1Pointer === s1.length - 1) {
        return true;
      }
      s1Pointer++;
    }
  }

  return false;
}
