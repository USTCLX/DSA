/*
 * @lc app=leetcode.cn id=93 lang=typescript
 *
 * [93] 复原 IP 地址
 */

// @lc code=start
// 深度搜索啦

function isValid(s: string): boolean {
  if (!s.length || s.length > 3) return false;

  if (s !== "0" && s.startsWith("0")) return false;

  if (Number(s) > 255) return false;

  return true;
}

function dfs(s: string, temp: string[] = [], ans: string[] = []) {
  if (temp.length === 4) {
    if (s === "") {
      ans.push(temp.join("."));
    }
    return;
  }

  for (let i = 1; i <= 3 && i <= s.length; i++) {
    const subStr = s.slice(0, i);
    if (isValid(subStr)) {
      temp.push(subStr);
      dfs(s.slice(i), temp, ans);
      temp.pop();
    }
  }
}

function restoreIpAddresses(s: string): string[] {
  if (s.length < 4 || s.length > 12) return [];

  const ans: string[] = [];

  dfs(s, [], ans);

  return ans;
}
// @lc code=end

export { restoreIpAddresses };
