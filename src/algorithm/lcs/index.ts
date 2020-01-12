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
 * @param strA A
 * @param strB B
 */
export const lscByDynamic = (strA: string, strB: string): string => {
  return "";
};
