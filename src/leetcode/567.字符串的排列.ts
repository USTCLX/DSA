/*
 * @lc app=leetcode.cn id=567 lang=typescript
 *
 * [567] 字符串的排列
 */

// @lc code=start

function swap(arr: string[], a: number, b: number) {
  const temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}

function permute(str: string[], index: number, res: string[]): void {
  if (index === str.length) {
    res.push(str.join(""));
    return;
  }

  for (let i = index; i < str.length; i++) {
    swap(str, i, index);
    permute(str, index + 1, res);
    swap(str, i, index);
  }
}

/**
 * 首先列出s1的全排列，然后遍历检查s2中是否包含
 * @param s1
 * @param s2
 */
// function checkInclusion(s1: string, s2: string): boolean {
//   if (s1.length > s2.length) return false;

//   const res: string[] = [];
//   permute(s1.split(""), 0, res);

//   for (let i = 0; i < res.length; i++) {
//     if (s2.includes(res[i])) {
//       return true;
//     }
//   }

//   return false;
// }

/**
 * 为s1申请一个map，记为m1,m1 中记录s1中所有字母出现的次数
 * 以s1的长度作为滑动窗口，遍历s2, 遍历的过程中，对比s2在当前窗口中各个字母出现的次数，然后和m1 对比。
 * 如果一致，则说明s1的某个排列与当前窗口中的子串相等。返回结果。
 * 这里由于元素有限，使用数组更方便。
 * @param s1
 * @param s2
 */

// function checkEqual(m1: number[], m2: number[]): boolean {
//   for (let i = 0; i < m1.length; i++) {
//     if (m1[i] !== m2[i]) {
//       return false;
//     }
//   }
//   return true;
// }

// function checkInclusion(s1: string, s2: string): boolean {
//   if (s1.length > s2.length) return false;
//   const m1 = Array(26).fill(0);
//   const m2 = Array(26).fill(0);
//   const base = "a".charCodeAt(0);
//   for (let i = 0; i < s1.length; i++) {
//     m1[s1.charCodeAt(i) - base] += 1;
//     m2[s2.charCodeAt(i) - base] += 1;
//   }

//   const window = s1.length;
//   for (let i = window - 1; i <= s2.length; i++) {
//     if (checkEqual(m1, m2)) {
//       return true;
//     } else {
//       m2[s2.charCodeAt(i - (window - 1)) - base] -= 1;
//       m2[s2.charCodeAt(i + 1) - base] += 1;
//     }
//   }
//   return false;
// }

function compare(chars1: number[], chars2: number[]): boolean {
  for (let i = 0; i < chars1.length; i++) {
    if (chars1[i] !== chars2[i]) {
      return false;
    }
  }
  return true;
}

// 滑动窗口
function checkInclusion(s1: string, s2: string): boolean {
  if (!s1) return true;
  if (!s2 || s2.length < s1.length) return false;

  // 统计s1中每个字符的个数
  const chars1 = Array(26).fill(0);
  const chars2 = Array(26).fill(0);
  for (let i = 0; i < s1.length; i++) {
    chars1[s1.charCodeAt(i) - 97]++;
    chars2[s2.charCodeAt(i) - 97]++;
  }

  // 窗口从左到右滑动
  const len1 = s1.length;
  for (let i = len1 - 1; i < s2.length; i++) {
    if (compare(chars1, chars2)) {
      return true;
    } else {
      // 滑出窗口的元素的count-1
      chars2[s2.charCodeAt(i - (len1 - 1)) - 97]--;
      // 即将滑入窗口的元素的count+1
      chars2[s2.charCodeAt(i + 1) - 97]++;
    }
  }

  return false;
}
// @lc code=end

export { checkInclusion };
