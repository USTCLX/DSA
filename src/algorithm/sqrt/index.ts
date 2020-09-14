export default function sqrt(num: number): number {
  if (num === 0 || num === 1) return num;
  let low = 0;
  let high = num;
  let mid = low + (high - low) / 2;
  while (Math.abs(num - mid * mid) > 1e-6) {
    mid = low + (high - low) / 2;
    if (mid * mid > num) {
      high = mid;
    } else {
      low = mid;
    }
  }
  return Number(mid.toFixed(6));
}
