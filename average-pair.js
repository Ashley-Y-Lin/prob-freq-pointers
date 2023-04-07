"use strict";

/** averagePair finds whether there are two numbers in an array that create a
 * target average. it takes as input an array of numbers, and an integer repsenting
 * the target average */

function averagePair(nums, targetAvg) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const avg = (nums[left] + nums[right]) / 2;

    if (avg === targetAvg) {
      return true;
    } else if (avg > targetAvg) {
      right -= 1;
    } else {
      left += 1;
    }
  }

  return false;
}

