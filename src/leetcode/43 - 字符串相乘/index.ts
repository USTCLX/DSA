var addStrings = function(num1: string, num2: string) {
  let p1 = num1.length - 1;
  let p2 = num2.length - 1;
  let add = 0;
  let res = [];
  while (p1 >= 0 || p2 >= 0 || add != 0) {
    let n1 = p1 >= 0 ? num1[p1] - "0" : 0;
    let n2 = p2 >= 0 ? num2[p2] - "0" : 0;
    let n = n1 + n2 + add;

    res.unshift(n % 10);
    add = Math.floor(n / 10);
    p1--;
    p2--;
  }
  return res.join("");
};

export const multiply = function(num1: string, num2: string) {
  if (!num1 || !num2 || num1 === "0" || num2 === "0") return "0";

  const arr = [];

  for (let p2 = num2.length - 1; p2 >= 0; p2--) {
    let temp = [];
    for (let p1 = num1.length - 1; p1 >= 0; p1--) {
      const n2 = (num2[p2] - "0") * Math.pow(10, num2.length - 1 - p2);
      const n1 = (num1[p1] - "0") * Math.pow(10, num1.length - 1 - p1);

      temp.push(String(n1 * n2));
    }
    arr.push(
      temp.reduce((a, b) => {
        return addStrings(a, b);
      })
    );
  }

  return arr.reduce((a, b) => {
    return addStrings(a, b);
  });
};
