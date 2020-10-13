import swap from "../tools/swap";

function permute(nums: number[], index: number, res: number[][]) {
  if (index === nums.length - 1) {
    res.push([...nums]);
  }

  for (let i = index; i < nums.length; i++) {
    swap(nums, index, i);
    permute(nums, index + 1, res);
    swap(nums, index, i);
  }
}
