/**
 * 算法一：递归，减而治之
 * 最坏情况需要时间复杂度为 2^n
 * 从后往前比较两个字符串
 * @param strA 字符串A
 * @param strB 字符串B
 */
export const lscByRecursion = (strA: string, strB: string): string => {
  let n = strA.length - 1;
  let m = strB.length - 1;
  if (n < 0 || m < 0) return "";
  if (strA[n] === strB[m]) {
    return lscByRecursion(strA.substring(0, n), strB.substring(0, m)) + strA[n];
  } else {
    let caseA = lscByRecursion(strA.substring(0, n + 1), strB.substring(0, m));
    let caseB = lscByRecursion(strA.substring(0, n), strB.substring(0, m + 1));
    return caseA.length > caseB.length ? caseA : caseB;
  }
};

/**
 * 算法二动态规划
 * 两个字符串，画一个二维的表格，从索引的低位向高位遍历，记录下到当前位置，最长公共子序列的长度
 * 分为两种情况
 * 1、当前索引位置i，j strA[i]==strB[j] 那么dp[i][j] = dp[i-1][j-1]+1;
 * 2、当前索引位置i, j strA[i]!=strB[j] 那么dp[i][j] = Max(dp[i-1][j-1],dp[i][j-1],dp[i-1][j])
 * @param strA A
 * @param strB B
 */
export const lscByDynamic = (strA: string, strB: string): number => {
  let dp: number[][] = [];
  let i = 0,
    j = 0;

  for (i = 0; i <= strA.length; i++) {
    dp[i] = [];
    for (j = 0; j <= strB.length; j++) {
      dp[i][j] = 0;
    }
  }

  for (i = 1; i <= strA.length; i++) {
    for (j = 1; j <= strB.length; j++) {
      if (strA[i - 1] === strB[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i][j - 1], dp[i - 1][j]);
      }
    }
  }
  return dp[i - 1][j - 1];
};
