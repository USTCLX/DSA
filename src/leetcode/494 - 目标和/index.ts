var count = 0;

var bfs = function(nums, index, sum, S) {
  if (index === nums.length) {
    if (sum === S) {
      count++;
    }
    return;
  }

  sum = sum + nums[index];
  bfs(nums, index + 1, sum, S);
  sum = sum - nums[index];

  sum = sum - nums[index];
  bfs(nums, index + 1, sum, S);
  sum = sum + nums[index];
};

/**
 * @param {number[]} nums
 * @param {number} S
 * @return {number}
 */
export var findTargetSumWays = function(nums, S) {
  count = 0;
  bfs(nums, 0, 0, S);
  return count;
};
