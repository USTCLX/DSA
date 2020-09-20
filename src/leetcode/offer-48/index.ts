// 求一个字符串中最大的没有重复的字串
// 动态规划+Map
/**
 * 状态转移方程
 * dp[i] 代表以s[i] 为结尾往前数的最长不重复子串的长度
 * 当前坐标cur
 * s[cur] 这个元素 上一次出现的坐标 last
 * dp[cur] = dp[cur - 1] + 1; // cur - last > dp[cur - 1]; 重复元素不在 dp[cur-1] 范围内
 * dp[cur] = cur - last; // cur - last <= dp[cur - 1]; 重复元素在dp[cur - 1] 范围内
 * @param s
 */
export const lengthOfLongestSubstring = function(s: string) {
  if (!s) return 0;

  const map = new Map(); //记录同一个字符最后的位置
  const dp = [1]; // 动态规划数组
  map.set(s[0], 0);

  for (let cur = 1; cur < s.length; cur++) {
    const last = map.has(s[cur]) ? map.get(s[cur]) : -1;

    if (cur - last > dp[cur - 1]) {
      // 说明当前字符在cur-1的最优解的范围内，没有重复值
      dp[cur] = dp[cur - 1] + 1;
    } else {
      dp[cur] = cur - last;
    }

    // 更新当前字符的最新位置
    map.set(s[cur], cur);
  }

  let res = 0;
  dp.forEach(item => {
    res = item > res ? item : res;
  });
  return res;
};

// 优化解法
// 节省dp的空间，因为dp只要记住上一次的就好了。
export const lengthOfLongestSubstring2 = (s: string): number => {
  if (!s || s.length == 0) return 0;
  if (s.length == 1) return 1;
  const map = new Map([[s[0], 0]]);
  let dp = 1;
  let res = 0;
  for (let cur = 1; cur < s.length; cur++) {
    const last = map.has(s[cur]) ? map.get(s[cur]) : -1;
    if (cur - last > dp) {
      dp = dp + 1;
    } else {
      dp = cur - last;
    }
    res = dp > res ? dp : res;

    map.set(s[cur], cur);
  }
  return res;
};
