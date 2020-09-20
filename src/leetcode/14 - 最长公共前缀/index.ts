/**
 * 我自己的解法
 * 其实就是纵向扫描，只不过我用while循环来实现了
 * 其实优点复杂了，使用while循环，只要是不知道第一层循环字符串的长度是多少。
 * 其实不需要知道，只要用strs[0] 的长度来确定就好了。因为是公共前缀。所以不管strs[0]的长度长了，或者短了，都会出现不符合的。跳出循环，返回结果。
 * @param strs 字符串
 */
export const longestCommonPrefix = function(strs: Array<string>) {
  if (!strs || strs.length === 0) return "";

  let res = "";
  let chars = new Set();
  let i = 0; // 代表纵向的第几列

  // eslint-disable-next-line no-constant-condition
  while (true) {
    chars.clear();
    let str = "";
    for (str of strs) {
      if (str[i] == null) {
        return res;
      } else if (chars.size === 0) {
        chars.add(str[i]);
      } else if (!chars.has(str[i])) {
        return res;
      }
    }

    res += str[i];

    i++;
  }
};

function lcpBetweenTwo(str1: string, str2: string): string {
  if (!str1 || !str2) return "";
  const length = Math.min(str1.length, str2.length);
  let prefix = "";
  for (let i = 0; i < length; i++) {
    if (str1[i] === str2[i]) {
      prefix += str1[i];
    } else {
      break;
    }
  }
  return prefix;
}

/**
 * 是横向扫描
 * 但是需要把问题分解，求LCP(S1,S2,S3...SN) = LCP(LCP(LCP(S1,S2),S3)...SN)
 * @param strs
 */
export const longestCommonPrefix2 = function(strs: Array<string>) {
  if (!strs || strs.length == 0) return "";

  let prefix = strs[0];
  for (let i = 1; i < strs.length; i++) {
    prefix = lcpBetweenTwo(prefix, strs[i]);
    if (!prefix) break;
  }
  return prefix;
};
