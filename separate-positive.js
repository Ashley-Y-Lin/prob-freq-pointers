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
      //TODO: fix so that im not using splice, just index directly
      //into the array and save as temp
      let curr = nums.splice(left, 1);
      nums.push(curr[0]);
      right--;
    }
  }

  return nums;
}
