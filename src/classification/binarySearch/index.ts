import { numIslands } from "../../leetcode/200-岛屿数量";

/**
 * 经典二分，查找一个等于给定值的元素，并返回其坐标
 * @param nums
 */
function binarySearch1(
  nums: number[],
  left: number,
  right: number,
  target: number
): number {
  while (left <= right) {
    const mid = left + ((right - left) >> 1);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}
export function search1(nums: number[], target: number) {
  return binarySearch1(nums, 0, nums.length - 1, target);
}

/**
 * 变体问题，查找最后一个值等于给定值的元素
 */
function binarySearch2(
  nums: number[],
  left: number,
  right: number,
  target: number
): number {
  while (left <= right) {
    let mid = left + ((right - left) >> 1);
    if (nums[mid] === target) {
      // 解释如下
      // while (nums[mid] === nums[mid + 1]) {
      //   mid = mid + 1;
      // }
      if (mid === nums.length - 1 || nums[mid] !== nums[mid + 1]) {
        return mid;
      } else {
        left = mid + 1;
      }
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = right - 1;
    }
  }
  return -1;
}
export function search2(nums: number[], target: number): number {
  return binarySearch2(nums, 0, nums.length - 1, target);
}

/**
 * 变体问题2，查找第一个等于给定值的元素
 */
function binarySearch3(
  nums: number[],
  left: number,
  right: number,
  target: number
): number {
  while (left <= right) {
    let mid = left + ((right - left) >> 1);
    if (nums[mid] === target) {
      // 这里使用了一个while循环，会导致极端情况下，时间复杂度退化为O(n)
      // 因此可以稍微改造以下
      // while (nums[mid] === nums[mid - 1]) {
      //   mid = mid - 1;
      // }
      if (mid === 0 || nums[mid] !== nums[mid - 1]) {
        return mid;
      } else {
        right = mid - 1;
      }
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}

export function search3(nums: number[], target: number): number {
  return binarySearch3(nums, 0, nums.length - 1, target);
}

// 变体4，查找第一个大于等于给定值的元素
function binarySearch4(
  nums: number[],
  left: number,
  right: number,
  target: number
): number {
  while (left <= right) {
    let mid = left + ((right - left) >> 1);
    if (nums[mid] >= target) {
      // 这里自己写的逻辑有些啰嗦
      // 参考了王铮的写法，很简洁
      // if (nums[mid] === target) {
      //   // 如果等于
      //   return mid;
      // } else if (nums[mid] > target && (nums[mid - 1] < target || mid === 0)) {
      //   // 如果当前值大于target，并且上一个值小于target，说明target被夹在了中间。
      //   // 如果当前值大于target，并且mid等于0，说明后面的都大于target了，返回0
      //   return mid;
      // } else {
      //   right = mid - 1;
      // }
      if (mid === 0 || nums[mid - 1] < target) {
        return mid;
      } else {
        right = mid - 1;
      }
    } else {
      left = mid + 1;
    }
  }
  return -1;
}

export function search4(nums: number[], target: number): number {
  return binarySearch4(nums, 0, nums.length, target);
}

/**
 * 变体5，查找最后一个小于等于给定值的元素
 */
function binarySearch5(
  nums: number[],
  left: number,
  right: number,
  target: number
): number {
  while (left <= right) {
    const mid = left + ((right - left) >> 1);
    if (nums[mid] <= target) {
      // 解释如上
      // if (nums[mid] === target) {
      //   return mid;
      // } else if (
      //   nums[mid] < target &&
      //   (mid === nums.length - 1 || nums[mid + 1] > target)
      // ) {
      //   return mid;
      // } else {
      //   left = mid + 1;
      // }
      if (mid === nums.length - 1 || nums[mid + 1] > target) {
        return mid;
      } else {
        left = mid + 1;
      }
    } else {
      right = mid - 1;
    }
  }

  return -1;
}

export function search5(nums: number[], target: number): number {
  return binarySearch5(nums, 0, nums.length - 1, target);
}
