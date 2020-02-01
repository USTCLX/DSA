import swap from "../../tools/swap";

const bubble = (arr: Array<number>, lo: number, hi: number): boolean => {
  let sorted = true;
  while (++lo < hi) {
    if (arr[lo - 1] > arr[lo]) {
      sorted = false;
      swap(arr, lo - 1, lo);
    }
  }
  return sorted;
};

interface IGeneric<T> {
  (arg: T): T;
}

const bubbleSort: IGeneric<Array<number>> = args => {
  let lo = 0;
  let hi = args.length;
  while (!bubble(args, lo, hi--));
  return args;
};

export default bubbleSort;
