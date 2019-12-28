const swap = require("../tools/swap");

const isSwap = (arr, index) => {
  for (let i = index + 1; i < arr.length; i++) {
    if (arr[index] === arr[i]) {
      return false;
    }
  }
  return true;
};

const permutation = (arr, index) => {
  if (index >= arr.length - 1) {
    console.log(arr);
    return;
  }
  for (let i = index; i < arr.length; i++) {
    if (isSwap(arr, i)) {
      swap(arr, index, i);
      permutation(arr, index + 1);
      swap(arr, index, i);
    }
  }
};

module.exports = permutation;
