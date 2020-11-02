/*
 * @lc app=leetcode.cn id=912 lang=typescript
 *
 * [912] 排序数组
 */

// @lc code=start

// function swap(nums: number[], a: number, b: number) {
//   const temp = nums[a];
//   nums[a] = nums[b];
//   nums[b] = temp;
// }

// function partition(nums: number[], left: number, right: number): number {
//   if (left >= right) return right;

//   const pvoit = nums[left];
//   const start = left;
//   left = left + 1;
//   while (left <= right) {
//     if (nums[left] > pvoit && nums[right] < pvoit) {
//       swap(nums, left++, right--);
//     } else if (nums[left] <= pvoit) {
//       left++;
//     } else {
//       right--;
//     }
//   }
//   swap(nums, start, right);
//   return right;
// }

// quickSort 也是一样一定要有left和right
// function quickSort(nums: number[], left: number, right: number) {
//   if (left >= right) return;
//   const mid = partition(nums, left, right);
//   quickSort(nums, left, mid - 1);
//   quickSort(nums, mid + 1, right);
// }

// function sortArray(nums: number[]): number[] {
//   quickSort(nums, 0, nums.length - 1);
//   return nums;
// }

/**
 * 这一次使用归并排序，和快速排序一样，总是忘记
 * 这里也是，需要一个独立的mergeSort函数用来传参
 */

function merge(nums: number[], left: number, mid: number, right: number) {
  // 比较直观的写法，可以用一些小技巧，来优化代码数量
  // const tempNums = [];
  // let p1 = left;
  // let p2 = mid + 1;
  // while (p1 <= mid && p2 <= right) {
  //   if (nums[p1] < nums[p2]) {
  //     tempNums.push(nums[p1++]);
  //   } else {
  //     tempNums.push(nums[p2++]);
  //   }
  // }
  // while (p1 <= mid) {
  //   tempNums.push(nums[p1++]);
  // }
  // while (p2 <= right) {
  //   tempNums.push(nums[p2++]);
  // }
  // // 归位
  // for (let i = left; i <= right; i++) {
  //   nums[i] = tempNums[i - left];
  // }
  // 优化一些，切分出两个子数组，并且增加哨兵

  const arr1 = nums.slice(left, mid + 1);
  const arr2 = nums.slice(mid + 1, right + 1);

  arr1.push(Infinity);
  arr2.push(Infinity);

  let p1 = left;
  let p2 = mid + 1;
  let cur = left;
  while (p1 <= mid || p2 <= right) {
    if (arr1[p1 - left] < arr2[p2 - mid - 1]) {
      nums[cur] = arr1[p1 - left];
      p1++;
    } else {
      // 这里不行啊，相当于判断谁小，还把谁放在原位。。。
      nums[cur] = arr2[p2 - mid - 1];
      p2++;
    }
    cur++;
  }

  // for (let i = left, p1 = 0, p2 = 0; i <= right; i++) {
  //   if (arr1[p1] < arr2[p2]) {
  //     nums[i] = arr1[p1++];
  //   } else {
  //     nums[i] = arr2[p2++];
  //   }
  // }
}

// mergeSort 需要递归，参数一定要有left和right
function mergeSort(nums: number[], left: number, right: number): void {
  if (left >= right) return;

  const mid = left + ((right - left) >> 1);
  mergeSort(nums, left, mid); // 排序左区间
  mergeSort(nums, mid + 1, right); // 排序右区间

  merge(nums, left, mid, right);
}

export function sortArray(nums: number[]): number[] {
  mergeSort(nums, 0, nums.length - 1);
  return nums;
}

// @lc code=end
