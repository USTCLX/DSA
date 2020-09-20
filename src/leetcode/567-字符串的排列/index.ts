import { permutation } from "../offer38-字符串的全排列";
/**
 * 暴力
 * 列举s1的全排列，然后依次验证其是否是s2的子串
 * @param s1
 * @param s2
 */

export const checkInclusion = function(s1: string, s2: string): boolean {
  if (s2.length < s1.length) return false;
  const allS1 = permutation(s1);

  let result = false;
  for (let str of allS1) {
    if (s2.includes(str)) {
      result = true;
      break;
    }
  }
  return result;
};

/**
 * 解法2，统计s1中字母的个数。可以用哈希表，但是由于小写字母种类有限，因此可以使用数组来表示
 * 使用滑动区间遍历s2,统计s2 中的字母个数。然后不断的和s1的字母个数比较。
 * @param s1
 * @param s2
 */

const compare = function(a1: Array<number>, a2: Array<number>): boolean {
  if (a1.length !== a2.length) return false;

  return a1.join("") === a2.join("");
};

export const checkInclusion2 = function(s1: string, s2: string): boolean {
  if (s2.length < s1.length) return false;

  // init codes which save s1
  const s1Code = Array(26).fill(0);
  const s2Code = Array(26).fill(0);
  const baseCode = "a".charCodeAt(0);
  for (let i = 0; i < s1.length; i++) {
    s1Code[s1.charCodeAt(i) - baseCode]++;
    s2Code[s2.charCodeAt(i) - baseCode]++;
  }

  // compare
  for (let i = 0; i + s1.length <= s2.length; i++) {
    if (compare(s1Code, s2Code)) {
      return true;
    }
    // update s2Code
    s2Code[s2.charCodeAt(i) - baseCode]--;
    s2Code[s2.charCodeAt(i + s1.length) - baseCode]++;
  }

  return false;
};
