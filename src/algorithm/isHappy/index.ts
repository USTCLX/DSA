const isHappy = function(n: number): any {
  let result = 0;
  while (n) {
    const cur = n % 10;
    result += Math.pow(cur, 2);
    n = Math.floor(n / 10);
  }
  if (result === 1) {
    return true;
  } else {
    return isHappy(result);
  }
};
export default isHappy;
