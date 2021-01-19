/*
 * @lc app=leetcode.cn id=15 lang=typescript
 *
 * [15] 三数之和
 */

// function threeSum(nums: number[]): number[][] {
//   nums.sort((a, b) => a - b);

//   const result = [];
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] > 0) break;

//     if (nums[i] === nums[i - 1]) continue;

//     let left = i + 1;
//     let right = nums.length - 1;
//     while (left < right) {
//       const sum = nums[i] + nums[left] + nums[right];
//       if (sum === 0) {
//         result.push([nums[i], nums[left], nums[right]]);
//         while (nums[left] === nums[left + 1]) left++;
//         while (nums[right] === nums[right - 1]) right--;
//         left++;
//         right--;
//       } else if (sum < 0) {
//         left++;
//       } else if (sum > 0) {
//         right--;
//       }
//     }
//   }
//   return result;
// }

// @lc code=start

// 三数之和，不建议使用map的方法来做了，map方法比较适合两数之和
// 因为还需要去重，使用先排序，在夹逼的方式来做
function threeSum(nums: number[]): number[][] {
  // 排序数组
  nums = nums.sort((a, b) => a - b);

  const res = [];

  // 遍历
  for (let i = 0; i < nums.length; i++) {
    const target = nums[i];
    let left = i + 1;
    let right = nums.length - 1;

    // 如果目标大于0，后面的数也都大于0，肯定找不到了。优化
    if (target > 0) break;

    // 如果target和上一个target一样，跳过
    if (target === nums[i - 1]) continue;

    // 夹逼寻找
    while (left < right) {
      // 先算好sum，避免在判断中重复计算
      const sum = target + nums[left] + nums[right];
      if (sum === 0) {
        // 找到
        res.push([target, nums[left], nums[right]]);

        while (nums[left] === nums[left + 1]) left++;
        while (nums[right] === nums[right - 1]) right--;

        left++;
        right--;
      } else if (sum < 0) {
        // 偏小了，left右移动
        left++;
      } else {
        // 偏大了，right左移动
        right--;
      }
    }
  }

  return res;
}
// @lc code=end

export { threeSum };
