import swap from "../../tools/swap";

function permuteHelper(
  arr: Array<string>,
  index: number,
  res: Set<string>
): void {
  if (index === arr.length - 1) {
    res.add(arr.join(""));
  }

  for (let i = index; i < arr.length; i++) {
    swap(arr, index, i);
    permuteHelper(arr, index + 1, res);
    swap(arr, index, i);
  }
}

export const permutation = function(s: string): Array<string> {
  const res: Set<string> = new Set();
  permuteHelper(s.split(""), 0, res);
  return Array.from(res);
};
