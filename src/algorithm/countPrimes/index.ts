const countPrimes = (n: number) => {
  let count = 0;

  const isPrime = (num: number) => {
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  };

  for (let i = 2; i < n; i++) {
    if (isPrime(i)) count++;
  }
  return count;
};

// 标记法
// 先把所有的数，标记为质数，然后标记出不是质数的数字。
// 优化一：判断质数，不需要遍历到n，只要遍历到sqart(n)
// 优化二：避免重复标记非质数，可以从 i*i 开始，之前的应该都被i-1标记过了
var bettterCountPrimes = function(n: number) {
  const primes = Array(n).fill(true);

  for (let i = 2; i * i < n; i++) {
    if (primes[i]) {
      for (let j = i * i; j < n; j += i) {
        primes[j] = false;
      }
    }
  }

  let count = 0;
  for (let i = 2; i < n; i++) {
    if (primes[i]) count++;
  }

  return count;
};

export default bettterCountPrimes;
