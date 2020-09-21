const swap = (nums, a, b) => {
  const temp = nums[a];
  nums[a] = nums[b];
  nums[b] = temp;
};

const permuteHelper = (nums, index, res) => {
  if (index === nums.length - 1) {
    res.push([...nums]);
    return;
  }
  for (let i = index; i < nums.length; i++) {
    swap(nums, index, i);
    permuteHelper(nums, index + 1, res);
    swap(nums, index, i);
  }
};

export function permute(nums) {
  const res = [];
  permuteHelper(nums, 0, res);
  return res;
}
