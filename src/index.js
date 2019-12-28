const permutation = require("./algorithm/permutation");
const search = require("./algorithm/search");

// permutation([1, 2, 2], 0);

const index = search([1, 2, 3, 4], 4);
console.log("index", index);

var removeDuplicates = function(nums) {
  if (nums.length === 0) return 0;
  let i = 0;
  let j = 1;
  for (j; j < nums.length; j++) {
    if (nums[i] !== nums[j]) {
      i++;
      nums[i] = nums[j];
    }
  }
  return i + 1;
};

removeDuplicates([1, 2, 3]);
