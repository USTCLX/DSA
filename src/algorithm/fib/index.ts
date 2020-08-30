export default (n: number): number => {
  let f = 0;
  let g = 1;
  while (n-- > 0) {
    g = g + f;
    f = g - f;
  }
  return g;
};

// 递推的形式求斐波那契数
// 一种最简单的动态规划
export const fibByMemo = (n: number): number => {
  const f = [];
  (f[0] = 0), (f[1] = 1);
  for (let i = 2; i <= n; i++) {
    f[i] = f[i - 1] + f[i - 2];
  }
  return f[n];
};

// 递归的形式求斐波那契数
// 效果很差 2^2
export const fibByRecursion = (n: number): number => {
  return n <= 0
    ? 0
    : n === 1
    ? 1
    : fibByRecursion(n - 1) + fibByRecursion(n - 2);
};
