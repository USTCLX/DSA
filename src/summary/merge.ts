export function merge(
  nums: number[],
  left: number,
  mid: number,
  right: number
) {
  if (left >= right) return;

  const arr1 = nums.slice(left, mid + 1);
  const arr2 = nums.slice(mid + 1, right);

  arr1.push(Infinity);
  arr2.push(Infinity);

  for (let i = left, p1 = 0, p2 = 0; i <= right; i++) {
    if (arr1[p1] < arr2[p2]) {
      nums[i] = arr1[p1];
      p1++;
    } else {
      nums[i] = arr2[p2];
      p2++;
    }
  }
}
