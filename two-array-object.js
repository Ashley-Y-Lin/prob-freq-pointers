"use strict";

/** twoArrayObjects makes an object created when taking one array as kets, and
 * the other as values. it takes as input two arrays and returns an object */

function twoArrayObject(keys, values) {
  let obj = {};

  for (let i = 0; i < keys.length; i++) {
    const curr = values[i] || null;
    obj[keys[i]] = curr;
  }

  return obj;
}
