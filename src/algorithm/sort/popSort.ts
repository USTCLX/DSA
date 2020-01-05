import swap from "../../tools/swap";

export default (arr: Array<number>): Array<number> => {
  let length = arr.length;
  for (let sorted = false; !sorted; length--) {
    sorted = true;
    for (let i = 1; i < length; i++) {
      if (arr[i - 1] > arr[i]) {
        swap(arr, i - 1, i);
        sorted = false;
      }
    }
  }
  return arr;
};
