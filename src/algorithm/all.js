const FIVEMINUTES = 5 * 60 * 1000;

class Average {
  constructor() {
    this.records = [];
    this.sum = 0;
    this.lastStart = 0;
    this.lastEnd = 0;
  }
  record(value) {
    if (value < 0 || value > 100) {
      return;
    }
    const time = Date.now();
    this.records.push({
      time,
      value
    });
  }
  average() {
    this.lastEnd = this.records.length - 1;
    const now = Date.now();
    const beforeFiveMinutes = now - FIVEMINUTES;
    let count = 0;

    for (let i = this.records.length - 1; i >= this.lastStart; i--) {
      let curRecord = this.records[i];

      if (curRecord.time >= beforeFiveMinutes) {
        this.sum += curRecord.value;
        count++;
        this.lastStart = i;
      }
    }

    if (count === 0) {
      return -1;
    } else {
      return Math.floor(this.sum / count);
    }
  }
}

function test() {
  // case 1
  const average1 = new Average();
  let value1 = 0;
  let interval1 = setInterval(() => {
    // 0 1 2 3 => 1
    average1.record(value1);
    value1++;
    if (value1 >= 3) {
      clearInterval(interval1);
      console.log(
        "case1 expect 1",
        average1.average() === 1,
        average1.average()
      );
    }
  }, 100);

  // case 2
  const average2 = new Average();
  console.log("case2 expect -1", average2.average() === -1);

  // case 3
  const average3 = new Average();
  let value3 = 1;
  average3.record(value3);
  average3.records[0].time = average3.records[0].time - FIVEMINUTES;
  let interval3 = setInterval(() => {
    average3.record(++value3);
    if (value3 >= 3) {
      // 1| 2,3 => 2
      clearInterval(interval3);
      console.log(
        "case3 expect 2",
        average3.average() === 2,
        average3.average()
      );
    }
  }, 10);
}

test();

// setTimeout(() => {
//   average3.record(3);
//   console.log("expact 3", average3.average3 === 3);
// }, FIVEMINUTES);

/**
 * @param {number[]} nums
 * @return {number[]}
 */

var swap = (nums, a, b) => {
  const temp = nums[a];
  nums[a] = nums[b];
  nums[b] = temp;
};

var partition = (nums, start, end) => {
  if (start >= end) {
    return nums[start];
  }
  const pvoit = nums[start];
  let l = start + 1;
  let r = end;
  while (l <= r) {
    if (l >= 0 && r <= nums.length - 1 && nums[l] > pvoit && nums[r] < pvoit) {
      swap(nums, l, r);
      l++;
      r--;
    } else if (nums[l] <= pvoit) {
      l++;
    } else if (nums[r] >= pvoit) {
      r--;
    }
  }
  swap(nums, start, r);
  return r;
};

// var sortArray = function(nums) {
//     for(let i=0;i<nums.length;i++){
//         for(j=i+1;j<nums.length;j++){
//             if(nums[i]>nums[j]){
//                 swap(nums,i,j);
//             }
//         }
//     }
//     return nums;
// };

var sortArray = function(nums) {
  const quickSort = (nums, start, end) => {
    if (start >= end) {
      return;
    }
    const p = partition(nums, start, end);
    quickSort(nums, start, p - 1);
    quickSort(nums, p + 1, end);
  };
  quickSort(nums, 0, nums.length - 1);
  return nums;
};

sortArray([5, 2, 3, 1]);

var isValid = function(s) {
  const stack = [];
  const map = new Map([
    ["(", ")"],
    [")", "("],
    ["{", "}"],
    ["}", "{"],
    ["[", "]"],
    ["]", "["]
  ]);
  let temp;
  let top;
  for (let i = 0; i < s.length; i++) {
    temp = map.get(s[i]);
    top = stack[stack.length - 1];
    if (top === temp) {
      stack.pop();
    } else {
      stack.push(s[i]);
    }
  }
  return stack.length === 0;
};

isValid("()");

var dfs = function(grid, r, c) {
  grid[r][c] = "0";
  const rl = grid.length;
  const cl = grid[0].length;

  if (r - 1 >= 0 && grid[r - 1][c] === "1") dfs(grid, r - 1, c);
  if (r + 1 < rl && grid[r + 1][c] === "1") dfs(grid, r + 1, c);
  if (c - 1 >= 0 && grid[r][c - 1] === "1") dfs(grid, r, c - 1);
  if (c + 1 < cl && grid[r][c + 1] === "1") dfs(grid, r, c + 1);
};

var numIslands = function(grid) {
  let islandCnt = 0;
  if (grid.length === 0) {
    return islandCnt;
  }
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === "1") {
        islandCnt++;
        dfs(grid, i, j);
      }
    }
  }
  return islandCnt;
};

