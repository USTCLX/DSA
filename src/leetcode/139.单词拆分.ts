/*
 * @lc app=leetcode.cn id=139 lang=typescript
 *
 * [139] 单词拆分
 */

// @lc code=start
// 递归的解法
function check(
  s: string,
  wordDict: string[],
  cache: Set<string> = new Set()
): boolean {
  if (!s) return true;

  if (cache.has(s)) {
    return false;
  }

  for (let i = 0; i < s.length; i++) {
    const word = s.slice(0, i + 1);
    if (wordDict.includes(word) && check(s.slice(i + 1), wordDict, cache)) {
      return true;
    }
  }

  cache.add(s);

  return false;
}

// 动态规划的解法
// dp[i] 代表0-i这个子串是否可以被拆分
// dp[i] = dp[q] && words.include(s[q+1~i]); 其中q的范围是0～i-1
function dp(s: string, wordDict: string[]): boolean {
  const dp = Array(s.length + 1).fill(false);
  dp[0] = true; // 默认 '' 在wordDict中
  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j <= i; j++) {
      if (dp[j] && wordDict.includes(s.slice(j, i + 1))) {
        dp[i + 1] = true;
        break;
      }
    }
  }

  return dp[dp.length - 1];
}

function wordBreak(s: string, wordDict: string[]): boolean {
  return dp(s, wordDict);
}
// @lc code=end

export { wordBreak };
