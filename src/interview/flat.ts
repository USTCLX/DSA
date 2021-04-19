// 数组扁平化
export function flat(arr: any, res: any[] = []): any[] {
  if (!arr || !arr.length) return arr;

  arr.forEach((item: any) => {
    if (Array.isArray(item)) {
      flat(item, res);
    } else {
      res.push(item);
    }
  });

  return res;
}