numIslands([
  ["1", "1", "1", "1", "0"],
  ["1", "1", "0", "1", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "0", "0", "0"]
]);

var twoSum = function(nums, target) {
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    let cur = nums[i];
    let diff = target - cur;
    if (map[diff] !== undefined) {
      return [map[diff], i];
    } else {
      map[diff] = i;
    }
  }
  return [0, 0];
};

twoSum([2, 7, 11, 15], 9);

var lengthOfLongestSubstring = function(s) {
  var allUnique = function(str, start, end) {
    var set = new Set();
    for (let i = start; i <= end; i++) {
      if (set.has(str[i])) {
        return false;
      } else {
        set.add(s[i]);
      }
    }
    return true;
  };
  var maxLength = 0;
  for (let i = 0; i < s.length; i++) {
    for (let j = i; j < s.length; j++) {
      if (allUnique(s, i, j)) {
        maxLength = Math.max(maxLength, j - i + 1);
      }
    }
  }
  return maxLength;
};

lengthOfLongestSubstring("bbbbb");

var lengthOfLongestSubstring = function(s) {
  let p1 = 0;
  let p2 = 0;
  let start = p1;
  let maxLength = 0;

  var isExist = function(s, start, end) {
    var set = new Set();
    for (let i = start; i < end; i++) {
      set.add(s[i]);
    }
    return set.has(s[end]);
  };

  while (p2 < s.length) {
    if (isExist(s, p1, p2)) {
      p2++;
    } else if (p1 < p2) {
      p1++;
    } else {
      p2++;
    }
    if (p2 - p1 > maxLength) {
      start = p1;
      maxLength = p2 - p1;
    }
  }
  return maxLength;
};
lengthOfLongestSubstring("abcabcbb");

// var longestPalindrome = function(s) {
//   var isPalindrome = function(s, start, end) {
//     let p1 = start;
//     let p2 = end;
//     while (p1 <= p2) {
//       if (s[p1] !== s[p2]) {
//         return false;
//       }
//       p1++;
//       p2--;
//     }
//     return true;
//   };

//   var maxLength = 0;
//   var start = 0;

//   for (let i = 0; i < s.length; i++) {
//     for (let j = i; j < s.length; j++) {
//       if (isPalindrome(s, i, j)) {
//         if (j - i + 1 > maxLength) {
//           maxLength = j - i + 1;
//           start = i;
//         }
//       }
//     }
//   }
//   return s.substr(start, maxLength);
// };

var expandFromCenter = function(s, left, right) {
  let longestStr = "";
  while (left >= 0 && right < s.length && s[left] === s[right]) {
    longestStr = s.slice(left, right + 1);
    left--;
    right++;
  }
  return longestStr;
};

var longestPalindrome = function(s) {
  let lonestStr = "";
  for (let i = 0; i < s.length; i++) {
    let str1 = expandFromCenter(s, i, i);
    let str2 = expandFromCenter(s, i, i + 1);
    let str = str1.length > str2.length ? str1 : str2;
    if (str.length > lonestStr.length) {
      lonestStr = str;
    }
  }
  return lonestStr;
};

console.log("keke", longestPalindrome("a"));

// var trap = function(height) {
//   let maxLeft = 0;
//   let maxRight = 0;
//   let ans = 0;
//   for (let i = 1; i < height.length - 1; i++) {
//     // 由于左右两边不可能才存水，所以从1到height-2
//     // search maxLeft
//     maxLeft = 0;
//     maxRight = 0;
//     for (let j = i; j >= 0; j--) {
//       maxLeft = Math.max(maxLeft, height[j]);
//     }
//     // search maxRight
//     for (let j = i; j < height.length; j++) {
//       maxRight = Math.max(maxRight, height[j]);
//     }

//     ans += Math.min(maxLeft, maxRight) - height[i];
//   }
//   return ans;
// };

var trap = function(height) {
  if (height.length <= 2) {
    return 0;
  }

  let maxLeft = [];
  let maxRight = [];
  let ans = 0;
  maxLeft[0] = height[0];
  maxRight[height.length - 1] = height[height.length - 1];

  for (let i = 1; i < height.length; i++) {
    maxLeft[i] = Math.max(maxLeft[i - 1], height[i]);
  }

  for (let i = height.length - 2; i >= 0; i--) {
    maxRight[i] = Math.max(maxRight[i + 1], height[i]);
  }

  for (let i = 0; i < height.length; i++) {
    ans += Math.min(maxLeft[i], maxRight[i]) - height[i];
  }
  return ans;
};

trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]);
