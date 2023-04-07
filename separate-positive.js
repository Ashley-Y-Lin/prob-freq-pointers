"use strict";

/** separatePositive sorts positive values to the beginning of array and negative
 * values to the back, without regard to order. it takes as input an array of
 * numbers and returns the same array, sorted */

function separatePositive(nums) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    if (nums[left] > 0) {
      left++;
    }
    if (nums[left] < 0) {
      let curr = Number(nums.splice(left, 1));
      nums.push(curr);
      right--;
    }
  }

  return nums;
}
