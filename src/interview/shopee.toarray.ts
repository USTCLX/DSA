// console.log("keke", toArray("[1, 2, 3, [4, 5, [6,7,8, [9,10]]]]"));

export function toArray(str: string): any {
  if (!str) return [];

  const stack: number[][] = [];
  let top: any[] = null;
  let res = null;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "[") {
      const arr: any[] = [];
      if (top != null) {
        top.push(arr);
      } else {
        res = arr;
      }
      top = arr;
      stack.push(top);
    } else if (str[i] === "]") {
      stack.pop();
      top = stack[stack.length - 1];
    } else if (/\d/.test(str[i])) {
      let num = str[i];
      while (/\d/.test(str[i + 1])) {
        i++;
        num += str[i];
      }
      top.push(Number(num));
    }
  }

  return res;
}
