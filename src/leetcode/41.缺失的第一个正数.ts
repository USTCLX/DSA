/*
 * @lc app=leetcode.cn id=41 lang=typescript
 *
 * [41] 缺失的第一个正数
 */

interface User {
  name: string;
  age: number;
}

type props = keyof User; // "name" | "age"
type types = User[keyof User]; // string | number
type map = {
  readonly [K in props]: User[K];
}; // {readonly name:string; readonly age:number}

// @lc code=start
// 先排序，然后依次找，
// 这一个跑了好多遍啊，各种边界case。。。
// 要过滤掉出所有大于0的数字
// 还要去重哦😯
// function firstMissingPositive(nums: number[]): number {
//   nums = nums.filter(val => val > 0).sort((a, b) => a - b);

//   nums = [...new Set(nums)];

//   if (!nums.length) {
//     return 1;
//   }
//   const base = nums[0];
//   if (base > 1) {
//     return 1;
//   }
//   let i: number;
//   for (i = 0; i < nums.length; i++) {
//     if (nums[i] - base !== i) {
//       return i + base;
//     }
//   }

//   return i + base;
// }

// 1. 将数据排序后放入一个set中，去重
// 2. 遍历0-set.size;验证n是否存在于set中。
// 3. 如果不存在，返回n
// 4. 如果全部存在，返回最大值加一
// function firstMissingPositive(nums: number[]): number {
//   if (!nums.length) return 1;

//   // 排序，去重
//   nums = [...new Set(nums.sort((a, b) => a - b))];

//   // 遍历1～nums.length。 验证是否存在，不存在就直接返回
//   let i = 1;
//   for (; i <= nums.length; i++) {
//     if (!nums.includes(i)) {
//       return i;
//     }
//   }

//   // [1,2]这种 case，都存在，返回3
//   return i;
// }

// 标记法(n为数组长度)
// 1. 遍历一遍数组，将所有小于等于0的数字转正，变为n+1
// 2. 再遍历一遍数组，取1<=x<=n的数作为下标，将nums[x-1]位置的数字的绝对值，标记为负数
// 3. 最后再遍历一遍数组，如果有正数，那么就返回该下标+1
// 4. 否则返回n+1
function firstMissingPositive(nums: number[]): number {
  // 1
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] <= 0) {
      nums[i] = nums.length + 1;
    }
  }

  //2
  for (let i = 0; i < nums.length; i++) {
    const x = Math.abs(nums[i]);
    if (x <= nums.length && nums[x - 1] > 0) {
      nums[x - 1] = -nums[x - 1];
    }
  }

  //3
  let i;
  for (i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      return i + 1;
    }
  }
  return i + 1;
}
// @lc code=end

export { firstMissingPositive };
