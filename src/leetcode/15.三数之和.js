/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  const map = new Map();
  nums = nums.sort((a, b) => a - b);
  let result = [];
  let curVal1 = null;
  let curVal2 = null;
  let expectVal = null;
  for (let i = i; i < nums.length; i++) {
    map.clear();
    map.set(nums[i - 1], i - 1);
    for (let j = i + 1; j < nums.length; j++) {
      curVal1 = nums[i];
      curVal2 = nums[j];
      expectVal = 0 - curVal1 - curVal2;
      if (map.has(expectVal)) {
        result.push([map.get(expectVal), i, j]);
      }
      map.set(curVal1, j);
    }
  }
  return result;
};
// @lc code=end
