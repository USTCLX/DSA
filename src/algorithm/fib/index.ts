export default (n: number): number => {
  let f = 0;
  let g = 1;
  while (n-- > 0) {
    g = g + f;
    f = g - f;
  }
  return g;
};
