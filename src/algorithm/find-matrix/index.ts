export default function(matrix: Array<Array<number>>, target: number): boolean {
  if (matrix.length === 0) return false;

  const rows = matrix.length;
  const columns = matrix[0].length;

  let row = 0;
  let column = columns - 1;
  while (row < rows && column >= 0) {
    if (matrix[row][column] === target) {
      return true;
    } else if (matrix[row][column] > target) {
      column--;
    } else if (matrix[row][column] < target) {
      row++;
    }
  }

  return false;
}
