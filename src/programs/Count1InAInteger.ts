const cache: Record<number, number> = {};

const count1InAInteger = (n: number): number => {
  if (cache[n]) return cache[n];
  let iNum = 0;
  while (n !== 0) {
    iNum += n % 10 === 1 ? 1 : 0;
    n = Math.floor(n / 10);
  }
  cache[n] = iNum;
  return iNum;
};

export const f = (n: number): number => {
  let allNum = 0;
  for (let i = 0; i <= n; i++) {
    allNum += count1InAInteger(i);
  }
  return allNum;
};
