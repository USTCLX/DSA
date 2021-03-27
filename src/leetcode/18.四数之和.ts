/*
 * @lc app=leetcode.cn id=18 lang=typescript
 *
 * [18] 四数之和
 */

// @lc code=start
// 更加泛型（通用）的两数之和函数
// 默认数组已经排序
function twoSum(nums: number[], target: number, start: number): number[][] {
  // 双指针遍历
  let left = start;
  let right = nums.length - 1;
  const res = [];
  while (left < right) {
    const lVal = nums[left];
    const rVal = nums[right];
    if (lVal + rVal === target) {
      res.push([lVal, rVal]);
      // 排除重复的
      while (nums[left] === lVal) left++;
      while (nums[right] === rVal) right--;
    } else if (lVal + rVal < target) {
      left++;
    } else {
      right--;
    }
  }
  return res;
}

// 这里数组已经排序
function nSum(
  nums: number[],
  target: number,
  n: number,
  start: number,
  visited: number[],
  ans: number[][] = []
): number[][] {
  if (n + start > nums.length) return [];

  if (n === 2) {
    // 可以调用两数之和
    const temp = twoSum(nums, target, start);
    for (let i = 0; i < temp.length; i++) {
      ans.push([...visited, ...temp[i]]);
    }
    return;
  } else {
    // n大于2
    for (let i = start; i < nums.length; i++) {
      const newTarget = target - nums[i];
      const newN = n - 1;
      const newStart = i + 1;
      const newVisited = [...visited, nums[i]];
      nSum(nums, newTarget, newN, newStart, newVisited, ans);
      // 去除重复的
      while (nums[i] === nums[i + 1]) i++;
    }
  }
  return ans;
}

function fourSum(nums: number[], target: number): number[][] {
  nums.sort((a, b) => a - b);
  return nSum(nums, target, 4, 0, []);
}
// @lc code=end

export { fourSum };
