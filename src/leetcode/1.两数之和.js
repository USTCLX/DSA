/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// 最重要的就是map里存什么，
// key 为nums[i] value 为i
var twoSum = function(nums, target) {
  const map = new Map();
  let curVal = null;
  let expectVal = null;
  for (let i = 0; i < nums.length; i++) {
    curVal = nums[i];
    expectVal = target - curVal;
    if (map.has(expectVal)) {
      return [map.get(expectVal), i];
    }
    // 把当前值存下来
    map.set(curVal, i);
  }
  return [];
};
// @lc code=end
