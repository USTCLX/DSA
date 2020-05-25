const swap = <T>(arr: Array<T>, a: number, b: number): void => {
  const temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
};

export default swap;
