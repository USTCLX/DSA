export function count(nums: number[], k: number): number {
  let count = 0;
  const preSum = Array(nums.length).fill(0);
  const map = new Map();

  map.set(0, 1);
  for (let i = 0; i < nums.length; i++) {
    preSum[i + 1] = preSum[i] + nums[i];
    const target = preSum[i + 1] - k;
    if (map.has(target)) {
      count = count + map.get(target);
    }
    const old = map.get(preSum[i + 1]) || 0;
    map.set(preSum[i + 1], old + 1);
  }

  return count;
}
