export default (
  arr: Array<number>,
  lo: number,
  hi: number
): [number, number] => {
  let max = lo;
  let subMax = lo;
  for (let i = lo; i < hi; i++) {
    if (arr[i] > arr[subMax]) {
      if (arr[(subMax = i)] > arr[max]) {
        let temp = subMax;
        subMax = max;
        max = temp;
      }
    }
  }
  return [max, subMax];
};

export const divideFindMaxTwo = (
  arr: Array<number>,
  lo: number,
  hi: number,
  x1: number,
  x2: number
): [number, number] => {
  return [x1, x2];
};
