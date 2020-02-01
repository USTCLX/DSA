import swap from "../../tools/swap";

const bubble = (arr: Array<number>, lo: number, hi: number): number => {
  let last = lo;
  while (++lo < hi) {
    if (arr[lo - 1] > arr[lo]) {
      last = lo;
      swap(arr, lo - 1, lo);
    }
  }
  return last;
};

interface IGenericBubbleSort<T> {
  (arg: T): T;
}

const bubbleSort: IGenericBubbleSort<Array<number>> = args => {
  let lo = 0;
  let hi = args.length;
  while (lo < (hi = bubble(args, lo, hi)));
  return args;
};

export default bubbleSort;
