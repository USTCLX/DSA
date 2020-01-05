const swap = (arr: Array<any>, a: number, b: number): void => {
  const temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
};

export default swap;
