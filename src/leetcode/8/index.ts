export function atoi(str: string): number {
  const reg = /^\s*([-+]?[0-9]+).*/;

  const groups = str.match(reg);

  if (groups) {
    const max = Math.pow(2, 31) - 1;
    const min = -max - 1;
    const result = Number(groups[1]);

    if (!isNaN(result)) {
      if (result > max) {
        return max;
      } else if (result < min) {
        return min;
      } else {
        return result;
      }
    }
  }

  return 0;
}
