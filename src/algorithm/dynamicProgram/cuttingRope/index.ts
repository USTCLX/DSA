/**
 * 首先定义函数f(n)为把长度为n的绳子剪成若干段后各段长度乘积的最大值
 * 在剪第一刀的时候，我们有n-1种可能的选择，也就是剪出的第一段绳子的长度可能是1，2，3，4，。。。，n-1
 * 因此f(n) = max(f(i)×f(n-i))，其中1<i<n
 * 这就是一个从上到下的递归式。由于递归很多重复的子问题，从而有大量的不必要的重复计算
 * 因此一个更好的方法是从下到上去计算。先计算f(2),f(3)。从而可以方便的得到f(4),f(5)。最后得到f(n)
 * @param length
 */
function maxProductAfterCutting(length: number): number {
  if (length < 2) {
    return 0;
  }
  if (length === 2) {
    return 1;
  }
  if (length === 3) {
    return 2;
  }

  const products: Array<number> = [];
  products[0] = 0;
  products[1] = 1;
  products[2] = 2;
  products[3] = 3;
  let max = 0;
  for (let i = 4; i <= length; i++) {
    max = 0;
    for (let j = 1; j <= i >> 1; j++) {
      const product = products[j] * products[i - j];
      if (max < product) {
        max = product;
      }
    }
    products[i] = max;
  }

  max = products[length];
  return max;
}

export default maxProductAfterCutting;
