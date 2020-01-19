export default (array: Array<number>, target: number): number => {
  let lo = 0;
  let hi = array.length - 1;
  while (lo <= hi) {
    let mid = Math.floor((lo + hi) / 2);
    if (target < array[mid]) {
      hi = mid - 1;
    } else if (array[mid] < target) {
      lo = mid + 1;
    } else if (array[mid] === target) {
      return mid;
    }
  }

  return -1;
};
