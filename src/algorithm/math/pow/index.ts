/**
 * 如果exponent为负数，那么结果为倒数。
 * 需要考虑 base=0 exponent为负数的情况。此时0的倒数是非法的
 * @param base
 * @param exponent
 */
function power(base: number, exponent: number): number {
  if (base === 0 && exponent < 0) {
    throw new Error("invalid input");
  }

  const absExponent = Math.abs(exponent);

  let result = betterPowerWithUnsignedExponent(base, absExponent);

  if (exponent < 0) {
    result = 1 / result;
  }

  return result;
}

/**
 * 普通的算法，需要执行exponent次
 * @param base
 * @param exponent
 */
export function powerWithUnsignedExponent(
  base: number,
  exponent: number
): number {
  for (let i = 0; i < exponent; i++) {
    base *= base;
  }
  return base;
}

/**
 * 一种更高效的算法
 * a^n = a^(n/2) *  a^(n/2) n为偶数
 * a^n = a^(n/2) *  a^(n/2) n为奇数
 * 由此需要递归的解法
 * 需要注意递归基
 * @param base
 * @param exponent
 */
export function betterPowerWithUnsignedExponent(
  base: number,
  exponent: number
): number {
  if (exponent === 0) {
    return 1;
  }
  if (exponent === 1) {
    return base;
  }

  let result = betterPowerWithUnsignedExponent(base, exponent >> 1);
  result *= result;

  if ((exponent & 0x01) === 1) {
    result *= base;
  }

  return result;
}

export default power;
